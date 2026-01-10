import 'package:go_router/go_router.dart';
import '../screens/years_dashboard_screen.dart';
import '../screens/subjects_screen.dart';
import '../screens/lessons_screen.dart';
import '../screens/lesson_view_screen.dart';
import '../screens/quiz_screen.dart';
import '../screens/results_screen.dart';
import '../screens/student_selection_screen.dart';
// Legacy screens (kept for compatibility)
import '../screens/main_screen.dart';
import '../screens/lesson_list_screen.dart';
import '../screens/quiz_list_screen.dart';
import '../screens/video_list_screen.dart';
import '../screens/video_screen.dart';
import '../screens/progress_screen.dart';
import '../screens/clicking_game_screen.dart';
import '../utils/paths.dart';

GoRouter createAppRouter() {
  return GoRouter(
    initialLocation: AppPaths.years,
    routes: [
      // New structure routes
      GoRoute(
        path: AppPaths.years,
        builder: (context, state) => const YearsDashboardScreen(),
      ),
      GoRoute(
        path: AppPaths.subjects,
        builder: (context, state) {
          final yearId = state.uri.queryParameters['yearId'] ?? '';
          return SubjectsScreen(yearId: yearId);
        },
      ),
      GoRoute(
        path: AppPaths.lessons,
        builder: (context, state) {
          final yearId = state.uri.queryParameters['yearId'] ?? '';
          final subjectId = state.uri.queryParameters['subjectId'] ?? '';
          return LessonsScreen(
            yearId: yearId,
            subjectId: subjectId,
          );
        },
      ),
      GoRoute(
        path: AppPaths.lessonView,
        builder: (context, state) {
          final id = int.tryParse(state.uri.queryParameters['id'] ?? '0') ?? 0;
          return LessonViewScreen(id: id);
        },
      ),
      GoRoute(
        path: AppPaths.quiz,
        builder: (context, state) {
          final id = int.tryParse(state.uri.queryParameters['id'] ?? '0') ?? 0;
          final lessonId = state.uri.queryParameters['lessonId'] != null
              ? int.tryParse(state.uri.queryParameters['lessonId']!)
              : null;
          return QuizScreen(id: id, lessonId: lessonId);
        },
      ),
      GoRoute(
        path: AppPaths.results,
        builder: (context, state) => const ResultsScreen(),
      ),
      GoRoute(
        path: AppPaths.studentSelection,
        builder: (context, state) => const StudentSelectionScreen(),
      ),
      // Legacy routes (for backward compatibility)
      GoRoute(
        path: AppPaths.home,
        builder: (context, state) => const MainScreen(),
      ),
      GoRoute(
        path: AppPaths.studentSelection,
        builder: (context, state) => const StudentSelectionScreen(),
      ),
      GoRoute(
        path: AppPaths.lessonList,
        builder: (context, state) {
          final category = state.uri.queryParameters['category'] ?? '';
          final ageGroup = int.tryParse(state.uri.queryParameters['ageGroup'] ?? '0') ?? 0;
          return LessonListScreen(
            category: category,
            ageGroup: ageGroup,
          );
        },
      ),
      GoRoute(
        path: AppPaths.lessonView,
        builder: (context, state) {
          final id = int.tryParse(state.uri.queryParameters['id'] ?? '0') ?? 0;
          return LessonViewScreen(id: id);
        },
      ),
      GoRoute(
        path: AppPaths.quizList,
        builder: (context, state) {
          final category = state.uri.queryParameters['category'] ?? '';
          final ageGroup = int.tryParse(state.uri.queryParameters['ageGroup'] ?? '0') ?? 0;
          return QuizListScreen(
            category: category,
            ageGroup: ageGroup,
          );
        },
      ),
      GoRoute(
        path: AppPaths.quiz,
        builder: (context, state) {
          final id = int.tryParse(state.uri.queryParameters['id'] ?? '0') ?? 0;
          return QuizScreen(id: id);
        },
      ),
      GoRoute(
        path: AppPaths.videoList,
        builder: (context, state) {
          final category = state.uri.queryParameters['category'] ?? '';
          final ageGroup = int.tryParse(state.uri.queryParameters['ageGroup'] ?? '0') ?? 0;
          return VideoListScreen(
            category: category,
            ageGroup: ageGroup,
          );
        },
      ),
      GoRoute(
        path: AppPaths.video,
        builder: (context, state) {
          final id = int.tryParse(state.uri.queryParameters['id'] ?? '0') ?? 0;
          return VideoScreen(id: id);
        },
      ),
      GoRoute(
        path: AppPaths.progress,
        builder: (context, state) => const ProgressScreen(),
      ),
      GoRoute(
        path: AppPaths.clickingGame,
        builder: (context, state) => const ClickingGameScreen(),
      ),
    ],
  );
}

