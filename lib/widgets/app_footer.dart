import 'package:flutter/material.dart';
import '../utils/constants.dart';

class AppFooter extends StatelessWidget {
  const AppFooter({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 16),
      decoration: BoxDecoration(
        color: AppColors.header,
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 4,
            offset: const Offset(0, -2),
          ),
        ],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Icon(
            Icons.school,
            color: Colors.white,
            size: 20,
          ),
          const SizedBox(width: 8),
          Text(
            AppConstants.appName,
            style: AppTextStyles.subtitle.copyWith(
              color: Colors.white,
              fontSize: 14,
            ),
          ),
          const SizedBox(width: 16),
          Text(
            '© ${DateTime.now().year}',
            style: const TextStyle(
              color: Colors.white70,
              fontSize: 12,
            ),
          ),
        ],
      ),
    );
  }
}

