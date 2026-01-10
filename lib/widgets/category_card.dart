import 'package:flutter/material.dart';
import '../utils/constants.dart';

class CategoryCard extends StatelessWidget {
  final String emoji;
  final String title;
  final Color color;
  final VoidCallback? onTap;
  final bool isEnabled;

  const CategoryCard({
    super.key,
    required this.emoji,
    required this.title,
    required this.color,
    this.onTap,
    this.isEnabled = true,
  });

  @override
  Widget build(BuildContext context) {
    final displayColor = isEnabled ? color : Colors.grey;
    final textColor = isEnabled ? Colors.white : Colors.grey[300]!;
    
    return Card(
      elevation: isEnabled ? 4 : 1,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(AppConstants.cardBorderRadius),
      ),
      child: InkWell(
        onTap: isEnabled ? onTap : null,
        borderRadius: BorderRadius.circular(AppConstants.cardBorderRadius),
        child: Opacity(
          opacity: isEnabled ? 1.0 : 0.5,
          child: Container(
            padding: const EdgeInsets.all(AppConstants.cardPadding),
            decoration: BoxDecoration(
              color: displayColor,
              borderRadius: BorderRadius.circular(AppConstants.cardBorderRadius),
            ),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  emoji,
                  style: const TextStyle(fontSize: 48),
                ),
                const SizedBox(height: 10),
                Text(
                  title,
                  style: AppTextStyles.cardTitle.copyWith(
                    color: textColor,
                  ),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

