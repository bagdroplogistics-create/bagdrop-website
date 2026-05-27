# 📝 Manual GoDaddy Setup - Complete Guide

## 🎯 What You'll Do
Create 8 files manually in GoDaddy cPanel File Manager by copy-pasting content.

**Time Required:** 10-15 minutes  
**Difficulty:** Easy (just copy-paste!)

---

## 📁 Step 1: Prepare GoDaddy Folder Structure

### 1.1 Login to GoDaddy cPanel
1. Go to GoDaddy → My Products → Web Hosting
2. Click "Manage" → "cPanel Admin"

### 1.2 Open File Manager
1. In cPanel, find and click "File Manager"
2. Navigate to `public_html` folder

### 1.3 Clean the Folder
1. Inside `public_html`, **select all files/folders**
2. Click "Delete" button
3. Confirm deletion
4. **public_html should now be empty**

### 1.4 Enable Hidden Files
1. Click "Settings" button (top right)
2. Check ✓ "Show Hidden Files (dotfiles)"
3. Click "Save"

### 1.5 Create Folder Structure
1. Make sure you're in `public_html`
2. Click "+ Folder" button
3. Create folder: `static`
4. Double-click `static` to enter it
5. Click "+ Folder" button
6. Create folder: `css`
7. Go back to `static` folder
8. Click "+ Folder" button again
9. Create folder: `js`

**Final structure:**
```
public_html/
├── static/
│   ├── css/
│   └── js/
```

---

## 📄 Step 2: Create Files with Content

### FILE 1: .htaccess (in public_html)

**Location:** `public_html/.htaccess`

**How to create:**
1. Go to `public_html` folder
2. Click "+ File" button
3. Name it: `.htaccess` (don't forget the dot!)
4. Click "Create New File"
5. Right-click the file → "Edit"
6. Copy-paste this content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

7. Click "Save Changes"
8. Close editor

---

### FILE 2: asset-manifest.json (in public_html)

**Location:** `public_html/asset-manifest.json`

**How to create:**
1. Go to `public_html` folder
2. Click "+ File" button
3. Name it: `asset-manifest.json`
4. Click "Create New File"
5. Right-click the file → "Edit"
6. Copy-paste this content:

```json
{
  "files": {
    "main.css": "/static/css/main.37ab5f59.css",
    "main.js": "/static/js/main.40b4d176.js",
    "index.html": "/index.html",
    "main.37ab5f59.css.map": "/static/css/main.37ab5f59.css.map",
    "main.40b4d176.js.map": "/static/js/main.40b4d176.js.map"
  },
  "entrypoints": [
    "static/css/main.37ab5f59.css",
    "static/js/main.40b4d176.js"
  ]
}
```

7. Click "Save Changes"
8. Close editor

---

### FILE 3: index.html (in public_html)

**Location:** `public_html/index.html`

**⚠️ IMPORTANT:** This file is on the next page because it's the largest one.

See: `/app/GODADDY_FILES_CONTENT.md` for all large file contents.

---

## 🚨 Large Files Notice

The following files are too large to paste here. I've created them separately:

**In `/app/frontend/build/` folder, you have:**
- `index.html` (3.3 KB)
- `static/css/main.37ab5f59.css` (63 KB)
- `static/js/main.40b4d176.js` (522 KB)

**How to get them:**

### Option A: Use Upload Feature (EASIEST!)
1. In this Emergent environment, download these files:
   - `/app/frontend/build/index.html`
   - `/app/frontend/build/static/css/main.37ab5f59.css`
   - `/app/frontend/build/static/js/main.40b4d176.js`

2. In GoDaddy File Manager:
   - Go to `public_html` → Upload `index.html`
   - Go to `public_html/static/css/` → Upload `main.37ab5f59.css`
   - Go to `public_html/static/js/` → Upload `main.40b4d176.js`

### Option B: I Can Provide Download Links
Let me know and I'll help you download these files individually.

---

## 📋 Final Checklist

After creating all files, verify in File Manager:

```
public_html/
├── .htaccess ✓
├── asset-manifest.json ✓
├── index.html ✓
└── static/
    ├── css/
    │   └── main.37ab5f59.css ✓
    └── js/
        └── main.40b4d176.js ✓
```

**Optional files (not critical):**
- `static/css/main.37ab5f59.css.map` (source map)
- `static/js/main.40b4d176.js.map` (source map)
- `static/js/main.40b4d176.js.LICENSE.txt` (licenses)

---

## ✅ Test Your Website

1. Clear browser cache: `Ctrl + Shift + Delete`
2. Visit: `http://bagdrop.co`
3. You should see your beautiful Bagdrop website!

**If blank screen:**
- Wait 2 minutes
- Clear cache again
- Try Incognito mode
- Check if `.htaccess` file exists

---

## 🆘 Need the Large Files?

I can provide the content of large files in parts, or you can:

1. **Download from Emergent directly** (if file browser available)
2. **Use FTP** - I'll guide you
3. **GitHub** - Push from here, download to your computer

Let me know which method works for you!

---

**Once files are uploaded, your website will be live!** 🎉
