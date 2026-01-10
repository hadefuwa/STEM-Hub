import '../models/student.dart';
import '../models/lesson.dart';
import '../models/quiz.dart';
import '../models/progress.dart';
import '../models/video_resource.dart';

class AppData {
  List<Student> students;
  List<Lesson> lessons;
  List<Quiz> quizzes;
  List<Progress> progress;
  List<VideoResource> videoResources;

  AppData({
    required this.students,
    required this.lessons,
    required this.quizzes,
    required this.progress,
    required this.videoResources,
  });

  Map<String, dynamic> toJson() => {
        'students': students.map((s) => s.toJson()).toList(),
        'lessons': lessons.map((l) => l.toJson()).toList(),
        'quizzes': quizzes.map((q) => q.toJson()).toList(),
        'progress': progress.map((p) => p.toJson()).toList(),
        'videoResources': videoResources.map((v) => v.toJson()).toList(),
      };

  factory AppData.fromJson(Map<String, dynamic> json) => AppData(
        students: (json['students'] as List<dynamic>?)
                ?.map((s) => Student.fromJson(s as Map<String, dynamic>))
                .toList() ??
            [],
        lessons: (json['lessons'] as List<dynamic>?)
                ?.map((l) => Lesson.fromJson(l as Map<String, dynamic>))
                .toList() ??
            [],
        quizzes: (json['quizzes'] as List<dynamic>?)
                ?.map((q) => Quiz.fromJson(q as Map<String, dynamic>))
                .toList() ??
            [],
        progress: (json['progress'] as List<dynamic>?)
                ?.map((p) => Progress.fromJson(p as Map<String, dynamic>))
                .toList() ??
            [],
        videoResources: (json['videoResources'] as List<dynamic>?)
                ?.map((v) => VideoResource.fromJson(v as Map<String, dynamic>))
                .toList() ??
            [],
      );

  factory AppData.defaultData() {
    return AppData(
      students: [],
      lessons: [],
      quizzes: [],
      progress: [],
      videoResources: [],
    );
  }
}

