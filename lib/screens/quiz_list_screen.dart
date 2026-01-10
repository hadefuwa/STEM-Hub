import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../utils/paths.dart';
import '../widgets/quiz_card.dart';
import '../widgets/app_scaffold.dart';

class QuizListScreen extends StatelessWidget {
  final String category;
  final int ageGroup;

  const QuizListScreen({
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
    final quizzes = dataStore.getQuizzes(category: category, ageGroup: ageGroup);

    return AppScaffold(
      title: '$category Quizzes',
      body: quizzes.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.quiz_outlined, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  Text(
                    'No quizzes available for $category (Age $ageGroup+)',
                    style: const TextStyle(fontSize: 16, color: Colors.grey),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            )
          : ListView.builder(
              itemCount: quizzes.length,
              itemBuilder: (context, index) {
                final quiz = quizzes[index];
                bool isCompleted = false;
                int? score;
                
                if (currentStudent != null) {
                  isCompleted = dataStore.hasCompletedActivity(
                    currentStudent.id,
                    'Quiz',
                    quiz.id,
                  );
                  if (isCompleted) {
                    try {
                      final progress = dataStore
                          .getProgressForStudent(currentStudent.id)
                          .firstWhere(
                            (p) => p.activityType == 'Quiz' && p.activityId == quiz.id,
                          );
                      score = progress.score;
                    } catch (e) {
                      score = null;
                    }
                  }
                }
                
                return QuizCard(
                  quiz: quiz,
                  isCompleted: isCompleted,
                  score: score,
                  onTap: () => context.go(
                    '${AppPaths.quiz}?id=${quiz.id}',
                  ),
                );
              },
            ),
    );
  }
}

