import 'package:flutter/material.dart';
import '../models/video_resource.dart';
import '../utils/constants.dart';

class VideoCard extends StatelessWidget {
  final VideoResource video;
  final VoidCallback onTap;

  const VideoCard({
    super.key,
    required this.video,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 2,
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: AppColors.fusion360,
          child: const Icon(Icons.play_circle, color: Colors.white),
        ),
        title: Text(
          video.title,
          style: AppTextStyles.cardTitle,
        ),
        subtitle: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              video.description,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
            const SizedBox(height: 4),
            Text('Age Group: ${video.ageGroup}+'),
          ],
        ),
        trailing: const Icon(Icons.arrow_forward_ios, size: 16),
        onTap: onTap,
      ),
    );
  }
}

