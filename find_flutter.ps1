# Script to find Flutter installation
Write-Host "Searching for Flutter..." -ForegroundColor Yellow

$searchPaths = @(
    "$env:LOCALAPPDATA\flutter\bin\flutter.bat",
    "$env:USERPROFILE\flutter\bin\flutter.bat",
    "C:\flutter\bin\flutter.bat",
    "C:\src\flutter\bin\flutter.bat",
    "$env:ProgramFiles\flutter\bin\flutter.bat",
    "${env:ProgramFiles(x86)}\flutter\bin\flutter.bat"
)

$found = $false
foreach ($path in $searchPaths) {
    if (Test-Path $path) {
        Write-Host ""
        Write-Host "FOUND FLUTTER at: $path" -ForegroundColor Green
        Write-Host ""
        Write-Host "To use it, run:" -ForegroundColor Cyan
        Write-Host "  `"$path`" create --platforms=windows ." -ForegroundColor White
        Write-Host "  `"$path`" run -d windows" -ForegroundColor White
        $found = $true
        break
    }
}

if (-not $found) {
    Write-Host ""
    Write-Host "Flutter not found in common locations." -ForegroundColor Red
    Write-Host ""
    Write-Host "Trying to search entire C: drive (this may take a while)..." -ForegroundColor Yellow
    Write-Host "Press Ctrl+C to cancel, or wait..." -ForegroundColor Yellow
    
    try {
        $result = Get-ChildItem -Path C:\ -Filter flutter.bat -Recurse -ErrorAction SilentlyContinue -Depth 3 | Select-Object -First 1
        if ($result) {
            Write-Host ""
            Write-Host "FOUND FLUTTER at: $($result.FullName)" -ForegroundColor Green
            Write-Host ""
            Write-Host "To use it, run:" -ForegroundColor Cyan
            Write-Host "  `"$($result.FullName)`" create --platforms=windows ." -ForegroundColor White
            Write-Host "  `"$($result.FullName)`" run -d windows" -ForegroundColor White
        } else {
            Write-Host ""
            Write-Host "Flutter not found. Please install Flutter from:" -ForegroundColor Red
            Write-Host "  https://flutter.dev/docs/get-started/install/windows" -ForegroundColor Cyan
        }
    } catch {
        Write-Host "Search cancelled or error occurred." -ForegroundColor Yellow
    }
}
