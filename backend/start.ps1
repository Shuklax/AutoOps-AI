Write-Host "Starting AutoOps-AI..." -ForegroundColor Green
Set-Location -Path "app"
uvicorn main:app --reload --port 8000