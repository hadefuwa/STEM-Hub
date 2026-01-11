import 'dart:io';
import 'dart:convert';
import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';
import 'package:path/path.dart' as path;
import 'app_data.dart';
import 'default_data.dart';
import '../models/student.dart';
import '../models/lesson.dart';
import '../models/quiz.dart';
import '../models/progress.dart';
import '../models/video_resource.dart';
import '../models/year.dart';

class DataStore extends ChangeNotifier {
  late String _dataPath;
  AppData _data = DefaultData.getDefaultData();
  bool _initialized = false;
  bool _adminMode = false; // Admin mode flag

  AppData get data => _data;
  bool get isInitialized => _initialized;
  bool get adminMode => _adminMode;
  
  void toggleAdminMode() {
    _adminMode = !_adminMode;
    notifyListeners();
  }
  
  void setAdminMode(bool enabled) {
    _adminMode = enabled;
    notifyListeners();
  }

  Future<void> initialize() async {
    try {
      // Get desktop path
      String desktopPath;
      if (Platform.isWindows) {
        final userProfile = Platform.environment['USERPROFILE'] ?? Platform.environment['HOME'] ?? '';
        desktopPath = path.join(userProfile, 'Desktop');
      } else if (Platform.isMacOS) {
        final userHome = Platform.environment['HOME'] ?? '';
        desktopPath = path.join(userHome, 'Desktop');
      } else if (Platform.isLinux) {
        final userHome = Platform.environment['HOME'] ?? '';
        desktopPath = path.join(userHome, 'Desktop');
      } else {
        // Fallback to application support directory for other platforms
        final directory = await getApplicationSupportDirectory();
        desktopPath = directory.path;
      }
      
      // Create HomeschoolHub folder on desktop
      final appDir = Directory(path.join(desktopPath, 'HomeschoolHub'));
      if (!await appDir.exists()) {
        await appDir.create(recursive: true);
      }
      _dataPath = path.join(appDir.path, 'data.json');
      
      // Check if old data exists in app support directory and migrate it
      await _migrateOldData();
      
      await loadData();
      _initialized = true;
      notifyListeners();
    } catch (e) {
      print('Error initializing DataStore: $e');
      _data = DefaultData.getDefaultData();
      _initialized = true;
    }
  }
  
  /// Migrates data from old app support directory to desktop if it exists
  /// DISABLED - Use fresh default data instead
  Future<void> _migrateOldData() async {
    // Migration disabled - always start with fresh data
    print('DEBUG: Data migration disabled - using fresh default data');
  }

  Future<void> loadData() async {
    try {
      final file = File(_dataPath);
      if (await file.exists()) {
        final jsonString = await file.readAsString();
        final json = jsonDecode(jsonString) as Map<String, dynamic>;
        _data = AppData.fromJson(json);
        // Merge default lessons to ensure new lessons are added
        await _mergeDefaultLessons();
      } else {
        // Load default data if file doesn't exist
        _data = DefaultData.getDefaultData();
        await saveData();
      }
    } catch (e) {
      print('Error loading data: $e');
      _data = DefaultData.getDefaultData();
      await saveData();
      notifyListeners();
    }
  }

