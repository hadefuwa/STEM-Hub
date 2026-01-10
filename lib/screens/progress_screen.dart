import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/progress_item.dart';
import '../widgets/app_scaffold.dart';

class ProgressScreen extends StatelessWidget {
  const ProgressScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;

    if (currentStudent == null) {
      return AppScaffold(
        title: 'Progress',
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Icon(Icons.trending_up_outlined, size: 64, color: Colors.grey),
              const SizedBox(height: 16),
              const Text(
                'Add a student to track progress',
                style: TextStyle(fontSize: 16, color: Colors.grey),
              ),
              const SizedBox(height: 24),
              ElevatedButton.icon(
                onPressed: () => context.go(AppPaths.studentSelection),
                icon: const Icon(Icons.person_add),
                label: const Text('Add Student'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.header,
                ),
              ),
            ],
          ),
        ),
      );
    }

    final progressList = dataStore.getProgressForStudent(currentStudent.id);

    return AppScaffold(
      title: '${currentStudent.name}\'s Progress',
      body: progressList.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.trending_up_outlined, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  const Text(
                    'No progress yet. Complete lessons or quizzes to see your progress here!',
                    style: TextStyle(fontSize: 16, color: Colors.grey),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            )
          : ListView.builder(
              itemCount: progressList.length,
              itemBuilder: (context, index) {
                final progress = progressList[index];
                String activityTitle = 'Unknown Activity';
                
                if (progress.activityType == 'Lesson') {
                  final lesson = dataStore.getLesson(progress.activityId);
                  activityTitle = lesson?.title ?? 'Lesson ${progress.activityId}';
                } else if (progress.activityType == 'Quiz') {
                  final quiz = dataStore.getQuiz(progress.activityId);
                  activityTitle = quiz?.title ?? 'Quiz ${progress.activityId}';
                }

                return ProgressItem(
                  progress: progress,
                  activityTitle: activityTitle,
                );
              },
            ),
    );
  }
}

