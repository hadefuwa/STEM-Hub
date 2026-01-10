# Flutter Migration Plan - Homeschool Hub

## Overview
This document outlines the complete plan to migrate the WinUI 3 C# Homeschool Hub application to Flutter (Dart), making it cross-platform (Windows, macOS, Linux, iOS, Android).

---

## Phase 1: Project Setup & Architecture (Week 1)

### 1.1 Flutter Project Initialization
- [ ] Create new Flutter project: `flutter create homeschool_hub`
- [ ] Configure project for desktop (Windows, macOS, Linux)
- [ ] Set up project structure following Flutter best practices
- [ ] Configure `pubspec.yaml` with required dependencies

### 1.2 Project Structure
```
lib/
├── main.dart
├── models/
│   ├── student.dart
│   ├── lesson.dart
│   ├── quiz.dart
│   ├── question.dart
│   ├── progress.dart
│   └── video_resource.dart
├── data/
│   ├── data_store.dart
│   └── default_data.dart
├── screens/
│   ├── main_screen.dart
│   ├── student_selection_screen.dart
│   ├── lesson_list_screen.dart
│   ├── lesson_view_screen.dart
│   ├── quiz_list_screen.dart
│   ├── quiz_screen.dart
│   ├── video_list_screen.dart
│   ├── video_screen.dart
│   └── progress_screen.dart
├── widgets/
│   ├── category_card.dart
│   ├── lesson_card.dart
│   ├── quiz_card.dart
│   ├── video_card.dart
│   └── progress_item.dart
└── utils/
    ├── constants.dart
    └── paths.dart
```

### 1.3 Dependencies to Add
```yaml
dependencies:
  flutter:
    sdk: flutter
  path_provider: ^2.1.0      # For local file storage
  shared_preferences: ^2.2.0  # Alternative: for simple key-value storage
  # OR
  sqflite: ^2.3.0            # If switching to SQLite (recommended)
  youtube_player_flutter: ^8.1.0  # For YouTube video embedding
  # OR
  webview_flutter: ^4.4.0     # Alternative for web content
  intl: ^0.18.0               # For date formatting
```

---

## Phase 2: Data Layer Migration (Week 1-2)

### 2.1 Model Classes (Dart)
**Priority: HIGH**

Convert C# models to Dart classes:

#### Student Model
```dart
class Student {
  int id;
  String name;
  int age;
  DateTime createdAt;

  Student({
    required this.id,
    required this.name,
    required this.age,
    required this.createdAt,
  });

  Map<String, dynamic> toJson() => {...};
  factory Student.fromJson(Map<String, dynamic> json) => Student(...);
}
```

#### Lesson Model
```dart
class Lesson {
  int id;
  String title;
  String category;
  String content;
  int ageGroup;
  int orderIndex;
  // Similar toJson/fromJson
}
```

#### Quiz & Question Models
```dart
class Quiz {
  int id;
  String title;
  String category;
  int ageGroup;
  List<Question> questions;
}

class Question {
  int id;
  int quizId;
  String questionText;
  List<String> options;
  int correctAnswerIndex;
}
```

#### Progress Model
```dart
class Progress {
  int id;
  int studentId;
  String activityType; // 'Lesson' or 'Quiz'
  int activityId;
  int? score; // null for lessons, score for quizzes
  DateTime completedAt;
}
```

#### VideoResource Model
```dart
class VideoResource {
  int id;
  String title;
  String category;
  String youtubeVideoId;
  String description;
  int ageGroup;
}
```

### 2.2 Data Storage Strategy

**Option A: JSON File (Current Approach)**
- Use `path_provider` to get local app data directory
- Read/write JSON file similar to current implementation
- **Pros**: Simple, matches current architecture
- **Cons**: Not ideal for large datasets

**Option B: SQLite (Recommended)**
- Use `sqflite` package
- Better for future scalability
- More robust data handling
- **Pros**: Better performance, ACID compliance
- **Cons**: More complex migration

**Recommendation**: Start with JSON (Option A) for faster migration, migrate to SQLite later if needed.

### 2.3 Data Store Implementation

Create `DataStore` class:
```dart
class DataStore {
  late String _dataPath;
  AppData _data = AppData();

  Future<void> initialize() async {
    // Get local app data directory
    final directory = await getApplicationSupportDirectory();
    _dataPath = path.join(directory.path, 'data.json');
    await loadData();
  }

  Future<void> loadData() async {
    // Load from JSON file
  }

  Future<void> saveData() async {
    // Save to JSON file
  }

  // CRUD methods for Students, Lessons, Quizzes, etc.
}
```

