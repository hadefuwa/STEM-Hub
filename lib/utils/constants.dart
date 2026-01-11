import 'package:flutter/material.dart';

class AppColors {
  static const maths = Color(0xFFFF6B9E);
  static const vikings = Color(0xFF4ECDC4);
  static const arduino = Color(0xFF95E1D3);
  static const fusion360 = Color(0xFFF38181);
  static const progress = Color(0xFFFFD93D);
  static const header = Color(0xFF4A90E2);
  static const background = Color(0xFFF8F9FA);
  static const cardBackground = Colors.white;
}

class AppTextStyles {
  static const TextStyle header = TextStyle(
    fontSize: 28,
    fontWeight: FontWeight.bold,
    color: Colors.white,
  );

  static const TextStyle title = TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
  );

  static const TextStyle subtitle = TextStyle(
    fontSize: 18,
    fontWeight: FontWeight.w500,
  );

  static const TextStyle body = TextStyle(
    fontSize: 16,
  );

  static const TextStyle cardTitle = TextStyle(
    fontSize: 20,
    fontWeight: FontWeight.bold,
  );
}

class AppConstants {
  static const String appName = 'Homeschool Hub';
  static const String appVersion = '1.0.0';
  static const double cardPadding = 20.0;
  static const double cardBorderRadius = 10.0;
  static const double defaultMargin = 16.0;
  static const double defaultPadding = 16.0;
  
  // Responsive breakpoints for PC-first design
  static const double mobileBreakpoint = 600.0;
  static const double tabletBreakpoint = 800.0;
  static const double desktopBreakpoint = 1200.0;
  static const double largeDesktopBreakpoint = 1600.0;
}

/// Responsive utility functions for PC-first design
class ResponsiveUtils {
  /// Get the number of columns for category cards based on screen width
  /// PC-first: More columns on larger screens for compact modern design
  static int getCategoryCardColumns(double width) {
    if (width >= AppConstants.largeDesktopBreakpoint) {
      return 8; // Very large screens: 8 columns
    } else if (width >= AppConstants.desktopBreakpoint) {
      return 6; // Desktop: 6 columns
    } else if (width >= AppConstants.tabletBreakpoint) {
      return 4; // Large tablet: 4 columns
    } else {
      return 3; // Tablet/Mobile: 3 columns
    }
  }
  
  /// Get the number of columns for lesson tiles based on screen width
  /// Lesson tiles are smaller, so we can fit more
  static int getLessonTileColumns(double width) {
    if (width >= AppConstants.largeDesktopBreakpoint) {
      return 8; // Very large screens: 8 columns
    } else if (width >= AppConstants.desktopBreakpoint) {
      return 6; // Desktop: 6 columns
    } else if (width >= AppConstants.tabletBreakpoint) {
      return 5; // Large tablet: 5 columns
    } else if (width >= AppConstants.mobileBreakpoint) {
      return 4; // Tablet: 4 columns
    } else {
      return 3; // Mobile: 3 columns
    }
  }
}

