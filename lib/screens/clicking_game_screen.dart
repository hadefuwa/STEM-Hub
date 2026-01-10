import 'package:flutter/material.dart';
import 'dart:math';
import 'dart:async';
import '../utils/constants.dart';
import '../widgets/app_scaffold.dart';

class ClickingGameScreen extends StatefulWidget {
  const ClickingGameScreen({super.key});

  @override
  State<ClickingGameScreen> createState() => _ClickingGameScreenState();
}

class _ClickingGameScreenState extends State<ClickingGameScreen> {
  int score = 0;
  int hits = 0;
  int misses = 0;
  int timeRemaining = 30; // 30 seconds game
  bool isPlaying = false;
  bool isGameOver = false;
  Timer? gameTimer;
  Timer? targetTimer;
  final List<Target> targets = [];
  final Random random = Random();
  
  // Progressive difficulty settings
  static const double initialTargetSize = 100.0; // Start large
  static const double minTargetSize = 30.0; // Minimum size
  static const int initialSpawnInterval = 2000; // Start slower (2 seconds)
  static const int minSpawnInterval = 500; // Fastest spawn (0.5 seconds)
  static const int initialTargetLifetime = 4000; // Start with 4 seconds
  static const int minTargetLifetime = 1500; // Minimum 1.5 seconds
  
  double currentTargetSize = initialTargetSize;
  int currentSpawnInterval = initialSpawnInterval;
  int currentTargetLifetime = initialTargetLifetime;

  @override
  void dispose() {
    gameTimer?.cancel();
    targetTimer?.cancel();
    super.dispose();
  }

  void startGame() {
    setState(() {
      isPlaying = true;
      isGameOver = false;
      score = 0;
      hits = 0;
      misses = 0;
      timeRemaining = 30;
      targets.clear();
      // Reset difficulty to initial values
      currentTargetSize = initialTargetSize;
      currentSpawnInterval = initialSpawnInterval;
      currentTargetLifetime = initialTargetLifetime;
    });

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

    // Start recursive target spawning
    scheduleNextTarget();

    // Spawn first target immediately
    spawnTarget();
  }
  
  void updateDifficulty() {
    // Calculate progress (0.0 to 1.0)
    final progress = (30 - timeRemaining) / 30.0;
    
    // Decrease target size (from large to small)
    currentTargetSize = initialTargetSize - 
        (initialTargetSize - minTargetSize) * progress;
    
    // Decrease spawn interval (spawn faster)
    currentSpawnInterval = (initialSpawnInterval - 
        (initialSpawnInterval - minSpawnInterval) * progress).round();
    
    // Decrease target lifetime (targets disappear faster)
    currentTargetLifetime = (initialTargetLifetime - 
        (initialTargetLifetime - minTargetLifetime) * progress).round();
  }
  
  void scheduleNextTarget() {
    if (!isPlaying || isGameOver) return;
    
    targetTimer?.cancel();
    targetTimer = Timer(
      Duration(milliseconds: currentSpawnInterval),
      () {
        if (isPlaying && !isGameOver) {
          spawnTarget();
          scheduleNextTarget(); // Schedule next spawn with updated interval
        }
      },
    );
  }

  void spawnTarget() {
    if (!mounted) return;
    
    final size = MediaQuery.of(context).size;
    final appBarHeight = AppBar().preferredSize.height;
    final statusBarHeight = MediaQuery.of(context).padding.top;
    const statsHeight = 120.0; // Approximate height of stats UI
    final topOffset = appBarHeight + statusBarHeight + statsHeight;
    const bottomOffset = 200.0; // Space for game over/start screen at bottom
    final availableHeight = size.height - topOffset - bottomOffset;
    final availableWidth = size.width - currentTargetSize;
    final padding = currentTargetSize / 2;

    // Ensure we have enough space
    if (availableHeight < currentTargetSize || availableWidth < currentTargetSize) {
      return;
    }

    final x = random.nextDouble() * (availableWidth - padding * 2) + padding;
    final y = random.nextDouble() * (availableHeight - padding * 2) + topOffset + padding;

    final targetId = DateTime.now().millisecondsSinceEpoch;
    setState(() {
      targets.add(Target(
        x: x,
        y: y,
        id: targetId,
        size: currentTargetSize,
      ));
    });

    // Remove target after current lifetime if not clicked
    Timer(Duration(milliseconds: currentTargetLifetime), () {
      if (mounted) {
        setState(() {
          final targetExists = targets.any((t) => t.id == targetId);
          if (targetExists) {
            targets.removeWhere((t) => t.id == targetId);
            misses++;
          }
        });
      }
    });
  }

