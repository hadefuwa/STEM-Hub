class VideoResource {
  int id;
  String title;
  String category;
  String youtubeVideoId;
  String description;
  int ageGroup;

  VideoResource({
    required this.id,
    required this.title,
    required this.category,
    required this.youtubeVideoId,
    required this.description,
    required this.ageGroup,
  });

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'category': category,
        'youtubeVideoId': youtubeVideoId,
        'description': description,
        'ageGroup': ageGroup,
      };

  factory VideoResource.fromJson(Map<String, dynamic> json) => VideoResource(
        id: json['id'] as int,
        title: json['title'] as String,
        category: json['category'] as String,
        youtubeVideoId: json['youtubeVideoId'] as String,
        description: json['description'] as String,
        ageGroup: json['ageGroup'] as int,
      );
}

