import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:go_router/go_router.dart';
import '../data/data_store.dart';
import '../utils/paths.dart';
import '../widgets/video_card.dart';
import '../widgets/app_scaffold.dart';

class VideoListScreen extends StatelessWidget {
  final String category;
  final int ageGroup;

  const VideoListScreen({
    super.key,
    required this.category,
    required this.ageGroup,
  });

  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final videos = dataStore.getVideoResources(
      category: category,
      ageGroup: ageGroup,
    );

    return AppScaffold(
      title: '$category Videos',
      body: videos.isEmpty
          ? Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.video_library_outlined, size: 64, color: Colors.grey),
                  const SizedBox(height: 16),
                  Text(
                    'No videos available for $category (Age $ageGroup+)',
                    style: const TextStyle(fontSize: 16, color: Colors.grey),
                    textAlign: TextAlign.center,
                  ),
                ],
              ),
            )
          : ListView.builder(
              itemCount: videos.length,
              itemBuilder: (context, index) {
                final video = videos[index];
                return VideoCard(
                  video: video,
                  onTap: () => context.go(
                    '${AppPaths.video}?id=${video.id}',
                  ),
                );
              },
            ),
    );
  }
}

