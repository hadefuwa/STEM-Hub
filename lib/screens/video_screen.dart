import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';
import '../data/data_store.dart';
import '../utils/constants.dart';
import '../widgets/app_scaffold.dart';

class VideoScreen extends StatelessWidget {
  final int id;

  const VideoScreen({
    super.key,
    required this.id,
  });

  Future<void> _launchYouTubeVideo(String videoId) async {
    final url = Uri.parse('https://www.youtube.com/watch?v=$videoId');
    if (await canLaunchUrl(url)) {
      await launchUrl(url, mode: LaunchMode.externalApplication);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final video = dataStore.getVideoResource(id);

    if (video == null) {
      return AppScaffold(
        title: 'Video Not Found',
        body: const Center(
          child: Text('Video not found'),
        ),
      );
    }

    final isValidVideoId = video.youtubeVideoId.isNotEmpty && 
                          video.youtubeVideoId != 'example2' && 
                          video.youtubeVideoId != 'example3';

    return AppScaffold(
      title: video.title,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            // Video placeholder/thumbnail
            Container(
              height: 300,
              margin: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.black87,
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: AppColors.fusion360, width: 2),
              ),
              child: isValidVideoId
                  ? Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(
                          Icons.play_circle_filled,
                          size: 80,
                          color: AppColors.fusion360,
                        ),
                        const SizedBox(height: 16),
                        ElevatedButton.icon(
                          onPressed: () => _launchYouTubeVideo(video.youtubeVideoId),
                          icon: const Icon(Icons.open_in_new),
                          label: const Text('Watch on YouTube'),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppColors.fusion360,
                            padding: const EdgeInsets.symmetric(
                              horizontal: 24,
                              vertical: 16,
                            ),
                          ),
                        ),
                        const SizedBox(height: 8),
                        const Text(
                          'Click to open video in your browser',
                          style: TextStyle(color: Colors.white70, fontSize: 12),
                        ),
                      ],
                    )
                  : const Center(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Icon(Icons.video_library, size: 64, color: Colors.grey),
                          SizedBox(height: 16),
                          Text(
                            'Video ID not configured',
                            style: TextStyle(color: Colors.grey),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Please update the video ID in the data',
                            style: TextStyle(color: Colors.grey, fontSize: 12),
                          ),
                        ],
                      ),
                    ),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    video.title,
                    style: AppTextStyles.title,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Age Group: ${video.ageGroup}+',
                    style: AppTextStyles.subtitle,
                  ),
                  const SizedBox(height: 16),
                  Text(
                    video.description,
                    style: AppTextStyles.body,
                  ),
                  if (isValidVideoId) ...[
                    const SizedBox(height: 24),
                    SizedBox(
                      width: double.infinity,
                      child: ElevatedButton.icon(
                        onPressed: () => _launchYouTubeVideo(video.youtubeVideoId),
                        icon: const Icon(Icons.play_arrow),
                        label: const Text('Open Video on YouTube'),
                        style: ElevatedButton.styleFrom(
                          backgroundColor: AppColors.fusion360,
                          padding: const EdgeInsets.symmetric(vertical: 16),
                        ),
                      ),
                    ),
                  ],
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
