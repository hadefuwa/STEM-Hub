import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../data/data_store.dart';
import '../models/year.dart';
import '../models/subject.dart';
import '../utils/constants.dart';
import '../widgets/app_scaffold.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Listen to changes in DataStore to refresh when data updates
    final dataStore = Provider.of<DataStore>(context, listen: true);
    
    final stats = dataStore.getAppWideStatistics();
    final allProgress = dataStore.getAllProgress();
    final completedProgress = allProgress.where((p) => p.isCompleted).toList();

    return AppScaffold(
      title: 'Results',
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Overall Statistics Card
            Card(
              elevation: 4,
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Overall Statistics',
                      style: AppTextStyles.title,
                    ),
                    const SizedBox(height: 16),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceAround,
                      children: [
                        _StatItem(
                          label: 'Completed',
                          value: '${stats['totalCompleted']}',
                          icon: Icons.check_circle,
                          color: Colors.green,
                        ),
                        _StatItem(
                          label: 'Quizzes',
                          value: '${stats['totalQuizzes']}',
                          icon: Icons.quiz,
                          color: AppColors.header,
                        ),
                        _StatItem(
                          label: 'Avg Score',
                          value: '${(stats['averageScore'] as double).toStringAsFixed(0)}%',
                          icon: Icons.trending_up,
                          color: AppColors.progress,
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ),

            const SizedBox(height: 16),

            // Results by Year
            if ((stats['byYear'] as Map<String, List>).isNotEmpty) ...[
              Text(
                'Results by Year',
                style: AppTextStyles.subtitle,
              ),
              const SizedBox(height: 8),
              ...Year.allYears.map((year) {
                final yearProgress = (stats['byYear'] as Map<String, List>)[year.id] ?? [];
                if (yearProgress.isEmpty) return const SizedBox.shrink();

                final yearQuizzes = yearProgress.where((p) =>
                    p.activityType == 'Quiz' || p.activityType == 'Test' || p.activityType == 'Challenge').toList();
                final avgScore = yearQuizzes.isNotEmpty
                    ? yearQuizzes.map((p) => p.score ?? 0).reduce((a, b) => a + b) / yearQuizzes.length
                    : 0.0;

                return Card(
                  margin: const EdgeInsets.only(bottom: 8),
                  child: ListTile(
                    leading: CircleAvatar(
                      backgroundColor: AppColors.header,
                      child: Text(
                        year.name.substring(0, 1),
                        style: const TextStyle(color: Colors.white),
                      ),
                    ),
                    title: Text(year.name),
                    subtitle: Text(
                      '${yearProgress.length} completed • ${yearQuizzes.length} assessments',
                    ),
                    trailing: yearQuizzes.isNotEmpty
                        ? Chip(
                            label: Text('${avgScore.toStringAsFixed(0)}%'),
                            backgroundColor: AppColors.progress.withOpacity(0.3),
                          )
                        : null,
                  ),
                );
              }).toList(),
              const SizedBox(height: 16),
            ],

            // Results by Subject
            if ((stats['bySubject'] as Map<String, List>).isNotEmpty) ...[
              Text(
                'Results by Subject',
                style: AppTextStyles.subtitle,
              ),
              const SizedBox(height: 8),
              ...Subject.allSubjects.map((subject) {
                final subjectProgress = (stats['bySubject'] as Map<String, List>)[subject.id] ?? [];
                if (subjectProgress.isEmpty) return const SizedBox.shrink();

                final subjectQuizzes = subjectProgress.where((p) =>
                    p.activityType == 'Quiz' || p.activityType == 'Test' || p.activityType == 'Challenge').toList();
                final avgScore = subjectQuizzes.isNotEmpty
                    ? subjectQuizzes.map((p) => p.score ?? 0).reduce((a, b) => a + b) / subjectQuizzes.length
                    : 0.0;

                return Card(
                  margin: const EdgeInsets.only(bottom: 8),
                  child: ListTile(
                    leading: Text(
                      subject.emoji,
                      style: const TextStyle(fontSize: 32),
                    ),
                    title: Text(subject.name),
                    subtitle: Text(
                      '${subjectProgress.length} completed • ${subjectQuizzes.length} assessments',
                    ),
                    trailing: subjectQuizzes.isNotEmpty
                        ? Chip(
                            label: Text('${avgScore.toStringAsFixed(0)}%'),
                            backgroundColor: AppColors.progress.withOpacity(0.3),
                          )
                        : null,
                  ),
                );
              }).toList(),
              const SizedBox(height: 16),
            ],

            // Recent Activity
            Text(
              'Recent Activity',
              style: AppTextStyles.subtitle,
            ),
            const SizedBox(height: 8),
            if (completedProgress.isEmpty)
              Card(
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Center(
                    child: Column(
                      children: [
                        const Icon(Icons.history, size: 48, color: Colors.grey),
                        const SizedBox(height: 16),
                        Text(
                          'No activity yet',
                          style: TextStyle(
                            fontSize: 16,
                            color: Colors.grey[600],
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'Complete lessons and quizzes to see your activity here',
                          style: TextStyle(
                            fontSize: 12,
                            color: Colors.grey[500],
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                  ),
                ),
              )
            else
              ...completedProgress.take(20).map((progress) {
                String activityName = 'Activity ${progress.activityId}';
                String typeIcon = '📚';
                String? subtitleText;
                
                // Try to get the actual lesson or quiz name
                if (progress.activityType == 'Lesson') {
                  typeIcon = '📖';
                  final lesson = dataStore.getLesson(progress.activityId);
                  if (lesson != null) {
                    activityName = lesson.title;
                    final year = Year.getById(lesson.yearId);
                    final subject = Subject.getById(lesson.subjectId);
                    subtitleText = '${year?.name ?? lesson.yearId} • ${subject?.name ?? lesson.subjectId}';
                    if (progress.completedAt != null) {
                      subtitleText += ' • ${_formatDate(progress.completedAt!)}';
                    }
                  } else if (progress.lessonNumber != null) {
                    activityName = 'Lesson ${progress.lessonNumber}';
                    if (progress.yearId != null && progress.subjectId != null) {
                      final year = Year.getById(progress.yearId!);
                      final subject = Subject.getById(progress.subjectId!);
                      subtitleText = '${year?.name ?? progress.yearId} • ${subject?.name ?? progress.subjectId}';
                      if (progress.completedAt != null) {
                        subtitleText += ' • ${_formatDate(progress.completedAt!)}';
                      }
                    } else if (progress.completedAt != null) {
                      subtitleText = 'Completed ${_formatDate(progress.completedAt!)}';
                    }
                  } else if (progress.completedAt != null) {
                    subtitleText = 'Completed ${_formatDate(progress.completedAt!)}';
                  }
                } else if (progress.activityType == 'Quiz' || progress.activityType == 'Test' || progress.activityType == 'Challenge') {
                  typeIcon = '📝';
                  final quiz = dataStore.getQuiz(progress.activityId);
                  if (quiz != null) {
                    activityName = quiz.title;
                    subtitleText = progress.activityType;
                    if (progress.completedAt != null) {
                      subtitleText += ' • ${_formatDate(progress.completedAt!)}';
                    }
                  } else {
                    activityName = '${progress.activityType} ${progress.activityId}';
                    if (progress.completedAt != null) {
                      subtitleText = 'Completed ${_formatDate(progress.completedAt!)}';
                    }
                  }
                } else if (progress.completedAt != null) {
                  subtitleText = 'Completed ${_formatDate(progress.completedAt!)}';
                }

                return Card(
                  margin: const EdgeInsets.only(bottom: 8),
                  child: ListTile(
                    leading: Text(typeIcon, style: const TextStyle(fontSize: 24)),
                    title: Text(
                      activityName,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                    ),
                    subtitle: subtitleText != null
                        ? Text(
                            subtitleText,
                            style: const TextStyle(fontSize: 12),
                          )
                        : null,
                    trailing: progress.score != null
                        ? Chip(
                            label: Text('${progress.score}%'),
                            backgroundColor: _getScoreColor(progress.score!).withOpacity(0.3),
                          )
                        : const Icon(Icons.check, color: Colors.green),
                  ),
                );
              }).toList(),
          ],
        ),
      ),
    );
  }

  String _formatDate(DateTime date) {
    final now = DateTime.now();
    final difference = now.difference(date);

    if (difference.inDays == 0) {
      return 'Today';
    } else if (difference.inDays == 1) {
      return 'Yesterday';
    } else if (difference.inDays < 7) {
      return '${difference.inDays} days ago';
    } else {
      return '${date.day}/${date.month}/${date.year}';
    }
  }

  Color _getScoreColor(int score) {
    if (score >= 80) return Colors.green;
    if (score >= 60) return Colors.orange;
    return Colors.red;
  }
}

class _StatItem extends StatelessWidget {
  final String label;
  final String value;
  final IconData icon;
  final Color color;

  const _StatItem({
    required this.label,
    required this.value,
    required this.icon,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Icon(icon, color: color, size: 32),
        const SizedBox(height: 8),
        Text(
          value,
          style: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: color,
          ),
        ),
        Text(
          label,
          style: const TextStyle(fontSize: 12, color: Colors.grey),
        ),
      ],
    );
  }
}

