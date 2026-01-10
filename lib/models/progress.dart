class Progress {
  int id;
  int studentId;
  String activityType; // 'Lesson', 'Quiz', 'Test', 'Challenge'
  int activityId;
  int? score; // Score out of 100 (percentage)
  double? successPercentage; // Calculated success percentage
  bool isCompleted;
  DateTime? completedAt;
  String? yearId; // For filtering by year
  String? subjectId; // For filtering by subject
  int? lessonNumber; // For lesson-specific progress

  Progress({
    required this.id,
    required this.studentId,
    required this.activityType,
    required this.activityId,
    this.score,
    this.successPercentage,
    this.isCompleted = false,
    this.completedAt,
    this.yearId,
    this.subjectId,
    this.lessonNumber,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'studentId': studentId,
        'activityType': activityType,
        'activityId': activityId,
        'score': score,
        'successPercentage': successPercentage,
        'isCompleted': isCompleted,
        'completedAt': completedAt?.toIso8601String(),
        'yearId': yearId,
        'subjectId': subjectId,
        'lessonNumber': lessonNumber,
      };

  factory Progress.fromJson(Map<String, dynamic> json) => Progress(
        id: json['id'] as int,
        studentId: json['studentId'] as int,
        activityType: json['activityType'] as String,
        activityId: json['activityId'] as int,
        score: json['score'] as int?,
        successPercentage: json['successPercentage'] != null
            ? (json['successPercentage'] as num).toDouble()
            : null,
        isCompleted: json['isCompleted'] as bool? ?? false,
        completedAt: json['completedAt'] != null
            ? DateTime.parse(json['completedAt'] as String)
            : null,
        yearId: json['yearId'] as String?,
        subjectId: json['subjectId'] as String?,
        lessonNumber: json['lessonNumber'] as int?,
      );
}