  /// Merges default lessons into existing data, adding any lessons that don't exist
  /// Does NOT update existing lessons to preserve user progress
  Future<void> _mergeDefaultLessons() async {
    print('DEBUG _mergeDefaultLessons: Starting merge...');
    final defaultData = DefaultData.getDefaultData();
    final existingLessonIds = _data.lessons.map((l) => l.id).toSet();

    print('DEBUG _mergeDefaultLessons: Default data has ${defaultData.lessons.length} total lessons');
    print('DEBUG _mergeDefaultLessons: Existing data has ${_data.lessons.length} lessons');

    // Add any default lessons that don't exist in current data
    // Do NOT update existing lessons to avoid corrupting data
    bool hasChanges = false;
    int newLessonsAdded = 0;
    for (final defaultLesson in defaultData.lessons) {
      if (!existingLessonIds.contains(defaultLesson.id)) {
        _data.lessons.add(defaultLesson);
        hasChanges = true;
        newLessonsAdded++;
        print('DEBUG _mergeDefaultLessons: Adding new lesson ID ${defaultLesson.id}: ${defaultLesson.title}');
      }
    }

    // Also merge quizzes
    final existingQuizIds = _data.quizzes.map((q) => q.id).toSet();
    for (final defaultQuiz in defaultData.quizzes) {
      if (!existingQuizIds.contains(defaultQuiz.id)) {
        _data.quizzes.add(defaultQuiz);
        hasChanges = true;
      }
    }

    // Save if we added new lessons/quizzes
    if (hasChanges) {
      print('DEBUG _mergeDefaultLessons: Added $newLessonsAdded new lessons');
      await saveData();
      notifyListeners();
    } else {
      print('DEBUG _mergeDefaultLessons: No changes needed');
    }
  }

  Future<void> saveData() async {
    try {
      final file = File(_dataPath);
      final jsonString = jsonEncode(_data.toJson());
      await file.writeAsString(jsonString);
      print('Data saved successfully to: $_dataPath');
    } catch (e) {
      print('Error saving data: $e');
      rethrow; // Re-throw to ensure callers know if save failed
    }
  }

  // Student CRUD operations
  Future<void> addStudent(Student student) async {
    _data.students.add(student);
    await saveData();
    notifyListeners();
  }

  Future<void> updateStudent(Student student) async {
    final index = _data.students.indexWhere((s) => s.id == student.id);
    if (index != -1) {
      _data.students[index] = student;
      await saveData();
      notifyListeners();
    }
  }

  Future<void> deleteStudent(int studentId) async {
    _data.students.removeWhere((s) => s.id == studentId);
    // Also remove progress for this student
    _data.progress.removeWhere((p) => p.studentId == studentId);
    await saveData();
    notifyListeners();
  }

  Student? getStudent(int id) {
    try {
      return _data.students.firstWhere((s) => s.id == id);
    } catch (e) {
      return null;
    }
  }

  List<Student> getStudents() => _data.students;

  // Lesson operations
  List<Lesson> getLessons({
    String? yearId,
    String? subjectId,
    String? category, // Legacy support
    int? ageGroup, // Legacy support
  }) {
    var lessons = _data.lessons;
    if (yearId != null) {
      lessons = lessons.where((l) => l.yearId == yearId).toList();
    }
    if (subjectId != null) {
      lessons = lessons.where((l) => l.subjectId == subjectId).toList();
    }
    // Legacy support
    if (category != null) {
      lessons = lessons.where((l) => l.subjectId == category.toLowerCase()).toList();
    }
    if (ageGroup != null) {
      // Map ageGroup to yearId (approximate)
      final yearMap = {
        3: 'nursery',
        4: 'reception',
        5: 'year1',
        6: 'year1',
        7: 'year2',
        8: 'year2',
        9: 'year3',
        10: 'year3',
        11: 'year4',
        12: 'year4',
        13: 'year5',
        14: 'year5',
        15: 'year6',
        16: 'year6',
      };
      final mappedYear = yearMap[ageGroup];
      if (mappedYear != null) {
        lessons = lessons.where((l) => l.yearId == mappedYear).toList();
      }
    }
    return lessons..sort((a, b) => a.lessonNumber.compareTo(b.lessonNumber));
  }

  Lesson? getLesson(int id) {
    try {
      return _data.lessons.firstWhere((l) => l.id == id);
    } catch (e) {
      return null;
    }
  }

  Lesson? getLessonByNumber(String yearId, String subjectId, int lessonNumber, {String? categoryId}) {
    try {
      return _data.lessons.firstWhere(
        (l) => l.yearId == yearId && 
              l.subjectId == subjectId && 
              l.lessonNumber == lessonNumber &&
              (categoryId == null ? l.categoryId == null : l.categoryId == categoryId),
      );
    } catch (e) {
      return null;
    }
  }

