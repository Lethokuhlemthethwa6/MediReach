# 🚀 Quick Start Guide - MediReach

## For Absolute Beginners

### Step 1: Install Node.js
1. Go to https://nodejs.org/
2. Download "LTS" version for Windows
3. Run installer and click "Next" for everything
4. Verify installation:
   ```powershell
   node --version
   npm --version
   ```

### Step 2: Get MongoDB Atlas (Free Database)
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up with email
3. Create free cluster (M0)
4. Create database user (username + password)
5. Click "Network Access" → Add IP Address → Allow Access from Anywhere (0.0.0.0/0)
6. Click "Connect" → "Connect your application" → Copy connection string

### Step 3: Setup Gmail for Emails
1. Go to https://myaccount.google.com/security
2. Turn on "2-Step Verification"
3. Go to "App passwords"
4. Create new app password for "Mail"
5. Copy the 16-character password

### Step 4: Download & Setup Project
```powershell
# Open PowerShell in your desired folder

# Navigate to the project
cd d:\plp-africa\MediReach

# Setup Backend
cd backend
npm install
copy .env.example .env
# Open .env file and add your MongoDB URI and Gmail credentials
notepad .env

# Setup Frontend (in new PowerShell window)
cd d:\plp-africa\MediReach\frontend
npm install
copy .env.example .env
# Usually no changes needed for local development
```

### Step 5: Run the Application

**PowerShell Window 1 (Backend):**
```powershell
cd d:\plp-africa\MediReach\backend
npm run dev
```

**PowerShell Window 2 (Frontend):**
```powershell
cd d:\plp-africa\MediReach\frontend
npm run dev
```

### Step 6: Access the Application
1. Open browser: http://localhost:5173
2. Click "Register" to create account
3. Fill in your details
4. Login and start using!

## Default Test Flow

1. **Register as Patient** → Book appointment
2. **Change role to Staff** (in MongoDB) → View all appointments
3. **Change role to Admin** (in MongoDB) → View statistics

## Changing User Role in MongoDB

1. Go to MongoDB Atlas
2. Click "Browse Collections"
3. Find your database → users collection
4. Find your user → Edit
5. Change `role` field to: `"staff"` or `"admin"`
6. Save

## Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| "Cannot find module" | Run `npm install` in that folder |
| "Port already in use" | Close other apps using port 5000/5173 |
| "Cannot connect to database" | Check MongoDB URI in .env |
| "Email not sending" | Verify Gmail app password |

## Environment File Examples

### backend/.env
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://youruser:yourpassword@cluster0.xxxxx.mongodb.net/medireach?retryWrites=true&w=majority
JWT_SECRET=your_very_long_secret_key_here_at_least_32_characters_long
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=youremail@gmail.com
EMAIL_PASSWORD=your16charapppassword
EMAIL_FROM=MediReach <noreply@medireach.com>
FRONTEND_URL=http://localhost:5173
REMINDER_CRON_SCHEDULE=0 9 * * *
```

### frontend/.env
```env
VITE_API_URL=http://localhost:5000/api
```

## Video Tutorial Links (Recommended)

- Node.js Installation: YouTube search "install nodejs windows"
- MongoDB Atlas Setup: YouTube search "mongodb atlas setup free"
- Gmail App Password: YouTube search "gmail app password 2024"

## Need Help?

1. Read error messages carefully
2. Google the error message
3. Check if all dependencies are installed
4. Verify .env file settings
5. Ensure MongoDB and Gmail are properly configured

---

**Happy Coding! 🎉**
