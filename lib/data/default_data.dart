import 'app_data.dart';
import '../models/lesson.dart';
import '../models/quiz.dart';
import 'lessons/nursery_lessons.dart';
import 'lessons/reception_lessons.dart';
import 'lessons/year1_lessons.dart';
import 'lessons/year2_lessons.dart';
import 'lessons/year3_lessons.dart';
import 'lessons/year4_lessons.dart';
import 'lessons/year5_lessons.dart';
import 'lessons/year6_lessons.dart';
import 'quizzes/default_quizzes.dart';

class DefaultData {
  static AppData getDefaultData() {
    return AppData(
      students: [],
      lessons: _getDefaultLessons(),
      quizzes: _getDefaultQuizzes(),
      progress: [],
      videoResources: [],
    );
  }

  static List<Lesson> _getDefaultLessons() {
    int lessonId = 1;
    int quizId = 1;

    // Collect lessons from all years, maintaining ID sequence
    final allLessons = <Lesson>[];
    
    // Nursery lessons
    final nurseryLessons = getNurseryLessons(lessonId, quizId);
    allLessons.addAll(nurseryLessons);
    lessonId += nurseryLessons.length;
    quizId += nurseryLessons.where((l) => l.quizId != null).length;
    
    // Reception lessons
    final receptionLessons = getReceptionLessons(lessonId, quizId);
    allLessons.addAll(receptionLessons);
    lessonId += receptionLessons.length;
    quizId += receptionLessons.where((l) => l.quizId != null).length;
    
    // Year 1 lessons
    final year1Lessons = getYear1Lessons(lessonId, quizId);
    allLessons.addAll(year1Lessons);
    lessonId += year1Lessons.length;
    quizId += year1Lessons.where((l) => l.quizId != null).length;
    
    // Year 2 lessons
    final year2Lessons = getYear2Lessons(lessonId, quizId);
    allLessons.addAll(year2Lessons);
    lessonId += year2Lessons.length;
    quizId += year2Lessons.where((l) => l.quizId != null).length;
    
    // Year 3 lessons
    final year3Lessons = getYear3Lessons(lessonId, quizId);
    allLessons.addAll(year3Lessons);
    lessonId += year3Lessons.length;
    quizId += year3Lessons.where((l) => l.quizId != null).length;
    
    // Year 4 lessons
    final year4Lessons = getYear4Lessons(lessonId, quizId);
    allLessons.addAll(year4Lessons);
    lessonId += year4Lessons.length;
    quizId += year4Lessons.where((l) => l.quizId != null).length;
    
    // Year 5 lessons
    final year5Lessons = getYear5Lessons(lessonId, quizId);
    allLessons.addAll(year5Lessons);
    lessonId += year5Lessons.length;
    quizId += year5Lessons.where((l) => l.quizId != null).length;
    
    // Year 6 lessons
    final year6Lessons = getYear6Lessons(lessonId, quizId);
    allLessons.addAll(year6Lessons);
    // No need to update IDs after the last one

    return allLessons;
  }

  static List<Quiz> _getDefaultQuizzes() {
    int quizId = 1;
    int questionId = 1;

    return getDefaultQuizzes(quizId, questionId);
  }
}
