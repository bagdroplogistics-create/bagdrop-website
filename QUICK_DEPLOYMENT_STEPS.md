# ⚡ Quick Deployment Steps - Bagdrop to GoDaddy

## 🎯 Your Files
- **Location**: `/app/frontend/build/` (or download `bagdrop-website.zip`)
- **Size**: 795 KB (very small!)
- **Backend URL**: Already configured to connect to Emergent

---

## 📋 5-Minute Deployment

### 1️⃣ Download Files
```
Location: /app/frontend/build/
ZIP file: /app/frontend/bagdrop-website.zip
```

### 2️⃣ Login to GoDaddy cPanel
- Go to: GoDaddy → My Products → Web Hosting → Manage → cPanel Admin

### 3️⃣ Open File Manager
- In cPanel, click "File Manager"
- Navigate to `public_html` folder

### 4️⃣ Clean & Upload
- Delete all old files in public_html (backup first!)
- Upload ALL files from the `build` folder
- Make sure `.htaccess` is included (enable "Show Hidden Files")

### 5️⃣ Test
- Visit: http://yourdomain.com
- Test booking form
- Check if all images load

---

## ✅ Essential Files Checklist

Must be in `public_html`:
- [x] index.html
- [x] .htaccess ← **IMPORTANT for routing!**
- [x] asset-manifest.json
- [x] favicon.ico
- [x] static/css/main.37ab5f59.css
- [x] static/js/main.40b4d176.js

---

## 🔥 Quick Fixes

**Problem**: Page not found on refresh
**Fix**: Upload `.htaccess` file

**Problem**: Booking form doesn't work
**Fix**: Check that backend is running on Emergent

**Problem**: Images not loading
**Fix**: Clear browser cache (Ctrl+F5)

---

## 📧 Backend Setup (One-time)

For booking emails to work, add to Emergent backend `.env`:

```bash
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

Then restart: `sudo supervisorctl restart backend`

---

## 🆘 Need the ZIP file?

The complete website is packaged at:
`/app/frontend/bagdrop-website.zip` (795 KB)

You can download this and extract it on your computer, then upload to GoDaddy.

---

**That's it! Your website will be live! 🎉**
