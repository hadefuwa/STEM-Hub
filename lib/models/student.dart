class Student {
  int id;
  String name;
  int age;
  DateTime createdAt;

  Student({
    required this.id,
    required this.name,
    required this.age,
    required this.createdAt,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'age': age,
        'createdAt': createdAt.toIso8601String(),
      };

  factory Student.fromJson(Map<String, dynamic> json) => Student(
        id: json['id'] as int,
        name: json['name'] as String,
        age: json['age'] as int,
        createdAt: DateTime.parse(json['createdAt'] as String),
      );

  Student copyWith({
    int? id,
    String? name,
    int? age,
    DateTime? createdAt,
  }) {
    return Student(
      id: id ?? this.id,
      name: name ?? this.name,
      age: age ?? this.age,
      createdAt: createdAt ?? this.createdAt,
    );
  }
}

