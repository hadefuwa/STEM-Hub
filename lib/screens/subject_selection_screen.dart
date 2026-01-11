import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../models/subject.dart';
import '../data/data_store.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';
import '../widgets/category_card.dart';

class SubjectSelectionScreen extends StatelessWidget {
  const SubjectSelectionScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final screenWidth = MediaQuery.of(context).size.width;
    final crossAxisCount = ResponsiveUtils.getCategoryCardColumns(screenWidth);
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;

    return AppScaffold(
      title: 'Select Subject',
      body: GridView.count(
        crossAxisCount: crossAxisCount,
        padding: const EdgeInsets.all(20),
        crossAxisSpacing: 12,
        mainAxisSpacing: 12,
        childAspectRatio: 1.2,
        children: Subject.allSubjects.map((subject) {
          // Get progress info for this subject
          final progressInfo = currentStudent != null
              ? dataStore.getSubjectProgress(subject.id, currentStudent.id)
              : null;
          
          final hasLessons = dataStore.getAllLessonsForSubject(subject.id).isNotEmpty;
          
          return CategoryCard(
            emoji: subject.emoji,
            title: subject.name,
            color: _getSubjectColor(subject.id),
            isEnabled: hasLessons,
            subtitle: progressInfo != null
                ? '${progressInfo['completedCount']}/${progressInfo['totalLessons']} lessons'
                : null,
            onTap: hasLessons
                ? () => context.push('${AppPaths.sequentialLessons}?subjectId=${subject.id}')
                : null,
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

