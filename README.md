# 🏥 MediReach - Healthcare Appointment Management System

**A production-ready MERN stack application for managing medical appointments, patient records, and automated reminders.**

---

## 📌 Live Deployments

| Platform | URL |
|----------|-----|
| **Frontend (Vercel)** | [https://medi-reach-n2cyvdvct-lethokuhle-mthethwas-projects.vercel.app](https://medi-reach-n2cyvdvct-lethokuhle-mthethwas-projects.vercel.app) |
| **Backend API (Render)** | [https://medireach-dz94.onrender.com](https://medireach-dz94.onrender.com) |
| **GitHub Repository** | [https://github.com/Lethokuhlemthethwa6/MediReach.git](https://github.com/Lethokuhlemthethwa6/MediReach.git) |

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Local Setup](#-local-setup)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Deployment](#-deployment)
- [Testing](#-testing)
- [Documentation](#-documentation)
- [License](#-license)

---

## 🎯 Overview

MediReach is a comprehensive healthcare platform designed to streamline appointment management and patient communications. Built with the MERN stack (MongoDB, Express, React, Node.js), it provides a secure, scalable solution for healthcare providers and patients.

**Key Achievements:**
- ✅ Full MERN stack implementation
- ✅ Production-ready deployments on Render & Vercel
- ✅ JWT-based authentication & authorization
- ✅ Automated email reminders via cron jobs
- ✅ Role-based access control (Patient & Staff)
- ✅ Responsive UI with Tailwind CSS
- ✅ Comprehensive error handling & security

---

## ✨ Key Features

### 🔐 Authentication & Security
- User registration with email validation
- Secure login with JWT tokens
- Password hashing with bcryptjs
- Role-based access control (Patient/Staff)
- Protected API routes with middleware
- Security headers via Helmet.js
- Rate limiting (100 req/10min)

### 📅 Appointment Management
- Create, view, update, and cancel appointments
- Real-time appointment status tracking
- Patient & staff specific dashboards
- Appointment history & details

### 📧 Notifications & Reminders
- Automated email reminders via Node Cron
- Customizable reminder schedules
- SMTP integration (Gmail/SendGrid)
- Email templates with appointment details

### 👥 User Management
- Patient profile management
- Staff account management
- Role-based dashboards
- User authentication & profile updates

### 🎨 User Interface
- Responsive React UI with Tailwind CSS
- React Router for SPA navigation
- Dynamic forms with validation
- Intuitive patient & staff dashboards
- Error handling & user feedback

---

## 🛠 Tech Stack

### Backend
```
Node.js & Express.js - REST API server
MongoDB & Mongoose - NoSQL database
JWT - Authentication
Nodemailer - Email service
Node Cron - Scheduled tasks
Helmet - Security headers
Express Rate Limit - API rate limiting
```

### Frontend
```
React 19 - UI library
Vite - Build tool & dev server
React Router - SPA navigation
Axios - HTTP client
Tailwind CSS - Utility-first CSS
Lucide React - Icon library
```

### Deployment
```
Backend: Render (Node.js environment)
Frontend: Vercel (React SPA)
Database: MongoDB Atlas (Cloud)
```

---

## 📂 Project Structure

```
MediReach/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Auth logic
│   │   ├── appointmentController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── User.js
│   │   └── Appointment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── appointmentRoutes.js
│   │   └── userRoutes.js
│   ├── utils/
│   │   ├── emailService.js       # Email templates
│   │   └── reminderCron.js       # Scheduled reminders
│   ├── server.js
│   ├── render.yaml               # Render deployment config
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AppointmentForm.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── PatientDashboard.jsx
│   │   │   ├── StaffDashboard.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Features.jsx
│   │   ├── services/
│   │   │   ├── api.js            # Axios instance
│   │   │   ├── auth.js           # Auth service
│   │   │   └── appointments.js
│   │   ├── context/
│   │   │   └── AuthContext.jsx   # Auth state
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vercel.json               # Vercel deployment config
│   ├── vite.config.js
│   └── package.json
│
├── DEPLOYMENT_CONFIRMATION.md
├── DEPLOYMENT_CHECKLIST.md
├── API_TESTING.md
└── README.md
```

---

## 🚀 Local Setup

### Prerequisites
- Node.js >= 18.0.0
- MongoDB (local or MongoDB Atlas)
- npm or yarn package manager
- Git

### Step 1: Clone Repository
```bash
git clone https://github.com/Lethokuhlemthethwa6/MediReach.git
cd MediReach
```

### Step 2: Backend Setup
```bash
cd backend

# Create environment file
cp .env.example .env

# Install dependencies
npm install

# Start development server (with auto-reload)
npm run dev

# OR start production server
npm start
```

Backend runs on `http://localhost:5000`

### Step 3: Frontend Setup
```bash
cd ../frontend

# Create environment file
cp .env.example .env

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Frontend runs on `http://localhost:5173`

---

## 🔑 Environment Variables

### Backend (.env)
```env
# Server
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/medireach

# Authentication
JWT_SECRET=your-secure-random-secret-key
JWT_EXPIRE=7d

# Email Service
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=MediReach <noreply@medireach.com>

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Cron Schedule (0 9 * * * = 9 AM daily)
REMINDER_CRON_SCHEDULE=0 9 * * *
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 📡 API Endpoints

### Authentication
```
POST   /api/auth/register          - Register new user
POST   /api/auth/login             - Login user
```

### Users
```
GET    /api/users/:id              - Get user profile
PUT    /api/users/:id              - Update user profile
```

### Appointments
```
POST   /api/appointments           - Create appointment
GET    /api/appointments           - Get user appointments
GET    /api/appointments/:id       - Get specific appointment
PUT    /api/appointments/:id       - Update appointment
DELETE /api/appointments/:id       - Cancel appointment
```

### Health
```
GET    /api/health                 - API health check
```

---

## 🌐 Deployment

### Backend Deployment (Render)

1. **Connect Repository**
   - Push code to GitHub
   - Go to render.com
   - Create Web Service from GitHub repo

2. **Configure Service**
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

3. **Set Environment Variables**
   - MONGODB_URI
   - JWT_SECRET
   - EMAIL_* variables
   - FRONTEND_URL

4. **Deploy**
   - Click "Deploy"
   - Wait for build (2-5 minutes)

**Your API:** https://medireach-dz94.onrender.com

### Frontend Deployment (Vercel)

1. **Connect Repository**
   - Go to vercel.com
   - Import GitHub repo

2. **Configure Project**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`

3. **Set Environment Variables**
   - VITE_API_URL: `https://medireach-dz94.onrender.com/api`

4. **Deploy**
   - Click "Deploy"
   - Wait for build (1-2 minutes)

**Your App:** https://medi-reach-n2cyvdvct-lethokuhle-mthethwas-projects.vercel.app

---

## ✅ Testing

### Test Backend API
```bash
# Health check
curl https://medireach-dz94.onrender.com/api/health

# Register user
curl -X POST https://medireach-dz94.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123","name":"Test"}'

# Login
curl -X POST https://medireach-dz94.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Test Frontend
1. Visit: https://medi-reach-n2cyvdvct-lethokuhle-mthethwas-projects.vercel.app
2. Register a new account
3. Login with credentials
4. View dashboard based on role
5. Create & manage appointments
6. Test appointment reminders (if email configured)

---

## 📚 Documentation

Additional documentation files included in the repository:
- `DEPLOYMENT_CONFIRMATION.md` - Complete deployment readiness report
- `DEPLOYMENT_CHECKLIST.md` - Pre-deployment verification checklist
- `API_TESTING.md` - Detailed API testing guide
- `QUICK_START.md` - Quick start instructions

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Lethokuhle Mthethwa**  
PLP Academy Final Project  
November 2025

---

## 🙏 Acknowledgments

- PLP Academy for the curriculum and guidance
- MongoDB for database services
- Render for backend hosting
- Vercel for frontend hosting
- Open-source community for excellent libraries and tools

---

## 📞 Support

For issues or questions:
- Check the documentation files
- Review API testing guide
- Open an issue on GitHub

**Happy coding! 🚀**
	# Edit .env and set VITE_API_URL to your backend API (e.g. http://localhost:5000/api)
	npm install
	npm run dev

Environment variables (summary)
- backend/.env (example keys)
  - NODE_ENV=development
  - PORT=5000
  - MONGODB_URI=your-mongodb-connection-string
  - JWT_SECRET=your_jwt_secret
  - JWT_EXPIRE=7d
  - EMAIL_HOST=smtp.example.com
  - EMAIL_PORT=587
  - EMAIL_USER=you@example.com
  - EMAIL_PASSWORD=app-password
  - EMAIL_FROM="MediReach <noreply@medireach.com>"
  - FRONTEND_URL=https://your-frontend-url.vercel.app

- frontend/.env (example keys)
  - VITE_API_URL=https://your-backend-url/api

Deployment notes
- Backend: configured for Render using `backend/render.yaml`. When deploying, set the environment variables in the Render dashboard (MONGODB_URI, JWT_SECRET, EMAIL_* and FRONTEND_URL).
- Frontend: configured for Vercel. Set `VITE_API_URL` in Vercel environment variables to your Render backend URL.

Security & post-deployment checklist
- Rotate any credentials that were accidentally committed to the repository. Do this immediately if secrets have been exposed publicly.
- Ensure `.env` files are never committed. Use `.env.example` for templates.
- Generate a strong `JWT_SECRET` (example: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`).

Testing & verification
- Backend health check: GET /api/health → should return service status JSON
- Use Postman or curl to test auth flows (register/login) and protected endpoints using JWT tokens.

Contributing & contact
- Author: Lethokuhle Mthethwa
- Repo: https://github.com/Lethokuhlemthethwa6/MediReach

License
- MIT