  List<int> getAvailableLessonNumbers(String yearId, String subjectId, {String? categoryId}) {
    var lessons = _data.lessons
        .where((l) => l.yearId == yearId && l.subjectId == subjectId);
    
    if (categoryId != null) {
      lessons = lessons.where((l) => l.categoryId == categoryId);
    }
    
    return lessons
        .map((l) => l.lessonNumber)
        .toList()
      ..sort();
  }

  // Check if a year/subject combination has categories
  bool hasCategories(String yearId, String subjectId) {
    final result = _data.lessons.any(
      (l) => l.yearId == yearId && l.subjectId == subjectId && l.categoryId != null,
    );
    // Debug: print to help diagnose
    if (yearId == 'year3' && subjectId == 'technology') {
      final techLessons = _data.lessons.where(
        (l) => l.yearId == yearId && l.subjectId == subjectId,
      ).toList();
      final withCategories = techLessons.where((l) => l.categoryId != null).toList();
      print('DEBUG: Year 3 Technology - Total lessons: ${techLessons.length}, With categories: ${withCategories.length}');
      for (var lesson in withCategories.take(5)) {
        print('  - Lesson ${lesson.lessonNumber}: categoryId = ${lesson.categoryId}');
      }
    }
    return result;
  }

  // Quiz operations
  List<Quiz> getQuizzes({String? category, int? ageGroup}) {
    var quizzes = _data.quizzes;
    if (category != null) {
      quizzes = quizzes.where((q) => q.category == category).toList();
    }
    if (ageGroup != null) {
      quizzes = quizzes.where((q) => q.ageGroup == ageGroup).toList();
    }
    return quizzes;
  }

  Quiz? getQuiz(int id) {
    try {
      return _data.quizzes.firstWhere((q) => q.id == id);
    } catch (e) {
      return null;
    }
  }

  // Video Resource operations
  List<VideoResource> getVideoResources({String? category, int? ageGroup}) {
    var videos = _data.videoResources;
    if (category != null) {
      videos = videos.where((v) => v.category == category).toList();
    }
    if (ageGroup != null) {
      videos = videos.where((v) => v.ageGroup == ageGroup).toList();
    }
    return videos;
  }

  VideoResource? getVideoResource(int id) {
    try {
      return _data.videoResources.firstWhere((v) => v.id == id);
    } catch (e) {
      return null;
    }
  }

  // Progress operations
  Future<void> addProgress(Progress progress) async {
    // Check if this progress already exists (avoid duplicates)
    final existingIndex = _data.progress.indexWhere(
      (p) => p.studentId == progress.studentId &&
          p.activityType == progress.activityType &&
          p.activityId == progress.activityId,
    );
    
    if (existingIndex != -1) {
      // Update existing progress instead of adding duplicate
      _data.progress[existingIndex] = progress;
      print('Updated existing progress for ${progress.activityType} ${progress.activityId}');
    } else {
      _data.progress.add(progress);
      print('Added new progress for ${progress.activityType} ${progress.activityId}');
    }
    
    await saveData();
    print('Total progress entries: ${_data.progress.length}');
    notifyListeners();
  }

  List<Progress> getProgressForStudent(int studentId, {String? yearId, String? subjectId}) {
    var progress = _data.progress.where((p) => p.studentId == studentId);
    if (yearId != null) {
      progress = progress.where((p) => p.yearId == yearId);
    }
    if (subjectId != null) {
      progress = progress.where((p) => p.subjectId == subjectId);
    }
    final sorted = progress.toList();
    sorted.sort((a, b) {
      if (a.completedAt == null && b.completedAt == null) return 0;
      if (a.completedAt == null) return 1;
      if (b.completedAt == null) return -1;
      return b.completedAt!.compareTo(a.completedAt!);
    });
    return sorted;
  }

  bool hasCompletedActivity(int studentId, String activityType, int activityId) {
    return _data.progress.any((p) =>
        p.studentId == studentId &&
        p.activityType == activityType &&
        p.activityId == activityId &&
        p.isCompleted);
  }

