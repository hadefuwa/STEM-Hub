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

class SubjectsScreen extends StatelessWidget {
  final String yearId;

  const SubjectsScreen({
    super.key,
    required this.yearId,
  });

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final year = Year.getById(yearId);
    final screenWidth = MediaQuery.of(context).size.width;
    final crossAxisCount = ResponsiveUtils.getCategoryCardColumns(screenWidth);

    return AppScaffold(
      title: year?.name ?? 'Subjects',
      body: GridView.count(
        crossAxisCount: crossAxisCount,
        padding: const EdgeInsets.all(16),
        crossAxisSpacing: 16,
        mainAxisSpacing: 16,
        childAspectRatio: 1.0, // Make cards square
        children: Subject.allSubjects.map((subject) {
          // Check if there are lessons for this year and subject
          final availableLessons = dataStore.getAvailableLessonNumbers(yearId, subject.id);
          final hasLessons = availableLessons.isNotEmpty;
          
          return CategoryCard(
            emoji: subject.emoji,
            title: subject.name,
            color: _getSubjectColor(subject.id),
            isEnabled: hasLessons,
            onTap: hasLessons ? () => context.go(
              '${AppPaths.lessons}?yearId=$yearId&subjectId=${subject.id}',
            ) : null,
          );
        }).toList(),
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

