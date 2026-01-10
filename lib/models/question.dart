class Question {
  int id;
  int quizId;
  String questionText;
  List<String> options;
  int correctAnswerIndex;

  Question({
    required this.id,
    required this.quizId,
    required this.questionText,
    required this.options,
    required this.correctAnswerIndex,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'quizId': quizId,
        'questionText': questionText,
        'options': options,
        'correctAnswerIndex': correctAnswerIndex,
      };

  factory Question.fromJson(Map<String, dynamic> json) => Question(
        id: json['id'] as int,
        quizId: json['quizId'] as int,
        questionText: json['questionText'] as String,
        options: (json['options'] as List<dynamic>).map((e) => e as String).toList(),
        correctAnswerIndex: json['correctAnswerIndex'] as int,
      );
}