### 2.4 Default Data Seeding
- Migrate all default lessons (Maths, Arduino)
- Migrate all default quizzes (Vikings)
- Migrate all default video resources (Fusion 360)
- Ensure data structure matches exactly

---

## Phase 3: UI/UX Migration (Week 2-3)

### 3.1 Theme & Styling
- [ ] Define app theme with colors matching current design
- [ ] Create color constants:
  - Maths: `#FF6B9E`
  - Vikings: `#4ECDC4`
  - Arduino: `#95E1D3`
  - Fusion 360: `#F38181`
  - Progress: `#FFD93D`
  - Header: `#4A90E2`
- [ ] Set up Material Design 3 theme
- [ ] Configure fonts and text styles

### 3.2 Screen-by-Screen Migration

#### Main Screen
- [ ] Header with app title and student name
- [ ] Grid of category cards (2x2 layout)
- [ ] Progress button
- [ ] Change Student button
- [ ] Navigation logic to other screens

#### Student Selection Screen
- [ ] List of existing students
- [ ] Form to create new student (name, age)
- [ ] Student selection functionality

#### Lesson List Screen
- [ ] Filter by category and age group
- [ ] List of lesson cards
- [ ] Navigation to lesson view

#### Lesson View Screen
- [ ] Lesson title and content display
- [ ] Scrollable content area
- [ ] "Mark as Complete" button
- [ ] Back navigation

#### Quiz List Screen
- [ ] List of available quizzes
- [ ] Quiz cards with title and description
- [ ] Navigation to quiz screen

#### Quiz Screen
- [ ] Question display
- [ ] Multiple choice options (radio buttons)
- [ ] Next/Previous question navigation
- [ ] Submit button
- [ ] Score calculation and display
- [ ] Progress saving

#### Video List Screen
- [ ] List of video resources
- [ ] Video cards with thumbnails
- [ ] Navigation to video player

#### Video Screen
- [ ] YouTube video player integration
- [ ] Video title and description
- [ ] Back navigation
- **Note**: Use `youtube_player_flutter` or `webview_flutter` for embedding

#### Progress Screen
- [ ] List of completed activities
- [ ] Display lesson completions
- [ ] Display quiz scores
- [ ] Sort by date (newest first)
- [ ] Filter options

### 3.3 Reusable Widgets
- [ ] `CategoryCard` - For main menu cards
- [ ] `LessonCard` - For lesson list items
- [ ] `QuizCard` - For quiz list items
- [ ] `VideoCard` - For video list items
- [ ] `ProgressItem` - For progress list items

---

## Phase 4: Navigation & State Management (Week 3)

### 4.1 Navigation Strategy
**Option A: Navigator 2.0 (Declarative)**
- More control, better for complex apps
- Better deep linking support

**Option B: GoRouter (Recommended)**
- Simpler API
- Better for most use cases
- Built-in deep linking

**Recommendation**: Use `go_router` package

### 4.2 State Management Strategy

**Option A: Provider (Recommended for this app)**
- Simple, built-in Flutter solution
- Good for medium complexity apps
- Easy to understand

**Option B: Riverpod**
- More modern, type-safe
- Better testing support

**Option C: Bloc**
- More structured
- Better for complex state logic

**Recommendation**: Start with `Provider` - simple and sufficient for this app.

### 4.3 State Management Implementation
- Create `DataStoreProvider` for data access
- Create `StudentProvider` for current student state
- Manage navigation state
- Handle screen transitions

---

## Phase 5: Platform-Specific Features (Week 4)

### 5.1 Desktop Support
- [ ] Window sizing and constraints
- [ ] Desktop-specific UI adjustments
- [ ] Keyboard navigation support
- [ ] File system access for data storage

### 5.2 Mobile Support (Future)
- [ ] Responsive layouts
- [ ] Touch-optimized UI
- [ ] Mobile navigation patterns
- [ ] Platform-specific storage paths

### 5.3 Cross-Platform Considerations
- [ ] Path handling (use `path` package)
- [ ] File system permissions
- [ ] Platform-specific data directories
- [ ] Testing on all target platforms

---

## Phase 6: Testing & Polish (Week 4-5)

### 6.1 Functionality Testing
- [ ] Student creation and selection
- [ ] Lesson viewing and completion
- [ ] Quiz taking and scoring
- [ ] Video playback
- [ ] Progress tracking
- [ ] Data persistence

### 6.2 UI/UX Testing
- [ ] Visual consistency
- [ ] Responsive design
- [ ] Navigation flow
- [ ] Error handling
- [ ] Loading states

