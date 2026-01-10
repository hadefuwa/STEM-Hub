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
    
    // Check if we can go back - automatically show back button if we can go back
    // unless explicitly disabled
    final canGoBack = context.canPop();
    final shouldShowBackButton = (showBackButton || canGoBack) && canGoBack;
    final shouldShowMenuButton = showMenuButton && !shouldShowBackButton;

    return AppBar(
      title: Text(title ?? AppConstants.appName),
      backgroundColor: AppColors.header,
      elevation: 2,
      centerTitle: true,
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

