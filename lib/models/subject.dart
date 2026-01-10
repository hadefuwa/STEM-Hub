class Subject {
  final String id; // 'maths', 'english', 'science', etc.
  final String name; // 'Maths', 'English', 'Science', etc.
  final String emoji; // For UI display
  final int order; // For sorting

  const Subject({
    required this.id,
    required this.name,
    required this.emoji,
    required this.order,
  });

  static const List<Subject> allSubjects = [
    Subject(id: 'maths', name: 'Maths', emoji: '🔢', order: 0),
    Subject(id: 'english', name: 'English', emoji: '📚', order: 1),
    Subject(id: 'history', name: 'History', emoji: '📜', order: 2),
    Subject(id: 'technology', name: 'Technology', emoji: '💻', order: 3),
  ];

  static Subject? getById(String id) {
    try {
      return allSubjects.firstWhere((s) => s.id == id);
    } catch (e) {
      return null;
    }
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'emoji': emoji,
        'order': order,
      };

  factory Subject.fromJson(Map<String, dynamic> json) => Subject(
        id: json['id'] as String,
        name: json['name'] as String,
        emoji: json['emoji'] as String,
        order: json['order'] as int,
      );
}

