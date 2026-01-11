import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/category_card.dart';
import '../widgets/app_scaffold.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    final crossAxisCount = ResponsiveUtils.getCategoryCardColumns(screenWidth);
    
    return AppScaffold(
      title: 'Home',
      body: GridView.count(
        crossAxisCount: crossAxisCount,
        padding: const EdgeInsets.all(20),
        crossAxisSpacing: 12,
        mainAxisSpacing: 12,
        childAspectRatio: 1.2, // More compact, wider cards
        children: [
          CategoryCard(
            emoji: '👶',
            title: '3-4 Years',
            color: AppColors.maths,
            onTap: () => context.go(AppPaths.years),
          ),
          CategoryCard(
            emoji: '🎒',
            title: '5-6 Years',
            color: AppColors.vikings,
            onTap: () => context.go('${AppPaths.subjects}?yearId=year1'),
          ),
          CategoryCard(
            emoji: '😊',
            title: '7-8 Years',
            color: AppColors.arduino,
            onTap: () => context.go('${AppPaths.subjects}?yearId=year2'),
          ),
          CategoryCard(
            emoji: '🙂',
            title: '9-10 Years',
            color: AppColors.fusion360,
            onTap: () => context.go('${AppPaths.subjects}?yearId=year3'),
          ),
          CategoryCard(
            emoji: '😎',
            title: '11-12 Years',
            color: AppColors.progress,
            onTap: () => context.go('${AppPaths.subjects}?yearId=year4'),
          ),
          CategoryCard(
            emoji: '🤓',
            title: '13-14 Years',
            color: AppColors.header,
            onTap: () => context.go('${AppPaths.subjects}?yearId=year5'),
          ),
          CategoryCard(
            emoji: '🧑',
            title: '15-16 Years',
            color: Colors.purple,
            onTap: () => context.go('${AppPaths.subjects}?yearId=year6'),
          ),
          CategoryCard(
            emoji: '📊',
            title: 'Results',
            color: AppColors.progress,
            onTap: () => context.go(AppPaths.results),
          ),
        ],
      ),
    );
  }
}

