import 'package:flutter/material.dart';
import '../models/progress.dart';
import '../utils/constants.dart';
import 'package:intl/intl.dart';

class ProgressItem extends StatelessWidget {
  final Progress progress;
  final String activityTitle;

  const ProgressItem({
    super.key,
    required this.progress,
    required this.activityTitle,
  });

  @override
  Widget build(BuildContext context) {
    final dateFormat = DateFormat('MMM dd, yyyy - hh:mm a');
    final icon = progress.activityType == 'Lesson'
        ? Icons.book
        : Icons.quiz;
    final color = progress.activityType == 'Lesson'
        ? AppColors.arduino
        : AppColors.vikings;

    return Card(
      elevation: 2,
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: color,
          child: Icon(icon, color: Colors.white),
        ),
        title: Text(
          activityTitle,
          style: AppTextStyles.cardTitle,
        ),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(progress.activityType),
            if (progress.completedAt != null)
              Text(
                dateFormat.format(progress.completedAt!),
                style: const TextStyle(fontSize: 12),
              ),
          ],
        ),
        trailing: progress.score != null
            ? Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                decoration: BoxDecoration(
                  color: AppColors.progress,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Text(
                  '${progress.score}%',
                  style: const TextStyle(
                    fontWeight: FontWeight.bold,
                  ),
                ),
              )
            : const Icon(Icons.check_circle, color: Colors.green),
      ),
    );
  }
}

