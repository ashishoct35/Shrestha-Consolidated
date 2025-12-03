# GitHub CMS Setup Guide

## What is This?

This admin panel uses **GitHub as a database**. When you edit content:
1. Changes are committed directly to GitHub
2. Vercel automatically redeploys (~2 minutes)
3. Your website updates with new content

**No external services needed!** Everything is self-contained.

---

## Setup Steps (5 minutes)

### 1. Create GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens/new
2. Note: `shrestha-consolidated-cms`
3. Expiration: `No expiration` (or your preference)
4. Select scopes:
   - ✅ **repo** (check all sub-options)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

### 2. Set Up Local Environment

Create a `.env` file in the project root:

```bash
# Copy from .env.example
cp .env.example .env
```

Edit `.env` and add your values:

```env
# Change from default password!
VITE_ADMIN_PASSWORD=YourSecurePassword123

# Paste your GitHub token here
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx

# Your GitHub username
VITE_REPO_OWNER=ashishoct35

# Your repository name
VITE_REPO_NAME=Shrestha-Consolidated
```

### 3. Add to Vercel (for Production)

1. Go to your Vercel project settings
2. Click "Environment Variables"
3. Add these variables:
   - `VITE_ADMIN_PASSWORD` = Your password
   - `VITE_GITHUB_TOKEN` = Your GitHub token
   - `VITE_REPO_OWNER` = ashishoct35
   - `VITE_REPO_NAME` = Shrestha-Consolidated
4. Redeploy your site

### 4. Test Locally

```bash
npm run dev
```

- Visit: http://localhost:5173/admin/login
- Password: (what you set in .env)
- Try editing something and saving

---

## How to Use

### Accessing Admin Panel

**Local**: http://localhost:5173/admin/login
**Production**: https://yoursite.vercel.app/admin/login

### Login
- Password: Set in `.env` (`VITE_ADMIN_PASSWORD`)
- No username required

### Editing Content

1. Login to dashboard
2. Click tabs to edit different sections:
   - **Company Settings**: Logo, name, tagline, hero text
   - **Services**: Add/edit/delete services
   - **Portfolio**: Add/edit/delete portfolio items
   - **Contact**: Social media, phone, address, map

3. Make your changes
4. Click **"Save Changes"**
5. Changes commit to GitHub
6. **Wait ~2 minutes** for Vercel to redeploy
7. Your website is updated!

### Uploading Images

- Upload logo in Company Settings
- Images are stored in `public/` folder on GitHub
- Referenced as `/filename.jpg` in content

---

## For Each Client Website

When you build a new client website:

1. **Copy this entire project** as template
2. Create new GitHub repo for the client
3. Deploy to Vercel
4. **Create new GitHub token** for that repo
5. Set environment variables in Vercel
6. Give client the admin password

**Each client gets their own:**
- GitHub repository
- Vercel deployment  
- Admin panel
- GitHub token
- No shared services!

---

## Security Notes

- ⚠️ **Never commit `.env` to GitHub!** (already in `.gitignore`)
- 🔒 GitHub token has full repo access - keep it secret
- 🔐 Change default admin password
- 👤 Each client should have unique passwords

---

## Troubleshooting

### "Error saving changes"
- Check GitHub token is correct
- Token must have `repo` permission
- Token must not be expired

### "Error loading content"
- Check repo owner/name are correct
- Ensure `content.json` exists in `src/`

### Changes not appearing
- Vercel takes ~2 minutes to redeploy
- Check Vercel deployments tab
- Clear browser cache

---

## Cost

**$0/month** - Completely free!
- GitHub: Free
- Vercel: Free
- No database fees
- No storage fees

---

Ready to use! 🚀
