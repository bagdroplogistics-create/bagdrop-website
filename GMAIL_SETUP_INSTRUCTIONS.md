# Gmail SMTP Setup Instructions for Bagdrop Website

## 📧 Where to Add Gmail Credentials

You need to add your Gmail credentials to the backend `.env` file located at:

**File Path:** `/app/backend/.env`

## 🔧 Steps to Configure Email

### Step 1: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/apppasswords
2. Sign in with your Gmail account
3. Create a new app password:
   - Name: "Bagdrop Website"
   - Click "Create"
4. Copy the 16-character password that appears (it will look like: `xxxx xxxx xxxx xxxx`)

### Step 2: Edit the Backend .env File

Open the file `/app/backend/.env` and add these two lines:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

**Example:**
```
GMAIL_USER=info@bagdrop.co
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

### Step 3: Restart the Backend Server

After adding the credentials, restart the backend server:

```bash
sudo supervisorctl restart backend
```

## ✅ Testing

Once configured, when someone submits a booking form on your website:
1. The booking data will be saved to the MongoDB database
2. An email with all booking details will be sent to: **info@bagdrop.co**

## 🔒 Security Notes

- Never share your app password publicly
- The app password is different from your regular Gmail password
- You can revoke the app password anytime from your Google Account settings

## 📝 Current Configuration Location

- **Backend .env file:** `/app/backend/.env`
- **Email service code:** `/app/backend/email_service.py`
- **Example .env file:** `/app/backend/.env.example`

---

**Need Help?** If you have any questions about setting up Gmail credentials, please let me know!
