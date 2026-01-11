import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../utils/constants.dart';

class AppHeader extends StatelessWidget implements PreferredSizeWidget {
  final String? title;
  final bool showMenuButton;
  final bool showBackButton;
  final List<Widget>? actions;
  final GlobalKey<ScaffoldState>? scaffoldKey;

  const AppHeader({
    super.key,
    this.title,
    this.showMenuButton = true,
    this.showBackButton = false,
    this.actions,
    this.scaffoldKey,
  });

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context, listen: false);
    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;
    
    // Check if we can go back - show back button if explicitly requested or if navigation stack allows it
    final canGoBack = context.canPop();
    final shouldShowBackButton = showBackButton || canGoBack;
    final shouldShowMenuButton = showMenuButton && !shouldShowBackButton;

    return AppBar(
      title: Text(
        title ?? AppConstants.appName,
        style: const TextStyle(
          fontWeight: FontWeight.w600,
          letterSpacing: 0.5,
        ),
      ),
      flexibleSpace: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              AppColors.header,
              AppColors.header.withOpacity(0.85),
            ],
          ),
        ),
      ),
      elevation: 0,
      centerTitle: true,
      shadowColor: AppColors.header.withOpacity(0.3),
      leading: shouldShowBackButton
          ? IconButton(
              icon: const Icon(Icons.arrow_back),
              onPressed: () {
                context.pop();
              },
            )
          : shouldShowMenuButton
              ? IconButton(
                  icon: const Icon(Icons.menu),
                  onPressed: () {
                    if (scaffoldKey?.currentState != null) {
                      scaffoldKey!.currentState!.openDrawer();
                    } else {
                      Scaffold.of(context).openDrawer();
                    }
                  },
                )
              : null,
      actions: [
        // Admin mode toggle
        Consumer<DataStore>(
          builder: (context, dataStore, _) {
            return Tooltip(
              message: dataStore.adminMode ? 'Admin Mode: ON' : 'Admin Mode: OFF',
              child: IconButton(
                icon: Icon(
                  dataStore.adminMode ? Icons.admin_panel_settings : Icons.admin_panel_settings_outlined,
                  color: dataStore.adminMode ? Colors.orange : Colors.white70,
                ),
                onPressed: () {
                  dataStore.toggleAdminMode();
                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      content: Text(
                        dataStore.adminMode 
                          ? '🔓 Admin Mode Enabled - You can access all lessons'
                          : '🔒 Admin Mode Disabled - Sequential progression enforced',
                      ),
                      backgroundColor: dataStore.adminMode ? Colors.orange : Colors.grey,
                      duration: const Duration(seconds: 2),
                    ),
                  );
                },
              ),
            );
          },
        ),
        if (currentStudent != null)
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: Center(
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.person, color: Colors.white, size: 20),
                  const SizedBox(width: 4),
                  Text(
                    currentStudent.name,
                    style: AppTextStyles.subtitle.copyWith(color: Colors.white),
                  ),
                ],
              ),
            ),
          ),
        if (actions != null) ...actions!,
      ],
    );
  }
}

