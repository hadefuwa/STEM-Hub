# Flutter Migration Quick Reference

Quick code examples for common migration tasks.

## 1. Model Conversion Examples

### C# → Dart: Student Model

**C#:**
```csharp
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int Age { get; set; }
    public DateTime CreatedAt { get; set; }
}
```

**Dart:**
```dart
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
}
```

## 2. Data Storage Examples

### JSON File Storage

**C#:**
```csharp
var appDataFolder = Path.Combine(
    Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), 
    "HomeschoolHub");
var dataPath = Path.Combine(appDataFolder, "data.json");
var json = File.ReadAllText(dataPath);
var data = JsonSerializer.Deserialize<AppData>(json);
```

**Dart:**
```dart
import 'package:path_provider/path_provider.dart';
import 'dart:io';
import 'dart:convert';

Future<String> getDataPath() async {
  final directory = await getApplicationSupportDirectory();
  return path.join(directory.path, 'data.json');
}

Future<AppData> loadData() async {
  final dataPath = await getDataPath();
  final file = File(dataPath);
  
  if (await file.exists()) {
    final jsonString = await file.readAsString();
    final json = jsonDecode(jsonString) as Map<String, dynamic>;
    return AppData.fromJson(json);
  } else {
    return AppData.defaultData();
  }
}

Future<void> saveData(AppData data) async {
  final dataPath = await getDataPath();
  final file = File(dataPath);
  final jsonString = jsonEncode(data.toJson());
  await file.writeAsString(jsonString);
}
```

## 3. UI Component Examples

### Category Card Button

**C# XAML:**
```xml
<Button Grid.Row="0" Grid.Column="0" 
        x:Name="MathsButton"
        Click="MathsButton_Click"
        Margin="5" 
        Padding="20"
        Background="#FF6B9E"
        CornerRadius="10">
    <StackPanel>
        <TextBlock Text="🔢" FontSize="48" HorizontalAlignment="Center"/>
        <TextBlock Text="Maths" FontSize="20" FontWeight="Bold" 
                   HorizontalAlignment="Center" Margin="0,10,0,0"/>
    </StackPanel>
</Button>
```

**Dart Flutter:**
```dart
ElevatedButton(
  onPressed: () => _navigateToMaths(),
  style: ElevatedButton.styleFrom(
    backgroundColor: const Color(0xFFFF6B9E),
    padding: const EdgeInsets.all(20),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(10),
    ),
  ),
  child: Column(
    mainAxisSize: MainAxisSize.min,
    children: [
      const Text('🔢', style: TextStyle(fontSize: 48)),
      const SizedBox(height: 10),
      const Text(
        'Maths',
        style: TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  ),
)
```

## 4. Navigation Examples

### C# Navigation
```csharp
var parameters = new Dictionary<string, object>
{
    { "Category", "Maths" },
    { "AgeGroup", 4 },
    { "StudentId", _currentStudent.Id }
};
this.Frame.Navigate(typeof(LessonViewPage), parameters);
```

### Flutter Navigation (GoRouter)
```dart
// Setup
final router = GoRouter(
  routes: [
    GoRoute(
      path: '/lessons',
      builder: (context, state) {
        final category = state.uri.queryParameters['category']!;
        final ageGroup = int.parse(state.uri.queryParameters['ageGroup']!);
        final studentId = int.parse(state.uri.queryParameters['studentId']!);
        return LessonViewScreen(
          category: category,
          ageGroup: ageGroup,
          studentId: studentId,
        );
      },
    ),
  ],
);

// Navigation
context.go('/lessons?category=Maths&ageGroup=4&studentId=${student.id}');
```

## 5. YouTube Video Embedding

### C# WebView2
```csharp
var webView = new Microsoft.UI.Xaml.Controls.WebView2();
await webView.EnsureCoreWebView2Async();
var embedHtml = $@"<iframe src=""https://www.youtube.com/embed/{videoId}""...";
webView.NavigateToString(embedHtml);
```

### Flutter (youtube_player_flutter)
```dart
import 'package:youtube_player_flutter/youtube_player_flutter.dart';

YoutubePlayer(
  controller: YoutubePlayerController(
    initialVideoId: videoId,
    flags: const YoutubePlayerFlags(
      autoPlay: false,
      mute: false,
    ),
  ),
  showVideoProgressIndicator: true,
)
```

### Flutter (webview_flutter - Alternative)
```dart
import 'package:webview_flutter/webview_flutter.dart';

WebView(
  initialUrl: 'https://www.youtube.com/embed/$videoId',
  javascriptMode: JavascriptMode.unrestricted,
)
```

## 6. State Management (Provider)

