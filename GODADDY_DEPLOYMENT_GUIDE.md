# 🚀 Bagdrop Website - GoDaddy Deployment Guide

## ✅ What You Have
- ✅ Production-ready React frontend build
- ✅ Backend running on Emergent (https://skybird-delivery.preview.emergentagent.com)
- ✅ All custom images integrated
- ✅ Booking form connected to backend API

---

## 📦 Step-by-Step Deployment to GoDaddy cPanel

### Step 1: Download Your Website Files

You need to download the `/app/frontend/build` folder from this Emergent environment to your computer.

**Option A: Using Emergent's File Manager** (if available)
1. Navigate to `/app/frontend/build`
2. Download the entire `build` folder as a ZIP

**Option B: Using Git/GitHub** (recommended)
1. Push this code to your GitHub repository
2. Clone it to your local computer
3. Navigate to the `frontend/build` folder

**Option C: I can create a downloadable ZIP for you**
- Let me know and I'll package everything

---

### Step 2: Access Your GoDaddy cPanel

1. Log in to your GoDaddy account
2. Go to "My Products" → "Web Hosting"
3. Click "Manage" next to your hosting plan
4. Click "cPanel Admin" button

---

### Step 3: Upload Files to GoDaddy

#### Using File Manager (Easier):

1. **In cPanel, find "File Manager"** and click it
2. **Navigate to public_html folder** (or the root directory for your domain)
3. **Delete old files** (if any):
   - Select all files in public_html
   - Click "Delete" (⚠️ Backup first if needed!)
4. **Upload your build files**:
   - Click "Upload" button at the top
   - Upload ALL files from `/app/frontend/build/` folder:
     - `index.html`
     - `.htaccess` (important for routing!)
     - `asset-manifest.json`
     - `favicon.ico`
     - `logo192.png`
     - `logo512.png`
     - `manifest.json`
     - `robots.txt`
     - The entire `static` folder (contains CSS and JS)
   
5. **Verify .htaccess file**:
   - Make sure `.htaccess` is in the root (public_html)
   - In File Manager, click "Settings" and enable "Show Hidden Files"
   - You should see `.htaccess` file

#### Using FTP (Alternative):

1. **Get your FTP credentials** from cPanel → "FTP Accounts"
2. **Use an FTP client** like FileZilla:
   - Host: ftp.yourdomain.com
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21
3. **Upload all files** from `/app/frontend/build/` to `public_html/`

---

### Step 4: Configure Domain Settings

1. **If using subdomain** (like www.bagdrop.co):
   - Files should be in: `/public_html/`

2. **If using addon domain**:
   - cPanel → "Domains" → Check your domain's document root
   - Upload files to that specific folder

---

### Step 5: Test Your Website

1. **Visit your domain**: http://yourdomain.com
2. **Test these features**:
   - ✅ Homepage loads
   - ✅ Hero slider works
   - ✅ All images display
   - ✅ Navigation menu works
   - ✅ Click "Book Now" - modal opens
   - ✅ Fill booking form and submit
   - ✅ Check if email arrives at info@bagdrop.co

---

## 🔧 Troubleshooting

### Issue 1: "Page Not Found" on refresh
**Solution**: Make sure `.htaccess` file is uploaded to public_html

### Issue 2: Images not loading
**Solution**: 
- Clear browser cache (Ctrl+F5)
- Check File Manager permissions (should be 644 for files, 755 for folders)

### Issue 3: Booking form not working
**Solution**: 
- Check browser console (F12) for errors
- Verify backend is running on Emergent
- Make sure CORS is enabled on backend

### Issue 4: Website shows "Index of /" or directory listing
**Solution**: 
- Make sure `index.html` exists in public_html root
- Rename it if needed: should be exactly `index.html`

### Issue 5: "This site can't provide a secure connection"
**Solution**: 
- Install SSL certificate from cPanel → "SSL/TLS"
- GoDaddy usually provides free SSL
- May take 24 hours to activate

---

## 📧 Email Configuration

Your booking form sends emails to: **info@bagdrop.co**

**Backend email service needs Gmail credentials:**

1. **On Emergent**, make sure backend `.env` has:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   ```

2. **Get Gmail App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Create app password named "Bagdrop Backend"
   - Copy the 16-character password
   - Add to Emergent backend `.env` file
   - Restart backend: `sudo supervisorctl restart backend`

---

## 🔒 SSL Certificate (HTTPS)

1. In cPanel, go to **"SSL/TLS Status"**
2. Find your domain
3. Click **"Run AutoSSL"**
4. Wait 5-10 minutes for SSL to activate
5. Your site will be accessible via: https://yourdomain.com

---

## 📊 Files You Need to Upload

From `/app/frontend/build/` folder:

```
public_html/
├── index.html ✅
├── .htaccess ✅ (important!)
├── asset-manifest.json
├── favicon.ico
├── logo192.png
├── logo512.png
├── manifest.json
├── robots.txt
└── static/
    ├── css/
    │   └── main.37ab5f59.css
    └── js/
        └── main.40b4d176.js
```

**Total size**: ~175 KB (very small, uploads fast!)

---

## ✅ Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Hero slider auto-plays
- [ ] All custom images display
- [ ] Navigation menu works
- [ ] Book Now button opens modal
- [ ] Booking form submits successfully
- [ ] Services section shows all 6 services
- [ ] Destinations section shows 4 airports
- [ ] Testimonials slider works
- [ ] Footer displays correctly
- [ ] Contact form works
- [ ] SSL certificate is active (HTTPS)

---

## 📞 Need Help?

**If you get stuck:**
1. Check the troubleshooting section above
2. Contact GoDaddy support (24/7 phone/chat)
3. Or let me know what error you're seeing

---

## 🎉 Your Website Stack

**Frontend (GoDaddy)**: React app serving static files
**Backend (Emergent)**: FastAPI + MongoDB
**Images**: CDN (customer-assets.emergentagent.com)
**Email**: Gmail SMTP via backend

This setup is:
- ✅ Fast (static files on GoDaddy)
- ✅ Reliable (backend on Emergent infrastructure)
- ✅ Cost-effective (using your existing hosting)
- ✅ Scalable (can upgrade backend independently)

---

**Ready to deploy! 🚀**
