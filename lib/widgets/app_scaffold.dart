import 'package:flutter/material.dart';
import 'app_header.dart';
import 'app_footer.dart';
import 'app_drawer.dart';
import 'top_nav_bar.dart';
import '../utils/constants.dart';

class AppScaffold extends StatelessWidget {
  final Widget body;
  final String? title;
  final bool showMenuButton;
  final bool showBackButton;
  final bool showFooter;
  final bool showTopNav;
  final List<Widget>? actions;
  final GlobalKey<ScaffoldState>? scaffoldKey;

  const AppScaffold({
    super.key,
    required this.body,
    this.title,
    this.showMenuButton = true,
    this.showBackButton = false,
    this.showFooter = true,
    this.showTopNav = true,
    this.actions,
    this.scaffoldKey,
  });

  @override
  Widget build(BuildContext context) {
    final scaffoldStateKey = scaffoldKey ?? GlobalKey<ScaffoldState>();

    return Scaffold(
      key: scaffoldStateKey,
      backgroundColor: AppColors.background,
      appBar: AppHeader(
        title: title,
        showMenuButton: showMenuButton,
        showBackButton: showBackButton,
        actions: actions,
        scaffoldKey: scaffoldStateKey,
      ),
      drawer: showMenuButton ? const AppDrawer() : null,
      body: Column(
        children: [
          if (showTopNav) const TopNavBar(),
          Expanded(
            child: body,
          ),
          if (showFooter) const AppFooter(),
        ],
      ),
    );
  }
}

