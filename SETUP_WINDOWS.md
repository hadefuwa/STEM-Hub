# Setting Up Windows Desktop Support

Since this project was created manually, you need to add Windows desktop support. Follow these steps:

## Quick Setup

1. **Enable Windows Desktop Support** (if not already enabled):
   ```bash
   flutter config --enable-windows-desktop
   ```

2. **Add Windows Platform to Your Project**:
   ```bash
   flutter create --platforms=windows .
   ```
   
   This will add all necessary Windows files to your project.

3. **Verify Setup**:
   ```bash
   flutter doctor
   ```
   
   Make sure Windows development shows no errors.

4. **Run the App**:
   ```bash
   flutter run -d windows
   ```

## Requirements

- **Visual Studio 2022** with "Desktop development with C++" workload
- **Windows 10 SDK** (latest version)
- **CMake** (usually comes with Visual Studio)

## If You Get Errors

If `flutter create` gives you errors about existing files, you can:

1. **Remove the empty platform folders** (if they exist):
   ```bash
   # On Windows PowerShell
   Remove-Item -Recurse -Force windows, macos, linux -ErrorAction SilentlyContinue
   ```

2. **Then run**:
   ```bash
   flutter create --platforms=windows,macos,linux .
   ```

## Alternative: Manual Setup

If `flutter create` doesn't work, you can manually copy the Windows platform files from a fresh Flutter project:

1. Create a temporary Flutter project:
   ```bash
   flutter create temp_project
   ```

2. Copy the `windows` folder from `temp_project` to your project

3. Delete the temporary project

## Notes

- The `flutter create` command is the recommended way as it ensures all files are correctly configured
- After running `flutter create`, you may need to run `flutter pub get` again
- The Windows build will be in `build/windows/` after building

