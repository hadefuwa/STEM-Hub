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

class DataStore extends ChangeNotifier {
  late String _dataPath;
  AppData _data = AppData.defaultData();
  bool _initialized = false;

  AppData get data => _data;
  bool get isInitialized => _initialized;

  Future<void> initialize() async {
    try {
      final directory = await getApplicationSupportDirectory();
      final appDir = Directory(path.join(directory.path, 'HomeschoolHub'));
      if (!await appDir.exists()) {
        await appDir.create(recursive: true);
      }
      _dataPath = path.join(appDir.path, 'data.json');
      await loadData();
      _initialized = true;
      notifyListeners();
    } catch (e) {
      print('Error initializing DataStore: $e');
      _data = AppData.defaultData();
      _initialized = true;
    }
  }

  Future<void> loadData() async {
    try {
      final file = File(_dataPath);
      if (await file.exists()) {
        final jsonString = await file.readAsString();
        final json = jsonDecode(jsonString) as Map<String, dynamic>;
        _data = AppData.fromJson(json);
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

  Future<void> saveData() async {
    try {
      final file = File(_dataPath);
      final jsonString = jsonEncode(_data.toJson());
      await file.writeAsString(jsonString);
    } catch (e) {
      print('Error saving data: $e');
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

  Lesson? getLessonByNumber(String yearId, String subjectId, int lessonNumber) {
    try {
      return _data.lessons.firstWhere(
        (l) => l.yearId == yearId && l.subjectId == subjectId && l.lessonNumber == lessonNumber,
      );
    } catch (e) {
      return null;
    }
  }

  List<int> getAvailableLessonNumbers(String yearId, String subjectId) {
    return _data.lessons
        .where((l) => l.yearId == yearId && l.subjectId == subjectId)
        .map((l) => l.lessonNumber)
        .toList()
      ..sort();
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
    _data.progress.add(progress);
    await saveData();
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
}