### 6.3 Data Migration (If Needed)
- [ ] Tool to migrate existing JSON data from C# app
- [ ] Data validation
- [ ] Backup/restore functionality

---

## Phase 7: Build & Distribution (Week 5)

### 7.1 Build Configuration
- [ ] Configure `pubspec.yaml` for desktop
- [ ] Set app name, version, description
- [ ] Configure app icons
- [ ] Set up signing (if needed)

### 7.2 Windows Build
```bash
flutter build windows --release
```

### 7.3 macOS Build
```bash
flutter build macos --release
```

### 7.4 Linux Build
```bash
flutter build linux --release
```

### 7.5 Distribution
- [ ] Create installers (Windows: MSIX/EXE, macOS: DMG, Linux: AppImage/DEB)
- [ ] Test installation on clean systems
- [ ] Document installation process

---

## Technical Considerations

### Key Differences: C# WinUI 3 → Flutter

1. **Language**: C# → Dart
   - Similar syntax, but some differences
   - Null safety is built-in (Dart 2.12+)
   - Async/await works similarly

2. **UI Framework**: XAML → Widget Tree
   - Declarative UI (similar concept)
   - Widget composition instead of XAML markup
   - Hot reload for faster development

3. **Data Storage**: JSON File → JSON File (or SQLite)
   - `path_provider` for platform-specific paths
   - `dart:convert` for JSON serialization

4. **Navigation**: Frame Navigation → GoRouter/Navigator
   - Different navigation patterns
   - Route-based navigation

5. **Video Embedding**: WebView2 → youtube_player_flutter
   - Different package, similar functionality
   - May need different YouTube embed approach

### Challenges & Solutions

1. **YouTube Video Embedding**
   - **Challenge**: WebView2 → Flutter equivalent
   - **Solution**: Use `youtube_player_flutter` package or `webview_flutter` with YouTube embed URL

2. **Local File Storage**
   - **Challenge**: Platform-specific paths
   - **Solution**: Use `path_provider` package

3. **State Management**
   - **Challenge**: No built-in state management in WinUI 3
   - **Solution**: Use Provider or Riverpod

4. **UI Styling**
   - **Challenge**: XAML → Flutter widgets
   - **Solution**: Use Material Design 3 or custom themes

---

## Migration Checklist

### Pre-Migration
- [ ] Backup current C# project
- [ ] Document all features and edge cases
- [ ] List all dependencies and their Flutter equivalents
- [ ] Set up Flutter development environment

### During Migration
- [ ] Migrate models first (foundation)
- [ ] Migrate data layer (storage)
- [ ] Migrate UI screens one by one
- [ ] Test each screen as you go
- [ ] Migrate navigation
- [ ] Add state management

### Post-Migration
- [ ] Full functionality testing
- [ ] UI/UX polish
- [ ] Performance optimization
- [ ] Documentation update
- [ ] User acceptance testing

---

## Estimated Timeline

- **Week 1**: Setup, Models, Data Layer
- **Week 2**: UI Screens (Main, Student, Lessons)
- **Week 3**: UI Screens (Quizzes, Videos, Progress), Navigation
- **Week 4**: State Management, Platform Features, Testing
- **Week 5**: Polish, Build, Distribution

**Total: 5 weeks** (assuming part-time work, could be 2-3 weeks full-time)

---

## Resources Needed

1. **Development Environment**
   - Flutter SDK (latest stable)
   - Dart SDK
   - IDE: VS Code or Android Studio
   - Platform SDKs (Windows SDK, Xcode for macOS, etc.)

2. **Packages to Research**
   - `youtube_player_flutter` or `webview_flutter`
   - `path_provider`
   - `go_router` or `flutter_navigation`
   - `provider` or `riverpod`
   - `sqflite` (if using SQLite)

3. **Documentation**
   - Flutter documentation
   - Dart language guide
   - Package documentation

---

## Success Criteria

✅ All features from C# app work in Flutter
✅ Data persists correctly
✅ UI matches or improves upon original
✅ App runs on Windows, macOS, Linux
✅ No data loss during migration
✅ Performance is acceptable
✅ Code is maintainable and well-documented

---

## Next Steps

1. Review and approve this plan
2. Set up Flutter development environment
3. Create Flutter project structure
4. Begin Phase 1: Project Setup
5. Follow phases sequentially, testing as you go

---

**Note**: This migration will make the app cross-platform, allowing it to run on Windows, macOS, Linux, iOS, and Android with a single codebase. This is a significant advantage over the current Windows-only implementation.

