import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../models/year.dart';
import '../data/data_store.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';
import '../widgets/category_card.dart';

class YearsDashboardScreen extends StatelessWidget {
  const YearsDashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final screenWidth = MediaQuery.of(context).size.width;
    final crossAxisCount = ResponsiveUtils.getCategoryCardColumns(screenWidth);
    
    return AppScaffold(
      title: 'Select Year',
      body: GridView.count(
        crossAxisCount: crossAxisCount,
        padding: const EdgeInsets.all(20),
        crossAxisSpacing: 12,
        mainAxisSpacing: 12,
        childAspectRatio: 1.2, // More compact, wider cards
        children: Year.allYears.map((year) {
          // Check if there are any lessons for this year
          final lessons = dataStore.getLessons(yearId: year.id);
          final hasLessons = lessons.isNotEmpty;
          
          return CategoryCard(
            emoji: _getYearEmoji(year.id),
            title: year.name,
            color: _getYearColor(year.id),
            isEnabled: hasLessons,
            onTap: hasLessons ? () => context.push('${AppPaths.subjects}?yearId=${year.id}') : null,
          );
        }).toList(),
      ),
    );
  }

  String _getYearEmoji(String yearId) {
    switch (yearId) {
      case 'nursery':
        return '👶';
      case 'reception':
        return '🎒';
      case 'year1':
        return '1️⃣';
      case 'year2':
        return '2️⃣';
      case 'year3':
        return '3️⃣';
      case 'year4':
        return '4️⃣';
      case 'year5':
        return '5️⃣';
      case 'year6':
        return '6️⃣';
      default:
        return '📚';
    }
  }

  Color _getYearColor(String yearId) {
    final colors = [
      AppColors.maths,
      AppColors.vikings,
      AppColors.arduino,
      AppColors.fusion360,
      AppColors.progress,
      AppColors.header,
    ];
    final index = Year.allYears.indexWhere((y) => y.id == yearId);
    return colors[index % colors.length];
  }
}

