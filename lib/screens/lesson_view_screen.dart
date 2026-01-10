import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import '../data/data_store.dart';
import '../models/progress.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';

class LessonViewScreen extends StatelessWidget {
  final int id;

  const LessonViewScreen({
    super.key,
    required this.id,
  });

  Future<void> _markLessonComplete(BuildContext context, DataStore dataStore) async {
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;

    if (currentStudent == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Add a student to track progress')),
      );
      return;
    }

    final lesson = dataStore.getLesson(id);
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
      context.go('${AppPaths.quiz}?id=${lesson.quizId}&lessonId=${lesson.id}');
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
      // Go back to lessons page
      context.go('${AppPaths.lessons}?yearId=${lesson.yearId}&subjectId=${lesson.subjectId}');
    }
  }

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final lesson = dataStore.getLesson(id);

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
    final isCompleted = currentStudent != null &&
        dataStore.hasCompletedActivity(
          currentStudent.id,
          'Lesson',
          lesson.id,
        );

    // Check if this is the clicking game lesson
    final isClickingGameLesson = lesson.yearId == 'nursery' &&
        lesson.subjectId == 'technology' &&
        lesson.title.toLowerCase().contains('clicking game');

    return AppScaffold(
      title: lesson.title,
      body: Column(
        children: [
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(16),
              child: MarkdownBody(
                data: lesson.content,
                styleSheet: MarkdownStyleSheet(
                  h1: AppTextStyles.title,
                  h2: AppTextStyles.subtitle,
                  p: AppTextStyles.body,
                ),
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
                        context.go(AppPaths.clickingGame);
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
                  SizedBox(
                    width: double.infinity,
                    child: OutlinedButton(
                      onPressed: () => _markLessonComplete(context, dataStore),
                      style: OutlinedButton.styleFrom(
                        padding: const EdgeInsets.symmetric(vertical: 16),
                      ),
                      child: const Text(
                        'Mark as Complete',
                        style: TextStyle(fontSize: 18),
                      ),
                    ),
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
                      onPressed: () => _markLessonComplete(context, dataStore),
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
                      onPressed: () => _markLessonComplete(context, dataStore),
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

