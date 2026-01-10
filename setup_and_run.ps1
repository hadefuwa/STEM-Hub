# PowerShell script to set up and run the Flutter app
# This script tries to find Flutter and set up Windows platform support

Write-Host "Looking for Flutter..." -ForegroundColor Yellow

# Common Flutter installation paths
$flutterPaths = @(
    "$env:LOCALAPPDATA\flutter\bin\flutter.bat",
    "$env:USERPROFILE\flutter\bin\flutter.bat",
    "C:\flutter\bin\flutter.bat",
    "C:\src\flutter\bin\flutter.bat",
    "$env:ProgramFiles\flutter\bin\flutter.bat"
)

$flutterFound = $false
$flutterPath = $null

# Check if flutter is in PATH
try {
    $null = Get-Command flutter -ErrorAction Stop
    $flutterPath = "flutter"
    $flutterFound = $true
    Write-Host "Flutter found in PATH!" -ForegroundColor Green
} catch {
    Write-Host "Flutter not in PATH, checking common locations..." -ForegroundColor Yellow
    
    # Check common installation paths
    foreach ($path in $flutterPaths) {
        if (Test-Path $path) {
            $flutterPath = $path
            $flutterFound = $true
            Write-Host "Found Flutter at: $path" -ForegroundColor Green
            break
        }
    }
}

if (-not $flutterFound) {
    Write-Host "`nFlutter not found!" -ForegroundColor Red
    Write-Host "Please either:" -ForegroundColor Yellow
    Write-Host "1. Add Flutter to your PATH, or" -ForegroundColor Yellow
    Write-Host "2. Install Flutter from https://flutter.dev/docs/get-started/install/windows" -ForegroundColor Yellow
    Write-Host "`nTo add Flutter to PATH:" -ForegroundColor Cyan
    Write-Host "1. Find where Flutter is installed (usually C:\src\flutter or %LOCALAPPDATA%\flutter)" -ForegroundColor Cyan
    Write-Host "2. Add the 'bin' folder to your system PATH" -ForegroundColor Cyan
    Write-Host "3. Restart your terminal" -ForegroundColor Cyan
    exit 1
}

Write-Host "`nSetting up Windows platform support..." -ForegroundColor Yellow

# Remove existing windows folder if it exists
if (Test-Path "windows") {
    Write-Host "Removing existing windows folder..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force windows -ErrorAction SilentlyContinue
}

# Run flutter create
Write-Host "Running: $flutterPath create --platforms=windows ." -ForegroundColor Cyan
& $flutterPath create --platforms=windows .

if ($LASTEXITCODE -ne 0) {
    Write-Host "`nError setting up Windows platform!" -ForegroundColor Red
    Write-Host "Exit code: $LASTEXITCODE" -ForegroundColor Red
    exit 1
}

Write-Host "`nWindows platform setup complete!" -ForegroundColor Green
Write-Host "`nRunning the app..." -ForegroundColor Yellow
Write-Host "Running: $flutterPath run -d windows" -ForegroundColor Cyan

& $flutterPath run -d windows

