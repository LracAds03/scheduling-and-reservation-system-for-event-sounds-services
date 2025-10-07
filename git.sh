#!/bin/bash
# -----------------------------------------
# Git Auto Commit + Push Script with Message
# -----------------------------------------

# Go to script directory (project root)
cd "$(dirname "$0")"

# Stage all changes
git add .

# Ask for a custom commit message
echo "📝 Enter your commit message:"
read commit_message

# Add a timestamp
timestamp=$(date +"%Y-%m-%d %H:%M:%S")

# Combine message + timestamp
full_message="💾 $commit_message (committed on $timestamp)"

# Commit changes
git commit -m "$full_message"

# Push to main branch
git push origin main

# Done message
echo "✅ Successfully pushed: '$commit_message' at $timestamp!"