  void onTargetClick(Target target) {
    if (!isPlaying || isGameOver) return;

    setState(() {
      targets.remove(target);
      hits++;
      score += 10;
    });
  }

  void onMissClick() {
    if (!isPlaying || isGameOver) return;

    setState(() {
      misses++;
    });
  }

  void endGame() {
    setState(() {
      isPlaying = false;
      isGameOver = true;
      targets.clear();
    });
    gameTimer?.cancel();
    targetTimer?.cancel();
  }

  double get accuracy {
    final totalClicks = hits + misses;
    if (totalClicks == 0) return 0.0;
    return (hits / totalClicks) * 100;
  }
  
  // Grading system
  GameGrade getGrade() {
    if (score >= 300) return GameGrade.platinum;
    if (score >= 200) return GameGrade.gold;
    if (score >= 100) return GameGrade.silver;
    return GameGrade.bronze;
  }
  
  Color getGradeColor(GameGrade grade) {
    switch (grade) {
      case GameGrade.platinum:
        return const Color(0xFFE5E4E2); // Platinum color
      case GameGrade.gold:
        return const Color(0xFFFFD700); // Gold color
      case GameGrade.silver:
        return const Color(0xFFC0C0C0); // Silver color
      case GameGrade.bronze:
        return const Color(0xFFCD7F32); // Bronze color
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

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Accuracy Clicking Game',
      showFooter: false, // Game needs full screen
      body: Stack(
        children: [
          // Game area - clickable background
          GestureDetector(
            onTapDown: (details) {
              if (!isPlaying || isGameOver) return;
              onMissClick();
            },
            child: Container(
              width: double.infinity,
              height: double.infinity,
              color: Colors.transparent,
            ),
          ),

          // Targets as clickable widgets
          ...targets.map((target) => Positioned(
                left: target.x - target.size / 2,
                top: target.y - target.size / 2,
                child: GestureDetector(
                  onTap: () => onTargetClick(target),
                  child: Container(
                    width: target.size,
                    height: target.size,
                    decoration: BoxDecoration(
                      color: Colors.red,
                      shape: BoxShape.circle,
                      border: Border.all(
                        color: Colors.white,
                        width: 3,
                      ),
                    ),
                  ),
                ),
              )),

          // UI Overlay
          Column(
            children: [
              // Stats bar - ignore pointers so clicks pass through
              IgnorePointer(
                child: Container(
                  padding: const EdgeInsets.all(16),
                  color: AppColors.cardBackground.withOpacity(0.9),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      _buildStatCard('Score', score.toString(), Icons.star),
                      _buildStatCard('Hits', hits.toString(), Icons.check_circle),
                      _buildStatCard('Misses', misses.toString(), Icons.cancel),
                      _buildStatCard(
                        'Accuracy',
                        '${accuracy.toStringAsFixed(1)}%',
                        Icons.track_changes,
                      ),
                    ],
                  ),
                ),
              ),

              // Timer - ignore pointers so clicks pass through
              IgnorePointer(
                child: Container(
                  padding: const EdgeInsets.symmetric(vertical: 8),
                  color: AppColors.cardBackground.withOpacity(0.9),
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

              // Game over or start button - these need pointer events
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
                        'Hits: $hits | Misses: $misses',
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
                        'Click the targets as fast as you can!',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.w600,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      const SizedBox(height: 16),
                      const Text(
                        'You have 30 seconds to click as many targets as possible.',
                        style: TextStyle(
                          fontSize: 16,
                          color: Colors.grey,
                        ),
                        textAlign: TextAlign.center,
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
}

class Target {
  final double x;
  final double y;
  final int id;
  final double size;

  Target({
    required this.x,
    required this.y,
    required this.id,
    required this.size,
  });
}

enum GameGrade {
  bronze,
  silver,
  gold,
  platinum,
}


