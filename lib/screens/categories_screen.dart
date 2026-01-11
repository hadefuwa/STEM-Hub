import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../models/subject.dart';
import '../models/year.dart';
import '../data/data_store.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';
import '../widgets/category_card.dart';

class CategoriesScreen extends StatelessWidget {
  final String yearId;
  final String subjectId;

  const CategoriesScreen({
    super.key,
    required this.yearId,
    required this.subjectId,
  });

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final year = Year.getById(yearId);
    final subject = Subject.getById(subjectId);
    final screenWidth = MediaQuery.of(context).size.width;
    final crossAxisCount = ResponsiveUtils.getCategoryCardColumns(screenWidth);

    // Get all unique categories for this year and subject
    final lessons = dataStore.getLessons(yearId: yearId, subjectId: subjectId);
    final categories = lessons
        .where((l) => l.categoryId != null)
        .map((l) => l.categoryId!)
        .toSet()
        .toList()
      ..sort();
    
    // Debug output
    if (yearId == 'year3' && subjectId == 'technology') {
      print('DEBUG CategoriesScreen: Total lessons: ${lessons.length}');
      print('DEBUG CategoriesScreen: Lessons with categories: ${lessons.where((l) => l.categoryId != null).length}');
      print('DEBUG CategoriesScreen: Found categories: $categories');
      for (var lesson in lessons.where((l) => l.categoryId != null).take(5)) {
        print('  - Lesson ${lesson.lessonNumber} (${lesson.title.substring(0, lesson.title.length > 30 ? 30 : lesson.title.length)}...): categoryId = ${lesson.categoryId}');
      }
    }

    return AppScaffold(
      title: '${year?.name ?? ""} - ${subject?.name ?? ""}',
      showBackButton: true,
      body: categories.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.category_outlined, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  Text(
                    'No categories available for ${subject?.name ?? "this subject"} in ${year?.name ?? "this year"}',
                    style: const TextStyle(fontSize: 16, color: Colors.grey),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            )
          : GridView.count(
              crossAxisCount: crossAxisCount,
              padding: const EdgeInsets.all(20),
              crossAxisSpacing: 12,
              mainAxisSpacing: 12,
              childAspectRatio: 1.2,
              children: categories.map((categoryId) {
                // Get lesson count for this category
                final categoryLessons = lessons.where((l) => l.categoryId == categoryId).toList();
                final hasLessons = categoryLessons.isNotEmpty;

                return CategoryCard(
                  emoji: _getCategoryEmoji(categoryId),
                  title: _getCategoryName(categoryId),
                  color: _getCategoryColor(categoryId),
                  isEnabled: hasLessons,
                  onTap: hasLessons
                      ? () => context.push(
                            '${AppPaths.lessons}?yearId=$yearId&subjectId=$subjectId&categoryId=$categoryId',
                          )
                      : null,
                );
              }).toList(),
            ),
    );
  }

  String _getCategoryEmoji(String categoryId) {
    switch (categoryId) {
      case 'fusion360':
        return '🖥️';
      case 'python':
        return '🐍';
      default:
        return '📚';
    }
  }

  String _getCategoryName(String categoryId) {
    switch (categoryId) {
      case 'fusion360':
        return 'Fusion 360';
      case 'python':
        return 'Python';
      default:
        return categoryId;
    }
  }

  Color _getCategoryColor(String categoryId) {
    switch (categoryId) {
      case 'fusion360':
        return AppColors.fusion360;
      case 'python':
        return AppColors.arduino;
      default:
        return AppColors.header;
    }
  }
}

