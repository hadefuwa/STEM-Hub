class Year {
  final String id; // 'nursery', 'reception', 'year1', etc.
  final String name; // 'Nursery', 'Reception', 'Year 1', etc.
  final int order; // For sorting

  const Year({
    required this.id,
    required this.name,
    required this.order,
  });

  static const List<Year> allYears = [
    Year(id: 'nursery', name: 'Nursery', order: 0),
    Year(id: 'reception', name: 'Reception', order: 1),
    Year(id: 'year1', name: 'Year 1', order: 2),
    Year(id: 'year2', name: 'Year 2', order: 3),
    Year(id: 'year3', name: 'Year 3', order: 4),
    Year(id: 'year4', name: 'Year 4', order: 5),
    Year(id: 'year5', name: 'Year 5', order: 6),
    Year(id: 'year6', name: 'Year 6', order: 7),
  ];

  static Year? getById(String id) {
    try {
      return allYears.firstWhere((y) => y.id == id);
    } catch (e) {
      return null;
    }
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'name': name,
        'order': order,
      };

  factory Year.fromJson(Map<String, dynamic> json) => Year(
        id: json['id'] as String,
        name: json['name'] as String,
        order: json['order'] as int,
      );
}

