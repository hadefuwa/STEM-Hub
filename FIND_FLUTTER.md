# Finding Flutter on Your System

Flutter is not currently in your PATH. Here's how to find and use it:

## Option 1: Find Flutter Installation

Flutter is usually installed in one of these locations:
- `%LOCALAPPDATA%\flutter` (C:\Users\YourName\AppData\Local\flutter)
- `C:\flutter`
- `C:\src\flutter`
- `%USERPROFILE%\flutter` (C:\Users\YourName\flutter)

## Option 2: Use the Setup Script

I've created a script that will try to find Flutter automatically:

```powershell
.\setup_and_run.ps1
```

This script will:
1. Try to find Flutter in common locations
2. Set up Windows platform support
3. Run the app

## Option 3: Add Flutter to PATH

1. **Find Flutter installation:**
   - Check the common locations above
   - Or search for `flutter.bat` on your system

2. **Add to PATH:**
   - Open System Properties → Advanced → Environment Variables
   - Edit the "Path" variable
   - Add the path to Flutter's `bin` folder (e.g., `C:\flutter\bin`)
   - Restart your terminal

3. **Verify:**
   ```powershell
   flutter --version
   ```

## Option 4: Use Full Path

If you know where Flutter is installed, use the full path:

```powershell
# Example if Flutter is at C:\flutter
C:\flutter\bin\flutter.bat create --platforms=windows .
C:\flutter\bin\flutter.bat run -d windows
```

## Quick Check

Run this in PowerShell to search for Flutter:

```powershell
Get-ChildItem -Path C:\ -Filter flutter.bat -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1 FullName
```

This will show you where Flutter is installed (if it exists).

