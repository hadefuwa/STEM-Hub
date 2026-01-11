import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'dart:math';
import 'dart:async';
import '../utils/constants.dart';
import '../widgets/app_scaffold.dart';
import '../data/data_store.dart';
import '../models/progress.dart';

class KeyboardGameScreen extends StatefulWidget {
  final int? lessonId;
  
  const KeyboardGameScreen({super.key, this.lessonId});

  @override
  State<KeyboardGameScreen> createState() => _KeyboardGameScreenState();
}

class _KeyboardGameScreenState extends State<KeyboardGameScreen> {
  int score = 0;
  int correctKeys = 0;
  int wrongKeys = 0;
  int timeRemaining = 45; // 45 seconds game
  bool isPlaying = false;
  bool isGameOver = false;
  Timer? gameTimer;
  Timer? arrowTimer;
  Direction? currentDirection;
  final Random random = Random();
  final FocusNode _focusNode = FocusNode();
  
  // Progressive difficulty settings
  static const int initialArrowInterval = 3000; // Start slower (3 seconds)
  static const int minArrowInterval = 1500; // Fastest spawn (1.5 seconds)
  
  int currentArrowInterval = initialArrowInterval;

  @override
  void dispose() {
    gameTimer?.cancel();
    arrowTimer?.cancel();
    _focusNode.dispose();
    super.dispose();
  }

