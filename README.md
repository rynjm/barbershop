# 🌐 BarberPro Website

Professional landing page for downloading BarberPro - Premium Barbershop Management System.

## 🚀 Quick Deploy to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/barberpro.git
git push -u origin main
```

### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"New Project"**
4. Import your GitHub repository
5. Click **"Deploy"**

That's it! 🎉

---

## 🛠️ Development

### Install
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

### Build
```bash
npm run build
```

The static files will be in the `out` folder.

---

## 📦 What's Included

- Beautiful dark theme landing page
- Features showcase
- Pricing section
- Download button for Windows installer
- Mobile responsive design
- EXE file auto-included in build

---

## 🌟 Customization

### Change the EXE file
Replace `public/BarberPro_1.0.0_x64-setup.exe` with your new installer.

### Update links
Edit `src/app/page.tsx` to change any text or links.

---

## 📄 Files

```
barber-pro-website/
├── public/
│   └── BarberPro_1.0.0_x64-setup.exe  ← Your installer
├── src/app/
│   ├── page.tsx      ← Main page
│   ├── layout.tsx    ← Layout
│   └── globals.css   ← Styles
├── out/              ← Built static files
├── DEPLOY.md         ← Deployment guide
└── package.json
```

---

## ✅ Your Website URL

After deploying:
```
https://your-project.vercel.app
```

---

**Built with Next.js + Tailwind CSS + Vercel** 🚀
