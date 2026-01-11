import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:video_player/video_player.dart';
import '../data/data_store.dart';
import '../models/progress.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';

class LessonViewScreen extends StatefulWidget {
  final int id;

  const LessonViewScreen({
    super.key,
    required this.id,
  });

  @override
  State<LessonViewScreen> createState() => _LessonViewScreenState();
}

class _LessonViewScreenState extends State<LessonViewScreen> {
  String? _youtubeVideoId;
  VideoPlayerController? _videoController;
  String? _currentVideoFile;

  @override
  void dispose() {
    _videoController?.dispose();
    super.dispose();
  }

  Future<void> _initializeVideoPlayer(String videoFile) async {
    if (_currentVideoFile == videoFile) return;

    _currentVideoFile = videoFile;
    await _videoController?.dispose();

    _videoController = VideoPlayerController.asset('assets/videos/fusion360/$videoFile');

    try {
      await _videoController!.initialize();
      setState(() {});
    } catch (e) {
      print('ERROR initializing video player: $e');
    }
  }

  String? _extractVideoFile(String content) {
    // Look for local video file reference: **Video**: filename.mp4
    final regex = RegExp(r'\*\*Video\*\*:\s*([a-zA-Z0-9_\-]+\.mp4)', caseSensitive: false);
    final match = regex.firstMatch(content);
    if (match != null && match.groupCount >= 1) {
      final videoFile = match.group(1);
      print('DEBUG: Extracted video file: $videoFile');
      return videoFile;
    }
    print('DEBUG: No video file found');
    return null;
  }

  String? _extractYouTubeVideoId(String content) {
    // Look for YouTube links - extract video ID from URL
    // Matches: youtube.com/watch?v=VIDEO_ID (with optional &parameters)
    final regex = RegExp(r'youtube\.com/watch\?v=([a-zA-Z0-9_-]+)');
    final match = regex.firstMatch(content);
    if (match != null && match.groupCount >= 1) {
      final videoId = match.group(1);
      print('DEBUG: Extracted YouTube Video ID: $videoId');
      return videoId;
    }
    print('DEBUG: No YouTube Video ID found');
    return null;
  }

  String? _extractYouTubeUrl(String content) {
    // Extract full YouTube URL from markdown format: [Watch on YouTube](URL)
    // Pattern to match: [Watch on YouTube](https://www.youtube.com/watch?v=VIDEO_ID&...)
    var regex = RegExp(r'\[Watch on YouTube\]\((https://www\.youtube\.com/watch\?v=[^\)]+)\)', caseSensitive: false);
    var match = regex.firstMatch(content);
    if (match != null && match.groupCount >= 1) {
      final url = match.group(1);
      print('DEBUG: Extracted YouTube URL: $url');
      return url;
    }
    // Fallback: try to find any YouTube URL in the content
    regex = RegExp(r'https://www\.youtube\.com/watch\?v=[a-zA-Z0-9_\-&=]+', caseSensitive: false);
    match = regex.firstMatch(content);
    if (match != null) {
      final url = match.group(0);
      print('DEBUG: Extracted YouTube URL (fallback): $url');
      return url;
    }
    print('DEBUG: No YouTube URL found in content');
    return null;
  }

