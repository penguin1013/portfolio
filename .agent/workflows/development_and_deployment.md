---
description: How to modify code, test locally, and deploy to GitHub Pages
---

# Development and Deployment Workflow

This workflow describes the process for updating your portfolio website.

## Summary
- **Commit** = Saves source code to GitHub (Backup). Does **not** update the website.
- **Deploy** = Builds the site and updates the live URL. **Required** to see changes online.

## 1. Local Development (Coding & Testing)
First, make changes and verify them on your own computer.

1. **Start the local server:**
   Open a terminal in your project folder (`d:\portfolio`) and run:
   ```powershell
   npm run dev
   ```
2. **View in Browser:**
   Open the link shown in the terminal (usually `http://localhost:5173/portfolio/`).
3. **Edit Code:**
   Modify your files (`.jsx`, `.css`, etc.). The browser will update automatically.

## 2. Deploying to the Live Website
**Crucial Step:** To make your changes visible to others on the internet, you must deploy.

1. **Stop the local server** (if running) by pressing `Ctrl + C` in the terminal.
2. **Run the deploy command:**
   ```powershell
   npm run deploy
   ```
   *This command automatically:*
   *   Builds the project (creates/updates `dist` folder).
   *   Publishes the `dist` folder to the `gh-pages` branch.

3. **Verify:**
   Wait a minute or two, then visit: [https://penguin1013.github.io/portfolio](https://penguin1013.github.io/portfolio)

## 3. Saving Source Code (Git Commit)
This saves your React source code to the `main` branch. This is good practice for version control.

1. `git add .`
2. `git commit -m "Describe your changes here"`
3. `git push`
