import 'package:flutter/material.dart';
import '../models/lesson.dart';
import '../utils/constants.dart';

class LessonCard extends StatelessWidget {
  final Lesson lesson;
  final VoidCallback onTap;
  final bool isCompleted;

  const LessonCard({
    super.key,
    required this.lesson,
    required this.onTap,
    this.isCompleted = false,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: _getSubjectColor(lesson.subjectId),
          child: Text(
            lesson.emoji,
            style: const TextStyle(
              fontSize: 24,
            ),
          ),
        ),
        title: Text(
          lesson.title,
          style: AppTextStyles.cardTitle,
        ),
        subtitle: Text(
          'Lesson ${lesson.lessonNumber}',
          style: AppTextStyles.body,
        ),
        trailing: isCompleted
            ? const Icon(Icons.check_circle, color: Colors.green)
            : const Icon(Icons.arrow_forward_ios, size: 16),
        onTap: onTap,
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

