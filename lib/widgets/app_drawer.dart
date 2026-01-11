import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';

class AppDrawer extends StatelessWidget {
  const AppDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;

    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          // Header section
          DrawerHeader(
            decoration: BoxDecoration(
              color: AppColors.header,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                const Icon(
                  Icons.school,
                  color: Colors.white,
                  size: 48,
                ),
                const SizedBox(height: 8),
                Text(
                  AppConstants.appName,
                  style: AppTextStyles.header.copyWith(fontSize: 24),
                ),
                if (currentStudent != null) ...[
                  const SizedBox(height: 8),
                  Text(
                    'Student: ${currentStudent.name}',
                    style: const TextStyle(
                      color: Colors.white70,
                      fontSize: 14,
                    ),
                  ),
                ],
              ],
            ),
          ),

          // Home
          ListTile(
            leading: const Icon(Icons.home, color: AppColors.header),
            title: const Text('Home'),
            onTap: () {
              context.go(AppPaths.years);
              Navigator.pop(context);
            },
          ),

          const Divider(),

          // Age Ranges Section
          const Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
              'Age Ranges',
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.bold,
                color: Colors.grey,
              ),
            ),
          ),

          ListTile(
            leading: const Icon(Icons.child_care, color: AppColors.maths),
            title: const Text('3-4 Years'),
            subtitle: const Text('Nursery & Reception'),
            onTap: () {
              context.go(AppPaths.years);
              Navigator.pop(context);
            },
          ),

          ListTile(
            leading: const Icon(Icons.child_friendly, color: AppColors.vikings),
            title: const Text('5-6 Years'),
            subtitle: const Text('Year 1'),
            onTap: () {
              context.go('${AppPaths.subjects}?yearId=year1');
              Navigator.pop(context);
            },
          ),

          ListTile(
            leading: const Icon(Icons.face, color: AppColors.arduino),
            title: const Text('7-8 Years'),
            subtitle: const Text('Year 2'),
            onTap: () {
              context.go('${AppPaths.subjects}?yearId=year2');
              Navigator.pop(context);
            },
          ),

          ListTile(
            leading: const Icon(Icons.person, color: AppColors.fusion360),
            title: const Text('9-10 Years'),
            subtitle: const Text('Year 3'),
            onTap: () {
              context.go('${AppPaths.subjects}?yearId=year3');
              Navigator.pop(context);
            },
          ),

          ListTile(
            leading: const Icon(Icons.person_outline, color: AppColors.progress),
            title: const Text('11-12 Years'),
            subtitle: const Text('Year 4'),
            onTap: () {
              context.go('${AppPaths.subjects}?yearId=year4');
              Navigator.pop(context);
            },
          ),

          ListTile(
            leading: const Icon(Icons.people, color: AppColors.header),
            title: const Text('13-14 Years'),
            subtitle: const Text('Year 5'),
            onTap: () {
              context.go('${AppPaths.subjects}?yearId=year5');
              Navigator.pop(context);
            },
          ),

          ListTile(
            leading: const Icon(Icons.people_outline, color: Colors.purple),
            title: const Text('15-16 Years'),
            subtitle: const Text('Year 6'),
            onTap: () {
              context.go('${AppPaths.subjects}?yearId=year6');
              Navigator.pop(context);
            },
          ),

          const Divider(),

          // Results Section
          const Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
              'Results',
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.bold,
                color: Colors.grey,
              ),
            ),
          ),

          ListTile(
            leading: const Icon(Icons.bar_chart, color: AppColors.progress),
            title: const Text('Results'),
            subtitle: const Text('View all results and statistics'),
            onTap: () {
              context.go(AppPaths.results);
              Navigator.pop(context);
            },
          ),

          const Divider(),

          // About section
          const Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
              'About',
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.bold,
                color: Colors.grey,
              ),
            ),
          ),

          ListTile(
            leading: const Icon(Icons.info, color: Colors.grey),
            title: const Text('About App'),
            subtitle: Text('Version ${AppConstants.appVersion}'),
            onTap: () {
              showAboutDialog(
                context: context,
                applicationName: AppConstants.appName,
                applicationVersion: AppConstants.appVersion,
                applicationIcon: const Icon(
                  Icons.school,
                  size: 48,
                  color: AppColors.header,
                ),
                children: [
                  const Padding(
                    padding: EdgeInsets.only(top: 16),
                    child: Text(
                      'A comprehensive homeschool learning management application.',
                    ),
                  ),
                ],
              );
            },
          ),
        ],
      ),
    );
  }
}

