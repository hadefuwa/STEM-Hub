import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../utils/paths.dart';
import '../widgets/lesson_card.dart';
import '../widgets/app_scaffold.dart';

class LessonListScreen extends StatelessWidget {
  final String category;
  final int ageGroup;

  const LessonListScreen({
    super.key,
    required this.category,
    required this.ageGroup,
  });

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;
    final lessons = dataStore.getLessons(category: category, ageGroup: ageGroup);

    return AppScaffold(
      title: '$category Lessons',
      body: lessons.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.book_outlined, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  Text(
                    'No lessons available for $category (Age $ageGroup+)',
                    style: const TextStyle(fontSize: 16, color: Colors.grey),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            )
          : ListView.builder(
              itemCount: lessons.length,
              itemBuilder: (context, index) {
                final lesson = lessons[index];
                final isCompleted = currentStudent != null &&
                    dataStore.hasCompletedActivity(
                      currentStudent.id,
                      'Lesson',
                      lesson.id,
                    );
                return LessonCard(
                  lesson: lesson,
                  isCompleted: isCompleted,
                  onTap: () => context.go(
                    '${AppPaths.lessonView}?id=${lesson.id}',
                  ),
                );
              },
            ),
    );
  }
}

