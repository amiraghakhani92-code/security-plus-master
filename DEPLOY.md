# 🚀 راهنمای انتشار | Deployment Guide

<div dir="rtl">

## فارسی — انتشار روی GitHub و Vercel

### گام ۱: ساخت مخزن (Repository) در GitHub

1. وارد [github.com](https://github.com) شوید و حساب بسازید (اگر ندارید).
2. روی دکمه‌ی سبز **New** (یا علامت + بالا سمت راست → New repository) بزنید.
3. یک نام بگذارید، مثلاً `security-plus-app`.
4. گزینه‌ی **Public** را انتخاب کنید.
5. روی **Create repository** بزنید.

### گام ۲: آپلود فایل‌ها

**ساده‌ترین راه (بدون نصب چیزی):**

1. در صفحه‌ی مخزن، روی **Add file → Upload files** بزنید.
2. تمام فایل‌ها و پوشه‌ی `data` را بکشید و رها کنید (drag & drop).
3. پایین صفحه روی **Commit changes** بزنید.

**راه حرفه‌ای‌تر (با Git، اگر بلدید):**

```bash
git init
git add .
git commit -m "اولین نسخه اپ Security+"
git branch -M main
git remote add origin https://github.com/USERNAME/security-plus-app.git
git push -u origin main
```
(به‌جای `USERNAME` نام کاربری خودتان را بگذارید)

### گام ۳: انتشار روی Vercel

1. وارد [vercel.com](https://vercel.com) شوید و با حساب GitHub خود وارد شوید (Sign in with GitHub).
2. روی **Add New → Project** بزنید.
3. مخزن `security-plus-app` را از لیست انتخاب و روی **Import** بزنید.
4. **هیچ تنظیماتی را تغییر ندهید** — Vercel خودش تشخیص می‌دهد این یک سایت ساده است.
5. روی **Deploy** بزنید.
6. چند ثانیه صبر کنید — یک آدرس مثل `https://security-plus-app.vercel.app` می‌گیرید که اپ شما آنجا زنده است! 🎉

### گام ۴: به‌روزرسانی بعدی

هر وقت فایلی را در GitHub تغییر دادید (مثلاً سوال جدید اضافه کردید)، Vercel **خودکار** نسخه‌ی جدید را منتشر می‌کند. کاری لازم نیست بکنید.

**جایگزین رایگان دیگر — GitHub Pages:**
در صفحه‌ی مخزن → Settings → Pages → Source را روی `main` بگذارید → Save. چند دقیقه بعد آدرس `https://USERNAME.github.io/security-plus-app` فعال می‌شود.

</div>

---

## English — Deploy to GitHub & Vercel

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign up (if needed).
2. Click the green **New** button (or + → New repository).
3. Name it, e.g. `security-plus-app`.
4. Choose **Public**.
5. Click **Create repository**.

### Step 2: Upload the Files

**Easiest way (no installation):**

1. On the repo page, click **Add file → Upload files**.
2. Drag and drop all files and the `data` folder.
3. Click **Commit changes** at the bottom.

**Pro way (with Git):**

```bash
git init
git add .
git commit -m "Initial Security+ app"
git branch -M main
git remote add origin https://github.com/USERNAME/security-plus-app.git
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**.
3. Select the `security-plus-app` repo and click **Import**.
4. **Don't change any settings** — Vercel auto-detects it's a static site.
5. Click **Deploy**.
6. Wait a few seconds — you'll get a URL like `https://security-plus-app.vercel.app`. Your app is live! 🎉

### Step 4: Future Updates

Whenever you change a file on GitHub (e.g., add a question), Vercel **automatically** redeploys. Nothing else needed.

**Free alternative — GitHub Pages:**
Repo page → Settings → Pages → set Source to `main` → Save. After a few minutes, `https://USERNAME.github.io/security-plus-app` goes live.
