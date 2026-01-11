# PowerShell script to build and start Electron app
Write-Host "Building Flutter web app..." -ForegroundColor Green
flutter build web

if ($LASTEXITCODE -eq 0) {
    Write-Host "Starting Electron app..." -ForegroundColor Green
    npm start
} else {
    Write-Host "Flutter build failed. Please fix errors and try again." -ForegroundColor Red
    exit 1
}

