#!/bin/bash
# -----------------------------------------
# Git Auto Commit + Push Script (No VS Code launch)
# -----------------------------------------

# Go to script directory (so it runs from project folder)
cd "$(dirname "$0")"

# Stage all changes
git add .

# Create a timestamp for the commit message
timestamp=$(date +"%Y-%m-%d %H:%M:%S")

# Commit automatically
git commit -m "💾 Auto commit on $timestamp"

# Push to main branch
git push origin main

# Done message
echo "✅ Auto-committed and pushed changes on $timestamp!"
