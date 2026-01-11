import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../models/subject.dart';
import '../models/lesson.dart';
import '../models/year.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';

class SequentialLessonsScreen extends StatelessWidget {
  final String subjectId;

  const SequentialLessonsScreen({
    super.key,
    required this.subjectId,
  });

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final subject = Subject.getById(subjectId);
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;

    if (currentStudent == null) {
      return AppScaffold(
        title: subject?.name ?? 'Lessons',
        showBackButton: true,
        body: const Center(
          child: Text('Please select a student first'),
        ),
      );
    }

    final allLessons = dataStore.getAllLessonsForSubject(subjectId);
    final progressInfo = dataStore.getSubjectProgress(subjectId, currentStudent.id);
    final adminMode = dataStore.adminMode;

    return AppScaffold(
      title: subject?.name ?? 'Lessons',
      showBackButton: true,
      body: allLessons.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.book_outlined, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  Text(
                    'No lessons available for ${subject?.name ?? "this subject"}',
                    style: const TextStyle(fontSize: 16, color: Colors.grey),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            )
            : Column(
              children: [
                // Progress indicator
                Container(
                    margin: const EdgeInsets.all(16),
                    padding: const EdgeInsets.all(16),
                    decoration: BoxDecoration(
                      color: AppColors.cardBackground,
                      borderRadius: BorderRadius.circular(12),
                      boxShadow: [
                        BoxShadow(
                          color: Colors.black.withOpacity(0.1),
                          blurRadius: 4,
                          offset: const Offset(0, 2),
                        ),
                      ],
                    ),
                    child: Column(
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              'Progress',
                              style: AppTextStyles.subtitle,
                            ),
                            Text(
                              '${progressInfo['completedCount']}/${progressInfo['totalLessons']} lessons',
                              style: AppTextStyles.body,
                            ),
                          ],
                        ),
                        const SizedBox(height: 8),
                        LinearProgressIndicator(
                          value: (progressInfo['progressPercentage'] as double) / 100,
                          backgroundColor: Colors.grey[300],
                          valueColor: AlwaysStoppedAnimation<Color>(
                            _getSubjectColor(subjectId),
                          ),
                        ),
                      ],
                    ),
                  ),
                // Lessons grid
                Expanded(
                  child: LayoutBuilder(
                    builder: (context, constraints) {
                      final screenWidth = constraints.maxWidth;
                      final crossAxisCount = ResponsiveUtils.getLessonTileColumns(screenWidth);
                      
                      return GridView.builder(
                        padding: const EdgeInsets.all(16),
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: crossAxisCount,
                          crossAxisSpacing: 12,
                          mainAxisSpacing: 12,
                          childAspectRatio: 0.85,
                        ),
                        itemCount: allLessons.length,
                        itemBuilder: (context, index) {
                          final lesson = allLessons[index];
                          final year = Year.getById(lesson.yearId);
                          final isCompleted = dataStore.hasCompletedLesson(
                            currentStudent.id,
                            lesson.yearId,
                            lesson.subjectId,
                            lesson.lessonNumber,
                          );
                          final canAccess = adminMode || 
                              dataStore.canAccessLesson(currentStudent.id, lesson);
                          
                          return _LessonTile(
                            lesson: lesson,
                            year: year,
                            isCompleted: isCompleted,
                            canAccess: canAccess,
                            adminMode: adminMode,
                            onTap: () {
                              if (canAccess) {
                                context.push('${AppPaths.lessonView}?id=${lesson.id}');
                              } else {
                                final nextLesson = progressInfo['nextLesson'] as Lesson?;
                                final nextYearName = nextLesson != null 
                                    ? Year.getById(nextLesson.yearId)?.name ?? "Nursery"
                                    : "Nursery";
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                    content: Text(
                                      'Please complete previous lessons first. '
                                      'You are currently on: $nextYearName',
                                    ),
                                    backgroundColor: Colors.orange,
                                    duration: const Duration(seconds: 3),
                                  ),
                                );
                              }
                            },
                          );
                        },
                      );
                    },
                  ),
                ),
              ],
            ),
    );
  }

  Color _getSubjectColor(String subjectId) {
    switch (subjectId) {
      case 'maths':
        return AppColors.maths;
      case 'english':
        return AppColors.vikings;
      case 'history':
        return AppColors.fusion360;
      case 'technology':
        return AppColors.arduino;
      default:
        return AppColors.header;
    }
  }
}

class _LessonTile extends StatelessWidget {
  final Lesson lesson;
  final Year? year;
  final bool isCompleted;
  final bool canAccess;
  final bool adminMode;
  final VoidCallback onTap;

  const _LessonTile({
    required this.lesson,
    required this.year,
    required this.isCompleted,
    required this.canAccess,
    required this.adminMode,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: isCompleted ? 4 : 2,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
        side: isCompleted
            ? const BorderSide(color: Colors.green, width: 2)
            : !canAccess
                ? const BorderSide(color: Colors.grey, width: 1)
                : BorderSide.none,
      ),
      child: InkWell(
        onTap: canAccess ? onTap : null,
        borderRadius: BorderRadius.circular(8),
        child: Opacity(
          opacity: canAccess ? 1.0 : 0.5,
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(8),
              color: isCompleted
                  ? Colors.green.withOpacity(0.1)
                  : !canAccess
                      ? Colors.grey.withOpacity(0.1)
                      : AppColors.cardBackground,
            ),
            padding: const EdgeInsets.all(8),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (isCompleted)
                  const Icon(Icons.check_circle, color: Colors.green, size: 20)
                else if (!canAccess)
                  const Icon(Icons.lock, color: Colors.grey, size: 20)
                else if (lesson.emoji.isNotEmpty)
                  Text(
                    lesson.emoji,
                    style: const TextStyle(fontSize: 24),
                  )
                else
                  const Icon(Icons.book, color: AppColors.header, size: 20),
                const SizedBox(height: 4),
                Text(
                  year?.name ?? lesson.yearId,
                  style: TextStyle(
                    fontSize: 10,
                    color: Colors.grey[600],
                    fontWeight: FontWeight.w500,
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 2),
                Text(
                  'Lesson ${lesson.lessonNumber}',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.bold,
                    color: isCompleted 
                        ? Colors.green 
                        : canAccess 
                            ? AppColors.header 
                            : Colors.grey,
                  ),
                  textAlign: TextAlign.center,
                ),
                if (lesson.title.isNotEmpty) ...[
                  const SizedBox(height: 4),
                  Text(
                    lesson.title,
                    style: TextStyle(
                      fontSize: 11,
                      color: isCompleted 
                          ? Colors.green.shade700 
                          : Colors.grey.shade700,
                    ),
                    textAlign: TextAlign.center,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
                if (adminMode && !canAccess)
                  Padding(
                    padding: const EdgeInsets.only(top: 4),
                    child: Text(
                      '🔓 Admin',
                      style: TextStyle(
                        fontSize: 9,
                        color: Colors.orange[700],
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

