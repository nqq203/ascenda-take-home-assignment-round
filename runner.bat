@echo off
cd /d %~dp0
echo Running npm install...
call npm install
echo Running node application...
node src/index.js %1 %2
