import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../models/year.dart';
import '../models/subject.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';

class LessonsScreen extends StatelessWidget {
  final String yearId;
  final String subjectId;

  const LessonsScreen({
    super.key,
    required this.yearId,
    required this.subjectId,
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
    final availableLessons = dataStore.getAvailableLessonNumbers(yearId, subjectId);

    return AppScaffold(
      title: '${year?.name ?? ""} - ${subject?.name ?? ""}',
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
                    childAspectRatio: 1.0,
                  ),
                  itemCount: availableLessons.length,
                  itemBuilder: (context, index) {
                    final lessonNumber = availableLessons[index];
                    final lesson = dataStore.getLessonByNumber(yearId, subjectId, lessonNumber);
                    final isCompleted = currentStudent != null && lesson != null
                        ? dataStore.hasCompletedLesson(
                            currentStudent.id,
                            yearId,
                            subjectId,
                            lessonNumber,
                          )
                        : false;

                    return _LessonTile(
                      lessonNumber: lessonNumber,
                      isCompleted: isCompleted,
                      onTap: () {
                        if (lesson != null) {
                          context.go('${AppPaths.lessonView}?id=${lesson.id}');
                        }
                      },
                    );
                  },
                );
              },
            ),
    );
  }
}

class _LessonTile extends StatelessWidget {
  final int lessonNumber;
  final bool isCompleted;
  final VoidCallback onTap;

  const _LessonTile({
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
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                if (isCompleted)
                  const Icon(Icons.check_circle, color: Colors.green, size: 20)
                else
                  const Icon(Icons.book, color: AppColors.header, size: 20),
                const SizedBox(height: 4),
                Text(
                  '$lessonNumber',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: isCompleted ? Colors.green : AppColors.header,
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

