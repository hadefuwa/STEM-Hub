# Quick Start Guide

## Fix Windows Desktop Support

Your project needs Windows platform files. Run this command in your terminal:

```bash
flutter create --platforms=windows,macos,linux .
```

This will add all necessary platform files for Windows, macOS, and Linux.

## Update Dependencies

I've updated `youtube_player_flutter` to version 9.1.3. Run:

```bash
flutter pub get
```

## Run the App

After adding platform support:

```bash
flutter run -d windows
```

## Troubleshooting

If `flutter create` complains about existing files:

1. Delete the empty platform folders:
   ```powershell
   Remove-Item -Recurse -Force windows, macos, linux -ErrorAction SilentlyContinue
   ```

2. Then run:
   ```bash
   flutter create --platforms=windows,macos,linux .
   ```

## Requirements

- Visual Studio 2022 with "Desktop development with C++" workload
- Windows 10 SDK (latest)
- CMake (comes with Visual Studio)

Check your setup with:
```bash
flutter doctor
```

