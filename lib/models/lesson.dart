class Lesson {
  int id;
  String yearId; // 'nursery', 'reception', 'year1', etc.
  String subjectId; // 'maths', 'english', etc.
  String? categoryId; // Optional category within subject (e.g., 'fusion360')
  int lessonNumber; // 1-99
  String title;
  String content;
  String emoji; // Icon/emoji for the lesson
  int? quizId; // Optional quiz/test/challenge at the end
  String? assessmentType; // 'quiz', 'test', 'challenge', or null

  Lesson({
    required this.id,
    required this.yearId,
    required this.subjectId,
    this.categoryId,
    required this.lessonNumber,
    required this.title,
    required this.content,
    required this.emoji,
    this.quizId,
    this.assessmentType,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'yearId': yearId,
        'subjectId': subjectId,
        'categoryId': categoryId,
        'lessonNumber': lessonNumber,
        'title': title,
        'content': content,
        'emoji': emoji,
        'quizId': quizId,
        'assessmentType': assessmentType,
      };

  factory Lesson.fromJson(Map<String, dynamic> json) => Lesson(
        id: json['id'] as int,
        yearId: json['yearId'] as String,
        subjectId: json['subjectId'] as String,
        categoryId: json['categoryId'] as String?,
        lessonNumber: json['lessonNumber'] as int,
        title: json['title'] as String,
        content: json['content'] as String,
        emoji: json['emoji'] as String? ?? '📚',
        quizId: json['quizId'] as int?,
        assessmentType: json['assessmentType'] as String?,
      );
}

