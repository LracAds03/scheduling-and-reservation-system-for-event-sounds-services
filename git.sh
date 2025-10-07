#!/bin/bash
# -----------------------------------------
# Auto Save + Git Push Script
# Saves all modified files, commits, and pushes
# -----------------------------------------

# Save all modified files in VS Code (if VS Code is running)
if command -v code &> /dev/null; then
  echo "💾 Saving all open files in VS Code..."
  code --save-all 2>/dev/null
fi

# Stage all changes
git add .

# Create a timestamp
timestamp=$(date +"%Y-%m-%d %H:%M:%S")

# Commit automatically
git commit -m "💾 Auto commit on $timestamp"

# Push to main branch
git push origin main

# Done!
echo "✅ Code auto-saved, committed, and pushed on $timestamp!"
