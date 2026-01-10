class Lesson {
  int id;
  String yearId; // 'nursery', 'reception', 'year1', etc.
  String subjectId; // 'maths', 'english', etc.
  int lessonNumber; // 1-99
  String title;
  String content;
  int? quizId; // Optional quiz/test/challenge at the end
  String? assessmentType; // 'quiz', 'test', 'challenge', or null

  Lesson({
    required this.id,
    required this.yearId,
    required this.subjectId,
    required this.lessonNumber,
    required this.title,
    required this.content,
    this.quizId,
    this.assessmentType,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'yearId': yearId,
        'subjectId': subjectId,
        'lessonNumber': lessonNumber,
        'title': title,
        'content': content,
        'quizId': quizId,
        'assessmentType': assessmentType,
      };

  factory Lesson.fromJson(Map<String, dynamic> json) => Lesson(
        id: json['id'] as int,
        yearId: json['yearId'] as String,
        subjectId: json['subjectId'] as String,
        lessonNumber: json['lessonNumber'] as int,
        title: json['title'] as String,
        content: json['content'] as String,
        quizId: json['quizId'] as int?,
        assessmentType: json['assessmentType'] as String?,
      );
}