  bool hasCompletedLesson(int studentId, String yearId, String subjectId, int lessonNumber) {
    return _data.progress.any((p) =>
        p.studentId == studentId &&
        p.activityType == 'Lesson' &&
        p.yearId == yearId &&
        p.subjectId == subjectId &&
        p.lessonNumber == lessonNumber &&
        p.isCompleted);
  }

  // Get overall statistics for results page
  Map<String, dynamic> getStudentStatistics(int studentId) {
    final allProgress = _data.progress.where((p) => p.studentId == studentId).toList();
    final completed = allProgress.where((p) => p.isCompleted).toList();
    final quizzes = completed.where((p) => p.activityType == 'Quiz' || p.activityType == 'Test' || p.activityType == 'Challenge').toList();
    
    final totalQuizzes = quizzes.length;
    final averageScore = totalQuizzes > 0
        ? quizzes.map((p) => p.score ?? 0).reduce((a, b) => a + b) / totalQuizzes
        : 0.0;

    // Group by year
    final byYear = <String, List<Progress>>{};
    for (var p in completed) {
      if (p.yearId != null) {
        byYear.putIfAbsent(p.yearId!, () => []).add(p);
      }
    }

    // Group by subject
    final bySubject = <String, List<Progress>>{};
    for (var p in completed) {
      if (p.subjectId != null) {
        bySubject.putIfAbsent(p.subjectId!, () => []).add(p);
      }
    }

    return {
      'totalCompleted': completed.length,
      'totalQuizzes': totalQuizzes,
      'averageScore': averageScore,
      'byYear': byYear,
      'bySubject': bySubject,
    };
  }

  // Get app-wide statistics (all progress across all students)
  Map<String, dynamic> getAppWideStatistics() {
    final allProgress = _data.progress.toList();
    final completed = allProgress.where((p) => p.isCompleted).toList();
    final quizzes = completed.where((p) => p.activityType == 'Quiz' || p.activityType == 'Test' || p.activityType == 'Challenge').toList();
    
    final totalQuizzes = quizzes.length;
    final averageScore = totalQuizzes > 0
        ? quizzes.map((p) => p.score ?? 0).reduce((a, b) => a + b) / totalQuizzes
        : 0.0;

    // Group by year
    final byYear = <String, List<Progress>>{};
    for (var p in completed) {
      if (p.yearId != null) {
        byYear.putIfAbsent(p.yearId!, () => []).add(p);
      }
    }

    // Group by subject
    final bySubject = <String, List<Progress>>{};
    for (var p in completed) {
      if (p.subjectId != null) {
        bySubject.putIfAbsent(p.subjectId!, () => []).add(p);
      }
    }

    return {
      'totalCompleted': completed.length,
      'totalQuizzes': totalQuizzes,
      'averageScore': averageScore,
      'byYear': byYear,
      'bySubject': bySubject,
    };
  }

  // Get all progress (app-wide, not filtered by student)
  List<Progress> getAllProgress({String? yearId, String? subjectId}) {
    Iterable<Progress> progress = _data.progress;
    if (yearId != null) {
      progress = progress.where((p) => p.yearId == yearId);
    }
    if (subjectId != null) {
      progress = progress.where((p) => p.subjectId == subjectId);
    }
    final sorted = progress.toList();
    sorted.sort((a, b) {
      if (a.completedAt == null && b.completedAt == null) return 0;
      if (a.completedAt == null) return 1;
      if (b.completedAt == null) return -1;
      return b.completedAt!.compareTo(a.completedAt!);
    });
    return sorted;
  }

  int getNextLessonId() {
    if (_data.lessons.isEmpty) return 1;
    return _data.lessons.map((l) => l.id).reduce((a, b) => a > b ? a : b) + 1;
  }

  int getNextQuizId() {
    if (_data.quizzes.isEmpty) return 1;
    return _data.quizzes.map((q) => q.id).reduce((a, b) => a > b ? a : b) + 1;
  }

  // Helper to get next ID for new items
  int getNextStudentId() {
    if (_data.students.isEmpty) return 1;
    return _data.students.map((s) => s.id).reduce((a, b) => a > b ? a : b) + 1;
  }

