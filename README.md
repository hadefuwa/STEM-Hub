# Homeschool Hub - Flutter

A cross-platform homeschool learning management application built with Flutter. This app allows students to access lessons, take quizzes, watch educational videos, and track their progress.

## Migration from WinUI 3 to Flutter

**This application has been migrated from WinUI 3 (C#) to Flutter** to enable cross-platform support. The original WinUI 3 version was Windows-only, but the Flutter version runs on Windows, macOS, Linux, iOS, and Android.

### Key Changes:
- **Framework**: WinUI 3 (C#) → Flutter (Dart)
- **UI Framework**: XAML → Flutter Widgets
- **Navigation**: Frame Navigation → GoRouter
- **State Management**: No built-in → Provider
- **Platform Support**: Windows only → Cross-platform (Windows, macOS, Linux, iOS, Android)
- **Data Storage**: JSON file (same approach, different implementation)
- **Video Embedding**: WebView2 → youtube_player_flutter

All features from the original WinUI 3 version have been preserved and enhanced in the Flutter version.

## Features

- **Student Management**: Create and manage multiple student profiles
- **Lessons**: Browse and complete lessons in various subjects (Maths, Arduino, etc.)
- **Quizzes**: Take interactive quizzes with automatic scoring
- **Video Resources**: Watch educational videos (Fusion 360 tutorials, etc.)
- **Progress Tracking**: View completion history and quiz scores
- **Cross-Platform**: Runs on Windows, macOS, Linux, iOS, and Android

## Prerequisites

- Flutter SDK (latest stable version)
- Dart SDK (comes with Flutter)
- Platform-specific SDKs:
  - **Windows**: Windows SDK
  - **macOS**: Xcode
  - **Linux**: Development tools
  - **iOS**: Xcode (macOS only)
  - **Android**: Android Studio

## Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd homeschool-hub-flutter
   ```

2. **Install dependencies:**
   ```bash
   flutter pub get
   ```

3. **Verify Flutter setup:**
   ```bash
   flutter doctor
   ```

## Running the App

### Windows
```bash
flutter run -d windows
```

### macOS
```bash
flutter run -d macos
```

### Linux
```bash
flutter run -d linux
```

### iOS (macOS only)
```bash
flutter run -d ios
```

### Android
```bash
flutter run -d android
```

## Building for Release

### Windows
```bash
flutter build windows --release
```

### macOS
```bash
flutter build macos --release
```

### Linux
```bash
flutter build linux --release
```

### iOS
```bash
flutter build ios --release
```

### Android
```bash
flutter build apk --release
# or for app bundle:
flutter build appbundle --release
```

## Project Structure

```
lib/
├── main.dart                 # App entry point
├── models/                  # Data models
│   ├── student.dart
│   ├── lesson.dart
│   ├── quiz.dart
│   ├── question.dart
│   ├── progress.dart
│   └── video_resource.dart
├── data/                    # Data layer
│   ├── app_data.dart
│   ├── data_store.dart
│   └── default_data.dart
├── screens/                 # UI screens
│   ├── main_screen.dart
│   ├── student_selection_screen.dart
│   ├── lesson_list_screen.dart
│   ├── lesson_view_screen.dart
│   ├── quiz_list_screen.dart
│   ├── quiz_screen.dart
│   ├── video_list_screen.dart
│   ├── video_screen.dart
│   └── progress_screen.dart
├── widgets/                 # Reusable widgets
│   ├── category_card.dart
│   ├── lesson_card.dart
│   ├── quiz_card.dart
│   ├── video_card.dart
│   └── progress_item.dart
├── utils/                   # Utilities
│   ├── constants.dart
│   └── paths.dart
├── providers/               # State management
│   └── data_store_provider.dart
└── router/                 # Navigation
    └── app_router.dart
```

## Data Storage

The app stores data locally in JSON format. Data is saved to:
- **Windows**: `%LOCALAPPDATA%\HomeschoolHub\data.json`
- **macOS**: `~/Library/Application Support/HomeschoolHub/data.json`
- **Linux**: `~/.local/share/HomeschoolHub/data.json`

## Default Data

The app comes with sample data:
- **Maths Lessons**: Introduction to Numbers, Basic Addition
- **Arduino Lessons**: Introduction to Arduino, Programming Basics
- **Vikings Quiz**: History quiz with 5 questions
- **Fusion 360 Videos**: Tutorial videos (YouTube video IDs need to be updated)

## Dependencies

- `path_provider`: Local file storage paths
- `go_router`: Navigation
- `provider`: State management
- `youtube_player_flutter`: YouTube video playback
- `flutter_markdown`: Markdown rendering for lesson content
- `intl`: Date formatting

## Development

### Hot Reload
While the app is running, press `r` in the terminal to hot reload, or `R` for a full restart.

### Debugging
Use Flutter's built-in debugging tools or your IDE's debugger.

## Troubleshooting

### Flutter not found
Make sure Flutter is installed and added to your PATH.

### Dependencies not installing
Run `flutter pub get` again. If issues persist, try:
```bash
flutter clean
flutter pub get
```

### Platform-specific issues
- **Windows**: Ensure Windows desktop development is enabled: `flutter config --enable-windows-desktop`
- **macOS**: Ensure macOS desktop development is enabled: `flutter config --enable-macos-desktop`
- **Linux**: Ensure Linux desktop development is enabled: `flutter config --enable-linux-desktop`

## License

This project is part of a migration from WinUI 3 C# to Flutter for cross-platform support.

## Notes

- YouTube video IDs in `default_data.dart` are placeholders and should be replaced with actual video IDs
- The app uses Material Design 3 for the UI
- Data persists between app sessions automatically

