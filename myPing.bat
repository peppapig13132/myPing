@echo off
start wt.exe -w 0 cmd /k "cd /d %~dp0 && npm start"
