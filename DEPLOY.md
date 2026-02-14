# 🚀 BarberPro Website Deployment Guide

Complete guide to deploy the BarberPro website on Vercel.

---

## 📋 Prerequisites

- Node.js installed (v18+)
- GitHub account
- Vercel account (free)

---

## 🎯 Quick Deploy (Recommended)

### Option 1: One-Click Deploy

1. Push your code to GitHub:
   ```bash
   cd barber-pro-website
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Go to [vercel.com](https://vercel.com) and sign up with GitHub

3. Click **"New Project"** → **"Import Project"**

4. Select your GitHub repository

5. Click **"Deploy"** - Done! 🎉

---

## 📦 Manual Setup (Step by Step)

### Step 1: Install Dependencies

```bash
cd barber-pro-website
npm install
```

### Step 2: Test Locally

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to preview.

### Step 3: Build for Production

```bash
npm run build
```

This creates a `out` folder with static files.

---

## 🔧 Configuration

### The EXE File

The download button links to `/BarberPro_1.0.0_x64-setup.exe`.

Make sure the `public/` folder contains the installer, or update the link in `src/app/page.tsx`:

```tsx
href="/your-exe-file.exe"
```

### Add to Public Folder

Create a `public` folder and add your installer:

```bash
mkdir public
cp /path/to/BarberPro_1.0.0_x64-setup.exe public/
```

---

## 🌐 Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → **Settings**

2. Click **"Domains"**

3. Add your domain (e.g., `barberpro.com`)

4. Update DNS records as instructed

---

## 🔄 Updating the Website

1. Make changes to the code
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update features"
   git push
   ```
3. Vercel auto-deploys! 🎉

---

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Connected to Vercel
- [ ] Added EXE file to public folder
- [ ] Tested download link
- [ ] (Optional) Added custom domain

---

## 🆘 Troubleshooting

### Download Link Not Working?
- Make sure the EXE is in the `public/` folder
- Check the file name matches exactly in the href

### Build Failed?
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Want to use EXE from external URL?
Update `src/app/page.tsx`:
```tsx
href="https://your-cdn.com/BarberPro_1.0.0_x64-setup.exe"
```

---

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs

---

**Your website will be live at:**
```
https://your-project.vercel.app
```

Good luck! 🚀
