@echo off
echo Building Nuxt App...
call npm run build

echo Removing sharp-win32 from output package.json...
python remove-sharp.py

echo Syncing node_modules...
if exist .output\server\node_modules rmdir /s /q .output\server\node_modules
xcopy /e /i /q node_modules .output\server\node_modules

echo Backing up package-lock.json...
if exist package-lock.json move package-lock.json package-lock.json.bak

echo Deploying to Firebase...
call firebase deploy

echo Restoring package-lock.json...
if exist package-lock.json.bak move package-lock.json.bak package-lock.json

echo Deploy Complete!