  void startGame() {
    setState(() {
      isPlaying = true;
      isGameOver = false;
      score = 0;
      correctKeys = 0;
      wrongKeys = 0;
      timeRemaining = 45;
      currentDirection = null;
      currentArrowInterval = initialArrowInterval;
    });

    // Focus on the game area to capture keyboard input
    _focusNode.requestFocus();

    // Game countdown timer
    gameTimer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (timeRemaining > 0) {
        setState(() {
          timeRemaining--;
          // Progressively increase difficulty
          updateDifficulty();
        });
      } else {
        endGame();
      }
    });

    // Start showing arrows
    scheduleNextArrow();
    showNextArrow();
  }
  
  void updateDifficulty() {
    // Calculate progress (0.0 to 1.0)
    final progress = (45 - timeRemaining) / 45.0;
    
    // Decrease arrow interval (show arrows faster)
    currentArrowInterval = (initialArrowInterval - 
        (initialArrowInterval - minArrowInterval) * progress).round();
  }
  
  void scheduleNextArrow() {
    if (!isPlaying || isGameOver) return;
    
    arrowTimer?.cancel();
    arrowTimer = Timer(
      Duration(milliseconds: currentArrowInterval),
      () {
        if (isPlaying && !isGameOver) {
          showNextArrow();
          scheduleNextArrow(); // Schedule next arrow with updated interval
        }
      },
    );
  }

  void showNextArrow() {
    if (!mounted || !isPlaying || isGameOver) return;
    
    // Randomly select a direction
    final directions = Direction.values;
    setState(() {
      currentDirection = directions[random.nextInt(directions.length)];
    });
  }

  void handleKeyPress(LogicalKeyboardKey key) {
    if (!isPlaying || isGameOver || currentDirection == null) return;

    bool isCorrect = false;
    
    // Check if the pressed key matches the current direction
    switch (currentDirection!) {
      case Direction.up:
        isCorrect = key == LogicalKeyboardKey.arrowUp || 
                    key == LogicalKeyboardKey.keyW;
        break;
      case Direction.down:
        isCorrect = key == LogicalKeyboardKey.arrowDown || 
                    key == LogicalKeyboardKey.keyS;
        break;
      case Direction.left:
        isCorrect = key == LogicalKeyboardKey.arrowLeft || 
                    key == LogicalKeyboardKey.keyA;
        break;
      case Direction.right:
        isCorrect = key == LogicalKeyboardKey.arrowRight || 
                    key == LogicalKeyboardKey.keyD;
        break;
    }

    if (isCorrect) {
      setState(() {
        correctKeys++;
        score += 10;
        currentDirection = null; // Clear the arrow
      });
      // Show next arrow after a short delay
      Future.delayed(const Duration(milliseconds: 300), () {
        if (isPlaying && !isGameOver) {
          showNextArrow();
        }
      });
    } else {
      setState(() {
        wrongKeys++;
      });
    }
  }

  void endGame() {
    setState(() {
      isPlaying = false;
      isGameOver = true;
      currentDirection = null;
    });
    gameTimer?.cancel();
    arrowTimer?.cancel();
    
    // Automatically mark lesson as complete if student gets gold or better
    final grade = getGrade();
    if (grade == GameGrade.gold || grade == GameGrade.platinum) {
      _markLessonComplete();
    }
  }
  
  Future<void> _markLessonComplete() async {
    if (widget.lessonId == null) return;
    
    final dataStore = Provider.of<DataStore>(context, listen: false);
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;
    
    if (currentStudent == null) return;
    
    final lesson = dataStore.getLesson(widget.lessonId!);
    if (lesson == null) return;
    
    // Check if already completed
    if (dataStore.hasCompletedActivity(
      currentStudent.id,
      'Lesson',
      lesson.id,
    )) {
      return;
    }
    
    // Mark lesson as complete
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
    
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('🎉 Congratulations! You got ${getGradeName(getGrade())}! Lesson marked as complete!'),
          backgroundColor: Colors.green,
          duration: const Duration(seconds: 3),
        ),
      );
    }
  }

  double get accuracy {
    final totalKeys = correctKeys + wrongKeys;
    if (totalKeys == 0) return 0.0;
    return (correctKeys / totalKeys) * 100;
  }
  
  // Grading system
  GameGrade getGrade() {
    if (score >= 200) return GameGrade.platinum;
    if (score >= 150) return GameGrade.gold;
    if (score >= 100) return GameGrade.silver;
    return GameGrade.bronze;
  }
  
  Color getGradeColor(GameGrade grade) {
    switch (grade) {
      case GameGrade.platinum:
        return const Color(0xFFE5E4E2);
      case GameGrade.gold:
        return const Color(0xFFFFD700);
      case GameGrade.silver:
        return const Color(0xFFC0C0C0);
      case GameGrade.bronze:
        return const Color(0xFFCD7F32);
    }
  }
  
  String getGradeName(GameGrade grade) {
    switch (grade) {
      case GameGrade.platinum:
        return 'Platinum';
      case GameGrade.gold:
        return 'Gold';
      case GameGrade.silver:
        return 'Silver';
      case GameGrade.bronze:
        return 'Bronze';
    }
  }

  String getDirectionEmoji(Direction direction) {
    switch (direction) {
      case Direction.up:
        return '⬆️';
      case Direction.down:
        return '⬇️';
      case Direction.left:
        return '⬅️';
      case Direction.right:
        return '➡️';
    }
  }

  String getDirectionKeys(Direction direction) {
    switch (direction) {
      case Direction.up:
        return '↑ or W';
      case Direction.down:
        return '↓ or S';
      case Direction.left:
        return '← or A';
      case Direction.right:
        return '→ or D';
    }
  }

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Keyboard Game',
      showBackButton: true,
      showFooter: false,
      body: Focus(
        focusNode: _focusNode,
        autofocus: true,
        onKeyEvent: (node, event) {
          if (event is KeyDownEvent && isPlaying && !isGameOver) {
            handleKeyPress(event.logicalKey);
            return KeyEventResult.handled;
          }
          return KeyEventResult.ignored;
        },
        child: GestureDetector(
          onTap: () => _focusNode.requestFocus(),
          child: Stack(
          children: [
            // Game area
            Container(
              width: double.infinity,
              height: double.infinity,
              color: AppColors.background,
            ),

            // UI Overlay
            Column(
              children: [
                // Stats bar
                IgnorePointer(
                  child: Container(
                    padding: const EdgeInsets.all(16),
                    color: AppColors.cardBackground.withOpacity(0.95),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        _buildStatCard('Score', score.toString(), Icons.star),
                        _buildStatCard('Correct', correctKeys.toString(), Icons.check_circle),
                        _buildStatCard('Wrong', wrongKeys.toString(), Icons.cancel),
                        _buildStatCard(
                          'Accuracy',
                          '${accuracy.toStringAsFixed(1)}%',
                          Icons.track_changes,
                        ),
                      ],
                    ),
                  ),
                ),

                // Timer
                IgnorePointer(
                  child: Container(
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    color: AppColors.cardBackground.withOpacity(0.95),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.timer,
                          color: timeRemaining <= 5 ? Colors.red : AppColors.header,
                        ),
                        const SizedBox(width: 8),
                        Text(
                          'Time: $timeRemaining',
                          style: TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: timeRemaining <= 5 ? Colors.red : AppColors.header,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),

                const Spacer(),

                // Current arrow display
                if (isPlaying && !isGameOver && currentDirection != null)
                  Container(
                    padding: const EdgeInsets.all(40),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          getDirectionEmoji(currentDirection!),
                          style: const TextStyle(fontSize: 120),
                        ),
                        const SizedBox(height: 20),
                        Container(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 24,
                            vertical: 12,
                          ),
                          decoration: BoxDecoration(
                            color: AppColors.header.withOpacity(0.1),
                            borderRadius: BorderRadius.circular(12),
                            border: Border.all(
                              color: AppColors.header,
                              width: 2,
                            ),
                          ),
                          child: Text(
                            'Press: ${getDirectionKeys(currentDirection!)}',
                            style: TextStyle(
                              fontSize: 24,
                              fontWeight: FontWeight.bold,
                              color: AppColors.header,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),

                const Spacer(),

                // Game over or start button
                if (isGameOver)
                  Container(
                    padding: const EdgeInsets.all(24),
                    color: AppColors.cardBackground.withOpacity(0.95),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Text(
                          'Game Over!',
                          style: TextStyle(
                            fontSize: 32,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 16),
                        // Grade display
                        Builder(
                          builder: (context) {
                            final grade = getGrade();
                            final gradeColor = getGradeColor(grade);
                            final gradeName = getGradeName(grade);
                            return Container(
                              padding: const EdgeInsets.symmetric(
                                horizontal: 24,
                                vertical: 12,
                              ),
                              decoration: BoxDecoration(
                                color: gradeColor.withOpacity(0.2),
                                border: Border.all(
                                  color: gradeColor,
                                  width: 3,
                                ),
                                borderRadius: BorderRadius.circular(12),
                              ),
                              child: Row(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Icon(
                                    Icons.emoji_events,
                                    color: gradeColor,
                                    size: 32,
                                  ),
                                  const SizedBox(width: 12),
                                  Text(
                                    gradeName,
                                    style: TextStyle(
                                      fontSize: 28,
                                      fontWeight: FontWeight.bold,
                                      color: gradeColor,
                                    ),
                                  ),
                                ],
                              ),
                            );
                          },
                        ),
                        const SizedBox(height: 16),
                        Text(
                          'Final Score: $score',
                          style: const TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Accuracy: ${accuracy.toStringAsFixed(1)}%',
                          style: const TextStyle(
                            fontSize: 20,
                            color: Colors.grey,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Correct: $correctKeys | Wrong: $wrongKeys',
                          style: const TextStyle(
                            fontSize: 16,
                            color: Colors.grey,
                          ),
                        ),
                        const SizedBox(height: 24),
                        ElevatedButton(
                          onPressed: startGame,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppColors.header,
                            padding: const EdgeInsets.symmetric(
                              horizontal: 32,
                              vertical: 16,
                            ),
                          ),
                          child: const Text(
                            'Play Again',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ],
                    ),
                  )
                else if (!isPlaying)
                  Container(
                    padding: const EdgeInsets.all(24),
                    color: AppColors.cardBackground.withOpacity(0.95),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        const Text(
                          'Keyboard Game 🎮',
                          style: TextStyle(
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const SizedBox(height: 16),
                        const Text(
                          'Use WASD or Arrow Keys!',
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w600,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 16),
                        const Text(
                          'Press the key that matches the arrow shown on screen.',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 8),
                        const Text(
                          'You have 45 seconds to score as many points as possible!',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey,
                          ),
                          textAlign: TextAlign.center,
                        ),
                        const SizedBox(height: 24),
                        Container(
                          padding: const EdgeInsets.all(16),
                          decoration: BoxDecoration(
                            color: AppColors.header.withOpacity(0.1),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Column(
                            children: [
                              _buildKeyHint('⬆️', '↑ or W'),
                              const SizedBox(height: 8),
                              _buildKeyHint('⬇️', '↓ or S'),
                              const SizedBox(height: 8),
                              _buildKeyHint('⬅️', '← or A'),
                              const SizedBox(height: 8),
                              _buildKeyHint('➡️', '→ or D'),
                            ],
                          ),
                        ),
                        const SizedBox(height: 24),
                        ElevatedButton(
                          onPressed: startGame,
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppColors.header,
                            padding: const EdgeInsets.symmetric(
                              horizontal: 32,
                              vertical: 16,
                            ),
                          ),
                          child: const Text(
                            'Start Game',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
              ],
            ),
          ],
        ),
        ),
      ),
    );
  }

  Widget _buildStatCard(String label, String value, IconData icon) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, color: AppColors.header, size: 24),
        const SizedBox(height: 4),
        Text(
          value,
          style: const TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        Text(
          label,
          style: const TextStyle(
            fontSize: 12,
            color: Colors.grey,
          ),
        ),
      ],
    );
  }

  Widget _buildKeyHint(String emoji, String keys) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(emoji, style: const TextStyle(fontSize: 24)),
        const SizedBox(width: 12),
        Text(
          keys,
          style: const TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }
}

enum Direction {
  up,
  down,
  left,
  right,
}

enum GameGrade {
  bronze,
  silver,
  gold,
  platinum,
}

