import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../models/quiz.dart';
import '../models/lesson.dart';
import '../models/progress.dart';
import '../utils/constants.dart';
import '../utils/paths.dart';
import '../widgets/app_scaffold.dart';

class QuizScreen extends StatefulWidget {
  final int id;
  final int? lessonId; // Optional: if quiz is part of a lesson

  const QuizScreen({
    super.key,
    required this.id,
    this.lessonId,
  });

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  int _currentQuestionIndex = 0;
  Map<int, int> _answers = {}; // questionId -> selectedOptionIndex

  void _selectAnswer(int questionId, int optionIndex) {
    setState(() {
      _answers[questionId] = optionIndex;
    });
  }

  void _nextQuestion() {
    if (_currentQuestionIndex < _getQuiz()!.questions.length - 1) {
      setState(() {
        _currentQuestionIndex++;
      });
    }
  }

  void _previousQuestion() {
    if (_currentQuestionIndex > 0) {
      setState(() {
        _currentQuestionIndex--;
      });
    }
  }

  Future<void> _submitQuiz(BuildContext context, DataStore dataStore) async {
    final quiz = _getQuiz();
    if (quiz == null) return;

    final currentStudent = dataStore.data.students.isNotEmpty
        ? dataStore.data.students.first
        : null;

    // Calculate score
    int correctAnswers = 0;
    for (var question in quiz.questions) {
      final selectedAnswer = _answers[question.id];
      if (selectedAnswer == question.correctAnswerIndex) {
        correctAnswers++;
      }
    }

    final score = ((correctAnswers / quiz.questions.length) * 100).round();
    final successPercentage = score.toDouble();

    // Add progress only if student exists
    if (currentStudent != null) {
      // Find the lesson if this quiz is part of one
      Lesson? lesson;
      if (widget.lessonId != null) {
        lesson = dataStore.getLesson(widget.lessonId!);
      }

      // Add quiz progress
      final quizProgress = Progress(
        id: dataStore.getNextProgressId(),
        studentId: currentStudent.id,
        activityType: lesson?.assessmentType ?? 'Quiz',
        activityId: quiz.id,
        score: score,
        successPercentage: successPercentage,
        isCompleted: true,
        completedAt: DateTime.now(),
        yearId: lesson?.yearId,
        subjectId: lesson?.subjectId,
        lessonNumber: lesson?.lessonNumber,
      );
      await dataStore.addProgress(quizProgress);

      // If this quiz is part of a lesson, mark the lesson as complete too
      if (lesson != null && !dataStore.hasCompletedActivity(
        currentStudent.id,
        'Lesson',
        lesson.id,
      )) {
        final lessonProgress = Progress(
          id: dataStore.getNextProgressId(),
          studentId: currentStudent.id,
          activityType: 'Lesson',
          activityId: lesson.id,
          isCompleted: true,
          completedAt: DateTime.now(),
          yearId: lesson.yearId,
          subjectId: lesson.subjectId,
          lessonNumber: lesson.lessonNumber,
        );
        await dataStore.addProgress(lessonProgress);
      }
    }

    if (context.mounted) {
      final lesson = widget.lessonId != null ? dataStore.getLesson(widget.lessonId!) : null;
      
      showDialog(
        context: context,
        builder: (context) => AlertDialog(
          title: Text('${lesson?.assessmentType?.toUpperCase() ?? "Quiz"} Complete!'),
          content: Text(
            'You scored $correctAnswers out of ${quiz.questions.length} questions.\n\nScore: $score%${currentStudent == null ? '\n\n(Add a student to track progress)' : ''}',
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
                if (lesson != null) {
                  // Go back to lessons page
                  final categoryParam = lesson.categoryId != null ? '&categoryId=${lesson.categoryId}' : '';
                  context.go('${AppPaths.lessons}?yearId=${lesson.yearId}&subjectId=${lesson.subjectId}$categoryParam');
                } else {
                  context.go(AppPaths.home);
                }
              },
              child: const Text('OK'),
            ),
          ],
        ),
      );
    }
  }

  Quiz? _getQuiz() {
    final dataStore = Provider.of<DataStore>(context, listen: false);
    return dataStore.getQuiz(widget.id);
  }

  @override
  Widget build(BuildContext context) {
    final quiz = _getQuiz();
    if (quiz == null) {
      return AppScaffold(
        title: 'Quiz Not Found',
        body: const Center(
          child: Text('Quiz not found'),
        ),
      );
    }

    final question = quiz.questions[_currentQuestionIndex];
    final selectedAnswer = _answers[question.id];
    final isLastQuestion = _currentQuestionIndex == quiz.questions.length - 1;
    final allQuestionsAnswered = _answers.length == quiz.questions.length;

    return AppScaffold(
      title: quiz.title,
      showBackButton: true,
      body: Column(
        children: [
          // Progress indicator
          LinearProgressIndicator(
            value: (_currentQuestionIndex + 1) / quiz.questions.length,
            backgroundColor: Colors.grey[300],
            valueColor: const AlwaysStoppedAnimation<Color>(AppColors.vikings),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Text(
              'Question ${_currentQuestionIndex + 1} of ${quiz.questions.length}',
              style: AppTextStyles.subtitle,
            ),
          ),
          // Question
          Expanded(
            child: SingleChildScrollView(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    question.questionText,
                    style: AppTextStyles.title,
                  ),
                  const SizedBox(height: 24),
                  // Options
                  ...question.options.asMap().entries.map((entry) {
                    final index = entry.key;
                    final option = entry.value;
                    final isSelected = selectedAnswer == index;
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 12),
                      child: RadioListTile<int>(
                        title: Text(option),
                        value: index,
                        groupValue: selectedAnswer,
                        onChanged: (value) {
                          if (value != null) {
                            _selectAnswer(question.id, value);
                          }
                        },
                        selected: isSelected,
                        activeColor: AppColors.vikings,
                      ),
                    );
                  }),
                ],
              ),
            ),
          ),
          // Navigation buttons
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                ElevatedButton(
                  onPressed: _currentQuestionIndex > 0 ? _previousQuestion : null,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.header,
                  ),
                  child: const Text('Previous', style: TextStyle(color: Colors.white)),
                ),
                if (!isLastQuestion)
                  ElevatedButton(
                    onPressed: _nextQuestion,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.vikings,
                    ),
                    child: const Text('Next', style: TextStyle(color: Colors.white)),
                  )
                else
                  ElevatedButton(
                    onPressed: allQuestionsAnswered
                        ? () {
                            final dataStore = Provider.of<DataStore>(context, listen: false);
                            _submitQuiz(context, dataStore);
                          }
                        : null,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.green,
                      padding: const EdgeInsets.symmetric(horizontal: 32),
                    ),
                    child: const Text(
                      'Submit',
                      style: TextStyle(color: Colors.white, fontSize: 16),
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