### Setup Provider
```dart
// main.dart
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => DataStore()..initialize(),
      child: MyApp(),
    ),
  );
}

// data_store.dart
class DataStore extends ChangeNotifier {
  AppData _data = AppData.defaultData();
  Student? _currentStudent;

  Student? get currentStudent => _currentStudent;
  List<Student> get students => _data.students;

  Future<void> initialize() async {
    _data = await loadData();
    if (_data.students.isNotEmpty) {
      _currentStudent = _data.students.first;
    }
    notifyListeners();
  }

  void setCurrentStudent(Student student) {
    _currentStudent = student;
    notifyListeners();
  }
}

// Usage in widget
class MainScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final dataStore = Provider.of<DataStore>(context);
    final student = dataStore.currentStudent;
    
    return Text(student != null 
      ? 'Hello, ${student.name}!' 
      : 'Please select a student');
  }
}
```

## 7. List Display Examples

### C# ListView
```csharp
<ListView x:Name="LessonsListView">
    <ListView.ItemTemplate>
        <DataTemplate>
            <Border Background="White" Padding="10" Margin="5">
                <TextBlock Text="{Binding Title}" FontSize="18"/>
            </Border>
        </DataTemplate>
    </ListView.ItemTemplate>
</ListView>
```

### Flutter ListView
```dart
ListView.builder(
  itemCount: lessons.length,
  itemBuilder: (context, index) {
    final lesson = lessons[index];
    return Card(
      margin: const EdgeInsets.all(5),
      child: ListTile(
        title: Text(lesson.title, style: const TextStyle(fontSize: 18)),
        onTap: () => _navigateToLesson(lesson),
      ),
    );
  },
)
```

## 8. Form Input Examples

### C# TextBox
```csharp
<TextBox x:Name="StudentNameTextBox" 
         PlaceholderText="Enter student name"/>
```

### Flutter TextField
```dart
TextField(
  decoration: const InputDecoration(
    labelText: 'Enter student name',
    border: OutlineInputBorder(),
  ),
  controller: _nameController,
)
```

## 9. Color Constants

### C# (XAML)
```xml
Background="#FF6B9E"
```

### Dart
```dart
// Define in constants.dart
class AppColors {
  static const maths = Color(0xFFFF6B9E);
  static const vikings = Color(0xFF4ECDC4);
  static const arduino = Color(0xFF95E1D3);
  static const fusion360 = Color(0xFFF38181);
  static const progress = Color(0xFFFFD93D);
  static const header = Color(0xFF4A90E2);
}

// Usage
Container(color: AppColors.maths)
```

## 10. Async Operations

### C# async/await
```csharp
private async void OnNavigatedTo(...)
{
    await LoadYouTubeVideo(_video.YouTubeVideoId);
}
```

### Dart async/await
```dart
@override
void initState() {
  super.initState();
  _loadVideo();
}

Future<void> _loadVideo() async {
  await youtubePlayerController.initialize();
  setState(() {});
}
```

## 11. Package Equivalents

| C# / WinUI 3 | Flutter Package |
|-------------|----------------|
| SQLite (Microsoft.Data.Sqlite) | `sqflite` |
| JSON (System.Text.Json) | `dart:convert` (built-in) |
| File I/O (System.IO) | `dart:io` (built-in) |
| Path handling | `path` package |
| Local storage paths | `path_provider` |
| WebView2 | `youtube_player_flutter` or `webview_flutter` |
| Navigation | `go_router` or built-in `Navigator` |
| State management | `provider` or `riverpod` |

## 12. Common Patterns

### Conditional Rendering

**C#:**
```csharp
if (_currentStudent == null)
{
    ShowStudentRequiredMessage();
    return;
}
```

**Dart:**
```dart
if (currentStudent == null) {
  return const Text('Please select a student');
}
// Or in widget tree:
currentStudent == null 
  ? const Text('Please select a student')
  : LessonList(student: currentStudent)
```

### Error Handling

**C#:**
```csharp
try
{
    await webView.EnsureCoreWebView2Async();
}
catch (Exception ex)
{
    // Fallback
}
```

**Dart:**
```dart
try {
  await youtubePlayerController.initialize();
} catch (e) {
  // Fallback
  print('Error: $e');
}
```

---

## Quick Start Commands

```bash
# Create Flutter project
flutter create homeschool_hub
cd homeschool_hub

# Add dependencies
flutter pub add path_provider
flutter pub add go_router
flutter pub add provider
flutter pub add youtube_player_flutter

# Run on Windows
flutter run -d windows

# Build for Windows
flutter build windows --release
```

---

This reference should help you quickly convert C# code to Flutter/Dart equivalents.