  Future<void> _launchYouTubeVideo(String url) async {
    print('DEBUG: Attempting to launch URL: $url');
    try {
      final uri = Uri.parse(url);
      print('DEBUG: Parsed URI: $uri');

      final canLaunch = await canLaunchUrl(uri);
      print('DEBUG: Can launch URL: $canLaunch');

      if (canLaunch) {
        final result = await launchUrl(uri, mode: LaunchMode.externalApplication);
        print('DEBUG: Launch result: $result');
      } else {
        print('ERROR: Cannot launch URL: $url');
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Could not open YouTube video')),
          );
        }
      }
    } catch (e) {
      print('ERROR launching URL: $e');
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error opening video: $e')),
        );
      }
    }
  }

  Future<void> _markLessonComplete(DataStore dataStore) async {
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;

    if (currentStudent == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Add a student to track progress')),
      );
      return;
    }

    final lesson = dataStore.getLesson(widget.id);
    if (lesson == null) return;

    // Check if already completed
    if (dataStore.hasCompletedActivity(
      currentStudent.id,
      'Lesson',
      lesson.id,
    )) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Lesson already completed')),
      );
      return;
    }

    // If lesson has an assessment, don't mark complete yet - wait for assessment
    if (lesson.quizId != null) {
      // Navigate to quiz/test/challenge
      context.push('${AppPaths.quiz}?id=${lesson.quizId}&lessonId=${lesson.id}');
      return;
    }

    // No assessment, mark lesson as complete
    final progress = Progress(
      id: dataStore.getNextProgressId(),
      studentId: currentStudent.id,
      activityType: 'Lesson',
      activityId: lesson.id,
      isCompleted: true,
      completedAt: DateTime.now(),
      yearId: lesson.yearId,
      subjectId: lesson.subjectId,
      lessonNumber: lesson.lessonNumber,
    );
    await dataStore.addProgress(progress);

    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Lesson marked as complete!')),
      );
      // Go back to sequential lessons page
      context.go('${AppPaths.sequentialLessons}?subjectId=${lesson.subjectId}');
    }
  }

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final lesson = dataStore.getLesson(widget.id);

    if (lesson == null) {
      return AppScaffold(
        title: 'Lesson Not Found',
        body: const Center(
          child: Text('Lesson not found'),
        ),
      );
    }

    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;
    
    // Check access permission (unless admin mode)
    if (currentStudent != null && !dataStore.adminMode) {
      final canAccess = dataStore.canAccessLesson(currentStudent.id, lesson);
      if (!canAccess) {
        // Redirect back to sequential lessons screen
        WidgetsBinding.instance.addPostFrameCallback((_) {
          if (context.mounted) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Text(
                  'Please complete previous lessons first. '
                  'You cannot skip ahead to this lesson.',
                ),
                backgroundColor: Colors.orange,
                duration: const Duration(seconds: 3),
              ),
            );
            context.go('${AppPaths.sequentialLessons}?subjectId=${lesson.subjectId}');
          }
        });
        
        return AppScaffold(
          title: lesson.title,
          body: const Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.lock, size: 64, color: Colors.grey),
                SizedBox(height: 16),
                Text(
                  'This lesson is locked',
                  style: TextStyle(fontSize: 18, color: Colors.grey),
                ),
                SizedBox(height: 8),
                Text(
                  'Please complete previous lessons first',
                  style: TextStyle(fontSize: 14, color: Colors.grey),
                ),
              ],
            ),
          ),
        );
      }
    }
    
    final isCompleted = currentStudent != null &&
        dataStore.hasCompletedActivity(
          currentStudent.id,
          'Lesson',
          lesson.id,
        );

    // Check if this is a game lesson
    final isClickingGameLesson = lesson.yearId == 'nursery' &&
        lesson.subjectId == 'technology' &&
        lesson.title.toLowerCase().contains('clicking game');
    final isKeyboardGameLesson = lesson.yearId == 'nursery' &&
        lesson.subjectId == 'technology' &&
        lesson.title.toLowerCase().contains('keyboard game');

    // Extract YouTube video URL from lesson content
    final youtubeUrl = _extractYouTubeUrl(lesson.content);
    final youtubeVideoId = _extractYouTubeVideoId(lesson.content);
    
    // Debug output
    print('DEBUG LessonViewScreen:');
    print('  - Lesson: ${lesson.title}');
    print('  - YouTube URL found: ${youtubeUrl != null}');
    print('  - YouTube URL: $youtubeUrl');
    print('  - YouTube Video ID: $youtubeVideoId');
    print('  - Content preview: ${lesson.content.substring(0, lesson.content.length > 200 ? 200 : lesson.content.length)}...');
    
    // Extract local video file from lesson content
    final videoFile = _extractVideoFile(lesson.content);
    if (videoFile != null) {
      _initializeVideoPlayer(videoFile);
    }

    // Store YouTube video ID for fallback button
    if (youtubeVideoId != null && _youtubeVideoId != youtubeVideoId) {
      _youtubeVideoId = youtubeVideoId;
    }

    return AppScaffold(
      title: lesson.title,
      showBackButton: true,
      body: Column(
        children: [
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // Embedded local video player
                  if (_videoController != null && _videoController!.value.isInitialized) ...[
                    Container(
                      margin: const EdgeInsets.only(bottom: 24),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.2),
                            blurRadius: 12,
                            offset: const Offset(0, 4),
                          ),
                        ],
                      ),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(12),
                        child: Column(
                          children: [
                            AspectRatio(
                              aspectRatio: 16 / 9,
                              child: VideoPlayer(_videoController!),
                            ),
                            Container(
                              color: Colors.black87,
                              child: Row(
                                children: [
                                  IconButton(
                                    icon: Icon(
                                      _videoController!.value.isPlaying
                                          ? Icons.pause
                                          : Icons.play_arrow,
                                      color: Colors.white,
                                    ),
                                    onPressed: () {
                                      setState(() {
                                        _videoController!.value.isPlaying
                                            ? _videoController!.pause()
                                            : _videoController!.play();
                                      });
                                    },
                                  ),
                                  Expanded(
                                    child: VideoProgressIndicator(
                                      _videoController!,
                                      allowScrubbing: true,
                                      colors: VideoProgressColors(
                                        playedColor: Colors.red,
                                        bufferedColor: Colors.grey,
                                        backgroundColor: Colors.black26,
                                      ),
                                    ),
                                  ),
                                  IconButton(
                                    icon: const Icon(
                                      Icons.fullscreen,
                                      color: Colors.white,
                                    ),
                                    onPressed: () {
                                      // Fullscreen functionality would go here
                                    },
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ] else if (youtubeUrl != null) ...[
                    // Fallback button if controller failed to initialize
                    Container(
                      margin: const EdgeInsets.only(bottom: 16),
                      decoration: BoxDecoration(
                        color: Colors.red[700],
                        borderRadius: BorderRadius.circular(8),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.2),
                            blurRadius: 8,
                            offset: const Offset(0, 4),
                          ),
                        ],
                      ),
                      child: Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: () => _launchYouTubeVideo(youtubeUrl),
                          borderRadius: BorderRadius.circular(8),
                          child: Padding(
                            padding: const EdgeInsets.all(20.0),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: const [
                                Icon(
                                  Icons.play_circle_filled,
                                  color: Colors.white,
                                  size: 48,
                                ),
                                SizedBox(width: 16),
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      'Watch Video on YouTube',
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 20,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    SizedBox(height: 4),
                                    Text(
                                      'Tap to open in your browser',
                                      style: TextStyle(
                                        color: Colors.white70,
                                        fontSize: 14,
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                  // Lesson content
                  MarkdownBody(
                    data: lesson.content,
                    styleSheet: MarkdownStyleSheet(
                      h1: AppTextStyles.title,
                      h2: AppTextStyles.subtitle,
                      p: AppTextStyles.body,
                    ),
                  ),
                ],
              ),
            ),
          ),
          // Bottom action area
          Container(
            padding: const EdgeInsets.all(16.0),
            decoration: BoxDecoration(
              color: AppColors.cardBackground,
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.1),
                  blurRadius: 4,
                  offset: const Offset(0, -2),
                ),
              ],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                if (isClickingGameLesson && !isCompleted) ...[
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton.icon(
                      onPressed: () {
                        context.push('${AppPaths.clickingGame}?lessonId=${lesson.id}');
                      },
                      icon: const Icon(Icons.games),
                      label: const Text(
                        'Play Clicking Game',
                        style: TextStyle(fontSize: 18),
                      ),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.progress,
                        padding: const EdgeInsets.symmetric(vertical: 16),
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  const Text(
                    'Get Gold or Platinum to complete this lesson!',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.grey,
                      fontStyle: FontStyle.italic,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ] else if (isKeyboardGameLesson && !isCompleted) ...[
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton.icon(
                      onPressed: () {
                        context.push('${AppPaths.keyboardGame}?lessonId=${lesson.id}');
                      },
                      icon: const Icon(Icons.keyboard),
                      label: const Text(
                        'Play Keyboard Game',
                        style: TextStyle(fontSize: 18),
                      ),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.progress,
                        padding: const EdgeInsets.symmetric(vertical: 16),
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  const Text(
                    'Get Gold or Platinum to complete this lesson!',
                    style: TextStyle(
                      fontSize: 14,
                      color: Colors.grey,
                      fontStyle: FontStyle.italic,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ] else if (lesson.quizId != null && !isCompleted) ...[
                  Text(
                    'Complete the ${lesson.assessmentType ?? "quiz"} to finish this lesson',
                    style: AppTextStyles.subtitle,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 12),
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton.icon(
                      onPressed: () => _markLessonComplete(dataStore),
                      icon: const Icon(Icons.quiz),
                      label: Text(
                        'Take ${lesson.assessmentType ?? "Quiz"}',
                        style: const TextStyle(fontSize: 18),
                      ),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.header,
                        padding: const EdgeInsets.symmetric(vertical: 16),
                      ),
                    ),
                  ),
                ] else if (!isCompleted) ...[
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      onPressed: () => _markLessonComplete(dataStore),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.header,
                        padding: const EdgeInsets.symmetric(vertical: 16),
                      ),
                      child: const Text(
                        'Mark as Complete',
                        style: TextStyle(color: Colors.white, fontSize: 18),
                      ),
                    ),
                  ),
                ] else ...[
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(vertical: 16),
                    decoration: BoxDecoration(
                      color: Colors.green,
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: const Text(
                      '✓ Lesson Completed',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