  int getNextProgressId() {
    if (_data.progress.isEmpty) return 1;
    return _data.progress.map((p) => p.id).reduce((a, b) => a > b ? a : b) + 1;
  }

  // Sequential progression methods
  
  /// Get all lessons for a subject across all years, sorted by year order and lesson number
  List<Lesson> getAllLessonsForSubject(String subjectId) {
    final allLessons = _data.lessons
        .where((l) => l.subjectId == subjectId)
        .toList();
    
    // Sort by year order, then by lesson number
    allLessons.sort((a, b) {
      final yearA = Year.getById(a.yearId);
      final yearB = Year.getById(b.yearId);
      final yearOrderA = yearA?.order ?? 999;
      final yearOrderB = yearB?.order ?? 999;
      
      if (yearOrderA != yearOrderB) {
        return yearOrderA.compareTo(yearOrderB);
      }
      
      // If same year, sort by lesson number
      return a.lessonNumber.compareTo(b.lessonNumber);
    });
    
    return allLessons;
  }
  
  /// Get the next uncompleted lesson for a subject (across all years)
  Lesson? getNextLessonForSubject(String subjectId, int studentId) {
    if (_adminMode) {
      // In admin mode, return first lesson
      final allLessons = getAllLessonsForSubject(subjectId);
      return allLessons.isNotEmpty ? allLessons.first : null;
    }
    
    final allLessons = getAllLessonsForSubject(subjectId);
    
    for (final lesson in allLessons) {
      if (!hasCompletedLesson(studentId, lesson.yearId, lesson.subjectId, lesson.lessonNumber)) {
        return lesson;
      }
    }
    
    return null; // All lessons completed
  }
  
  /// Check if a student can access a specific lesson
  /// Returns true if admin mode, all previous lessons are completed, or it's the next lesson
  bool canAccessLesson(int studentId, Lesson lesson) {
    if (_adminMode) {
      return true; // Admin can access everything
    }
    
    final allLessons = getAllLessonsForSubject(lesson.subjectId);
    final lessonIndex = allLessons.indexWhere((l) => 
        l.yearId == lesson.yearId && 
        l.subjectId == lesson.subjectId && 
        l.lessonNumber == lesson.lessonNumber &&
        (lesson.categoryId == null ? l.categoryId == null : l.categoryId == lesson.categoryId));
    
    if (lessonIndex == -1) {
      return false; // Lesson not found
    }
    
    // Check if this is the next lesson or all previous lessons are completed
    if (lessonIndex == 0) {
      return true; // First lesson is always accessible
    }
    
    // Check all previous lessons
    for (int i = 0; i < lessonIndex; i++) {
      final prevLesson = allLessons[i];
      if (!hasCompletedLesson(studentId, prevLesson.yearId, prevLesson.subjectId, prevLesson.lessonNumber)) {
        return false; // Previous lesson not completed
      }
    }
    
    return true; // All previous lessons completed
  }
  
  /// Get progress information for a subject (how many lessons completed, current year, etc.)
  Map<String, dynamic> getSubjectProgress(String subjectId, int studentId) {
    final allLessons = getAllLessonsForSubject(subjectId);
    int completedCount = 0;
    String? currentYearId;
    int? currentLessonNumber;
    
    for (final lesson in allLessons) {
      if (hasCompletedLesson(studentId, lesson.yearId, lesson.subjectId, lesson.lessonNumber)) {
        completedCount++;
        currentYearId = lesson.yearId;
        currentLessonNumber = lesson.lessonNumber;
      } else {
        // Found first uncompleted lesson
        break;
      }
    }
    
    final nextLesson = getNextLessonForSubject(subjectId, studentId);
    
    return {
      'totalLessons': allLessons.length,
      'completedCount': completedCount,
      'currentYearId': currentYearId,
      'currentLessonNumber': currentLessonNumber,
      'nextLesson': nextLesson,
      'progressPercentage': allLessons.isEmpty ? 0.0 : (completedCount / allLessons.length) * 100,
    };
  }
}

