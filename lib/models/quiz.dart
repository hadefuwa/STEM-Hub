import 'question.dart';

class Quiz {
  int id;
  String title;
  String category;
  int ageGroup;
  List<Question> questions;

  Quiz({
    required this.id,
    required this.title,
    required this.category,
    required this.ageGroup,
    required this.questions,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'category': category,
        'ageGroup': ageGroup,
        'questions': questions.map((q) => q.toJson()).toList(),
      };

  factory Quiz.fromJson(Map<String, dynamic> json) => Quiz(
        id: json['id'] as int,
        title: json['title'] as String,
        category: json['category'] as String,
        ageGroup: json['ageGroup'] as int,
        questions: (json['questions'] as List<dynamic>)
            .map((q) => Question.fromJson(q as Map<String, dynamic>))
            .toList(),
      );
}

