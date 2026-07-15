# 🛡️ Security+ SY0-701 Study App | اپلیکیشن آموزش سکیوریتی پلاس

<div dir="rtl">

## فارسی

یک اپلیکیشن آموزشی کامل و آفلاین برای آماده‌شدن برای آزمون **CompTIA Security+ (SY0-701)**، به‌صورت دو زبانه (فارسی و انگلیسی).

### ✨ امکانات

- **۳۰۰ سوال** دو زبانه با توضیح کامل، دسته‌بندی‌شده در ۵ دامنه
- **۵۴ درس عمیق** با مفهوم ساده، مثال و نکات امتحان
- **۶۹ مخفف** کلیدی با تلفظ صوتی
- **سیستم فلش‌کارت Leitner** برای مرور هوشمند
- **۵ آزمون شبیه‌سازی‌شده** (هر کدام ۹۰ سوال) با تایمر، درست مثل امتحان واقعی
- **گواهی موفقیت** برای قبول‌شدگان
- **پرینت** درس‌ها و نتایج با فرمت A4
- **۶ تم رنگی** و **۵ طرح سه‌بعدی** قابل انتخاب
- **کاملاً آفلاین** — نیازی به اینترنت ندارد
- تنظیمات (زبان، تم، اندازه فونت، پیشرفت) به‌صورت خودکار ذخیره می‌شوند

### 🚀 اجرا

**روی اینترنت (Vercel / GitHub Pages):**
فقط کافیست فایل‌ها را آپلود کنید — بدون هیچ تنظیماتی کار می‌کند.

**روی کامپیوتر خودتان:**
به‌خاطر محدودیت امنیتی مرورگرها، فایل‌ها باید از طریق یک سرور محلی سرو شوند (نه دابل‌کلیک مستقیم). ساده‌ترین راه:

```bash
# اگر Python دارید:
python3 -m http.server 8000
# سپس در مرورگر باز کنید: http://localhost:8000
```

### 📝 افزودن یا ویرایش محتوا

تمام محتوا در پوشه‌ی `data/` قرار دارد و به‌راحتی قابل ویرایش است:

- **افزودن سوال:** فایل `data/questions.js` را باز کنید و یک بلوک جدید به آرایه اضافه کنید (نمونه در بالای فایل هست).
- **افزودن یا ویرایش درس:** فایل `data/lessons.js` را ویرایش کنید.

نیازی به دانش برنامه‌نویسی نیست — فقط الگوی موجود را کپی کنید.

### 📂 ساختار پروژه

```
├── index.html          ساختار صفحه
├── style.css           استایل‌ها و تم‌ها
├── app.js              منطق برنامه
└── data/
    ├── questions.js    ۳۰۰ سوال (اینجا ویرایش کنید)
    └── lessons.js      درس‌ها، دامنه‌ها و مخفف‌ها
```

### ⚠️ توجه

گواهی صادرشده توسط این اپ **ارزش قانونی یا رسمی ندارد** و صرفاً برای انگیزه و پیگیری پیشرفت شخصی است. برای گواهی رسمی باید در آزمون واقعی CompTIA شرکت کنید.

</div>

---

## English

A complete, offline, bilingual (Persian & English) study app for the **CompTIA Security+ (SY0-701)** exam.

### ✨ Features

- **300 bilingual questions** with full explanations across 5 domains
- **54 in-depth lessons** with simple concepts, examples, and exam tips
- **69 key acronyms** with audio pronunciation
- **Leitner flashcard system** for spaced repetition
- **5 simulated exams** (90 questions each) with a timer, just like the real thing
- **Certificate of achievement** for passing scores
- **Print** lessons and results in A4 format
- **6 color themes** and **5 3D layout styles**
- **Fully offline** — no internet required
- Settings (language, theme, font size, progress) saved automatically

### 🚀 Running

**Online (Vercel / GitHub Pages):**
Just upload the files — it works with zero configuration.

**Locally:**
Due to browser security restrictions, files must be served via a local server (not opened directly). Easiest way:

```bash
# If you have Python:
python3 -m http.server 8000
# Then open: http://localhost:8000
```

### 📝 Adding or Editing Content

All content lives in the `data/` folder and is easy to edit:

- **Add a question:** Open `data/questions.js` and add a new block to the array (a template is at the top of the file).
- **Add or edit a lesson:** Edit `data/lessons.js`.

No programming knowledge needed — just copy the existing pattern.

### 📂 Project Structure

```
├── index.html          Page structure
├── style.css           Styles and themes
├── app.js              App logic
└── data/
    ├── questions.js    300 questions (edit here)
    └── lessons.js      Lessons, domains & acronyms
```

### ⚠️ Disclaimer

The certificate issued by this app has **no legal or official value** and is only for motivation and personal progress tracking. For an official certificate, you must take the real CompTIA exam.

---

*Made with ❤️ for Security+ learners*
