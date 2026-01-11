import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../models/year.dart';
import '../models/subject.dart';
import '../models/lesson.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';

class LessonsScreen extends StatelessWidget {
  final String yearId;
  final String subjectId;
  final String? categoryId;

  const LessonsScreen({
    super.key,
    required this.yearId,
    required this.subjectId,
    this.categoryId,
  });

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final year = Year.getById(yearId);
    final subject = Subject.getById(subjectId);
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;

    // Get available lesson numbers (1-99, only show if lesson exists)
    final availableLessons = dataStore.getAvailableLessonNumbers(yearId, subjectId, categoryId: categoryId);

    // Build title with optional category
    String title = '${year?.name ?? ""} - ${subject?.name ?? ""}';
    final categoryName = categoryId != null ? _getCategoryName(categoryId!) : null;
    if (categoryName != null) {
      title = '$title - $categoryName';
    }

    return AppScaffold(
      title: title,
      showBackButton: true,
      body: availableLessons.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.book_outlined, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  Text(
                    'No lessons available yet for ${subject?.name ?? "this subject"} in ${year?.name ?? "this year"}',
                    style: const TextStyle(fontSize: 16, color: Colors.grey),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            )
          : LayoutBuilder(
              builder: (context, constraints) {
                final screenWidth = constraints.maxWidth;
                final crossAxisCount = ResponsiveUtils.getLessonTileColumns(screenWidth);
                
                return GridView.builder(
                  padding: const EdgeInsets.all(16),
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: crossAxisCount,
                    crossAxisSpacing: 12,
                    mainAxisSpacing: 12,
                    childAspectRatio: 0.85, // Adjusted to accommodate title text
                  ),
                  itemCount: availableLessons.length,
                  itemBuilder: (context, index) {
                    final lessonNumber = availableLessons[index];
                    final lesson = dataStore.getLessonByNumber(yearId, subjectId, lessonNumber, categoryId: categoryId);
                    final isCompleted = currentStudent != null && lesson != null
                        ? dataStore.hasCompletedLesson(
                            currentStudent.id,
                            yearId,
                            subjectId,
                            lessonNumber,
                          )
                        : false;

                    return _LessonTile(
                      lesson: lesson,
                      lessonNumber: lessonNumber,
                      isCompleted: isCompleted,
                      onTap: () {
                        if (lesson != null) {
                          context.push('${AppPaths.lessonView}?id=${lesson.id}');
                        }
                      },
                    );
                  },
                );
              },
            ),
    );
  }

  String _getCategoryName(String categoryId) {
    switch (categoryId) {
      case 'fusion360':
        return 'Fusion 360';
      case 'python':
        return 'Python';
      default:
        return categoryId;
    }
  }
}

class _LessonTile extends StatelessWidget {
  final Lesson? lesson;
  final int lessonNumber;
  final bool isCompleted;
  final VoidCallback onTap;

  const _LessonTile({
    this.lesson,
    required this.lessonNumber,
    required this.isCompleted,
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
            : BorderSide.none,
      ),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(8),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(8),
            color: isCompleted
                ? Colors.green.withOpacity(0.1)
                : AppColors.cardBackground,
          ),
          padding: const EdgeInsets.all(8),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              if (isCompleted)
                const Icon(Icons.check_circle, color: Colors.green, size: 20)
              else if (lesson?.emoji != null)
                Text(
                  lesson!.emoji,
                  style: const TextStyle(fontSize: 24),
                )
              else
                const Icon(Icons.book, color: AppColors.header, size: 20),
              const SizedBox(height: 4),
              Text(
                'Lesson $lessonNumber',
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.bold,
                  color: isCompleted ? Colors.green : AppColors.header,
                ),
                textAlign: TextAlign.center,
              ),
              if (lesson?.title != null) ...[
                const SizedBox(height: 4),
                Text(
                  lesson!.title,
                  style: TextStyle(
                    fontSize: 11,
                    color: isCompleted ? Colors.green.shade700 : Colors.grey.shade700,
                  ),
                  textAlign: TextAlign.center,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

