@echo off
echo ========================================
echo VIP Photo Studio - Quick Deploy Script
echo ========================================
echo.

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Checking if Vercel CLI is installed...
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
)

echo.
echo Installing dependencies...
npm install

echo.
echo Building project...
npm run build

echo.
echo Deploying to Vercel...
vercel --prod

echo.
echo ========================================
echo Deployment complete!
echo ========================================
pause
