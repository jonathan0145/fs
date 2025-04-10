# Script para iniciar los servidores de backend y frontend

# Obtener la ruta actual
$currentPath = Get-Location

# Iniciar el servidor backend
Write-Host "Iniciando servidor backend..." -ForegroundColor Green
Start-Process -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd '$currentPath\backend'; npm start"

# Iniciar el servidor frontend
Write-Host "Iniciando servidor frontend..." -ForegroundColor Green
Start-Process -FilePath "powershell" -ArgumentList "-NoExit", "-Command", "cd '$currentPath\frontend'; npm start"

Write-Host "Servidores iniciados. Presiona cualquier tecla para salir..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 