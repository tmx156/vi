#!/bin/bash

echo "========================================"
echo "VIP Photo Studio - Quick Deploy Script"
echo "========================================"
echo

echo "Checking if Node.js is installed..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "Checking if Vercel CLI is installed..."
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo
echo "Installing dependencies..."
npm install

echo
echo "Building project..."
npm run build

echo
echo "Deploying to Vercel..."
vercel --prod

echo
echo "========================================"
echo "Deployment complete!"
echo "========================================"
