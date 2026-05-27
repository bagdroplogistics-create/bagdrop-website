# 🚀 Connecting Bagdrop.co to Emergent Backend

This guide explains how to connect your frontend (hosted on GoDaddy) to your backend (running on Emergent platform).

## 📋 Overview

**Current Setup:**
- ✅ Frontend: bagdrop.co (GoDaddy cPanel)
- ✅ Backend: Emergent Platform (Python FastAPI + MongoDB)

**Why This Setup?**
- GoDaddy cPanel only supports static files (HTML, CSS, JS)
- Python backend cannot run on GoDaddy cPanel
- Emergent provides managed backend hosting

---

## 🎯 Step-by-Step Instructions

### Step 1: Deploy Your Backend on Emergent

1. **Click the "Deploy" button** in the Emergent interface (top right)
2. Click **"Deploy Now"** to start the deployment
3. **Wait 10-15 minutes** for deployment to complete
4. **Copy the Public Backend URL** provided after deployment
   - It will look like: `https://your-app-name.emergent.ai` or similar

### Step 2: Update Frontend Configuration

Once you have the Emergent backend URL, you need to update your frontend:

**Option A: Manual Update (Recommended)**

1. Open the file: `/app/frontend/.env`
2. Update the backend URL:
   ```
   REACT_APP_BACKEND_URL=https://your-emergent-backend-url.emergent.ai
   ```
   *(Replace with your actual Emergent backend URL)*

3. Rebuild the frontend:
   ```bash
   cd /app/frontend
   yarn build
   ```

4. The `build` folder is now ready for GoDaddy upload

**Option B: I Can Do It For You**

Just provide me with:
- Your Emergent backend URL (from Step 1)

And I'll update the configuration and rebuild everything for you!

### Step 3: Upload to GoDaddy

1. **Download the build folder** from `/app/frontend/build/`
2. **Login to GoDaddy cPanel**
3. **Go to File Manager**
4. Navigate to your **public_html** folder (or your domain folder)
5. **Upload all files** from the `build` folder
6. **Important File Structure:**
   ```
   public_html/
   ├── index.html
   ├── static/
   │   ├── css/
   │   ├── js/
   │   └── media/
   ├── manifest.json
   └── other files...
   ```

---

## ✅ What's Already Configured

### Backend CORS Settings ✅
I've already configured the backend to accept requests from your domain:
- ✅ https://bagdrop.co
- ✅ https://www.bagdrop.co
- ✅ http://bagdrop.co
- ✅ http://www.bagdrop.co

### Email Configuration ✅
- ✅ Booking emails → info@bagdrop.co
- ✅ Franchise inquiries → info@bagdrop.co
- ✅ Gmail SMTP configured

### API Endpoints Available ✅
- `POST /api/booking` - Create baggage booking
- `POST /api/franchise-inquiry` - Submit franchise application
- `GET /api/bookings` - View all bookings (admin)

---

## 🧪 Testing Your Setup

After deployment and upload, test these features:

### 1. Test Booking Form
1. Go to https://bagdrop.co
2. Click "Book Now"
3. Fill out the booking form
4. Submit - you should see success message
5. Check info@bagdrop.co for email notification

### 2. Test Franchise Form
1. Go to https://bagdrop.co/franchise-opportunities
2. Fill out the franchise application
3. Submit - you should see success message
4. Check info@bagdrop.co for email notification

### 3. Check Browser Console
Open browser DevTools (F12) and check:
- ✅ No CORS errors
- ✅ API calls showing successful (200 OK)
- ✅ Backend URL is correct

---

## 💰 Costs

**Emergent Backend Hosting:**
- 50 credits per month per deployed application
- Backend stays live 24/7
- Includes MongoDB hosting

**GoDaddy Hosting:**
- Your existing plan (frontend only)

---

## 🔧 Troubleshooting

### Issue: "Network Error" or "Failed to Fetch"

**Solution:**
1. Check if backend is deployed (not just previewed)
2. Verify the REACT_APP_BACKEND_URL in frontend/.env
3. Ensure CORS is configured (already done ✅)

### Issue: Emails Not Sending

**Solution:**
1. Verify Gmail credentials in `/app/backend/.env`:
   - GMAIL_USER=bagdroplogistics@gmail.com
   - GMAIL_APP_PASSWORD=yyiv qzvk yzqp vspo
2. These are already configured ✅

### Issue: 404 Errors on GoDaddy

**Solution:**
1. Create a `.htaccess` file in public_html:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```
   This fixes React Router routing issues.

---

## 📞 Need Help?

If you need me to:
- ✅ Update the frontend configuration with your backend URL
- ✅ Rebuild the frontend
- ✅ Create a downloadable ZIP file
- ✅ Help with any deployment issues

**Just provide your Emergent backend URL and I'll handle everything!**

---

## 🎉 Summary

**What You Need to Do:**
1. Deploy backend on Emergent (click Deploy button)
2. Get the backend URL
3. Tell me the URL, and I'll rebuild the frontend
4. Upload the `build` folder to GoDaddy

**What's Already Done:**
- ✅ CORS configured for bagdrop.co
- ✅ Email service configured
- ✅ All API endpoints ready
- ✅ Database configured

**Your website will then be fully functional with:**
- ✅ Frontend on bagdrop.co (GoDaddy)
- ✅ Backend on Emergent platform
- ✅ All features working (bookings, franchise inquiries, emails)
