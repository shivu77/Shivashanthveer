# GitHub Pages Deployment Guide

## ✅ What's Been Done

1. ✅ Configured Next.js for static export
2. ✅ Set up basePath for GitHub Pages (`/Shivashanthveer`)
3. ✅ Updated contact form for static export (uses mailto links)
4. ✅ Created GitHub Actions workflow for automatic deployment
5. ✅ Fixed all build errors
6. ✅ Pushed configuration to GitHub

## 🚀 Enable GitHub Pages (Simple Method)

### Method 1: Using GitHub Pages Settings (Recommended)

1. Go to your repository: https://github.com/shivu77/Shivashanthveer
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **gh-pages** 
   - **Folder**: Select **/ (root)**
5. Click **Save**

### Method 2: If "Pages" option is not visible

1. Go to: https://github.com/shivu77/Shivashanthveer/actions
2. Wait for the workflow to run (it will run automatically on push)
3. After the workflow completes successfully, go to Settings → Pages
4. The "Pages" option should now be available

## 📝 What Happens Next

1. **First Deployment**: The GitHub Actions workflow will run automatically
   - Go to the **Actions** tab to see the progress
   - First deployment takes 2-3 minutes

2. **Automatic Updates**: Every push to `main` branch will:
   - Build the portfolio
   - Deploy to `gh-pages` branch
   - Update your live site

## 🌐 Your Portfolio URL

Once deployed, your portfolio will be available at:
**https://shivu77.github.io/Shivashanthveer/**

## 🔍 Verify Deployment

1. Check the **Actions** tab for workflow status
2. Wait for the workflow to complete (green checkmark)
3. Visit your GitHub Pages URL
4. If you see a 404, wait a few minutes for DNS propagation

## 📧 Contact Form

The contact form uses mailto links (API routes don't work with static export). When users submit the form, it opens their email client with a pre-filled message.

## 🐛 Troubleshooting

### If Pages option doesn't appear:
1. Make sure the repository is public (or you have GitHub Pro)
2. Wait for the first workflow run to complete
3. Try refreshing the Settings page

### If you see 404:
1. Check that the `gh-pages` branch was created
2. Verify the branch is selected in Pages settings
3. Wait 5-10 minutes for DNS propagation

### If build fails:
1. Check the Actions tab for error messages
2. Verify all dependencies are in `package.json`
3. Make sure `next.config.mjs` is correctly configured

## 🎉 Success!

Once everything is set up, your portfolio will automatically deploy on every push to the `main` branch!
