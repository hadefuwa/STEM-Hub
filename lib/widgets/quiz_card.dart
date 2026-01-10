import 'package:flutter/material.dart';
import '../models/quiz.dart';
import '../utils/constants.dart';

class QuizCard extends StatelessWidget {
  final Quiz quiz;
  final VoidCallback onTap;
  final bool isCompleted;
  final int? score;

  const QuizCard({
    super.key,
    required this.quiz,
    required this.onTap,
    this.isCompleted = false,
    this.score,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: AppColors.vikings,
          child: const Icon(Icons.quiz, color: Colors.white),
        ),
        title: Text(
          quiz.title,
          style: AppTextStyles.cardTitle,
        ),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Age Group: ${quiz.ageGroup}+'),
            Text('${quiz.questions.length} questions'),
            if (isCompleted && score != null)
              Text(
                'Score: $score/${quiz.questions.length}',
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.green,
                ),
              ),
          ],
        ),
        trailing: isCompleted
            ? const Icon(Icons.check_circle, color: Colors.green)
            : const Icon(Icons.arrow_forward_ios, size: 16),
        onTap: onTap,
      ),
    );
  }
}

