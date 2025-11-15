# 🚀 Deployment Checklist - MediReach

## Pre-Deployment Checklist

### Backend (Render)

- [ ] **MongoDB Atlas Setup**
  - [ ] Database created
  - [ ] User created with strong password
  - [ ] Network access configured (0.0.0.0/0)
  - [ ] Connection string obtained

- [ ] **Email Service Setup**
  - [ ] Gmail app password generated
  - [ ] Email credentials ready

- [ ] **Environment Variables Ready**
  - [ ] `MONGODB_URI`
  - [ ] `JWT_SECRET` (32+ characters)
  - [ ] `EMAIL_USER` and `EMAIL_PASSWORD`
  - [ ] `FRONTEND_URL` (will update after frontend deployment)

- [ ] **Code Preparation**
  - [ ] All dependencies in package.json
  - [ ] server.js tested locally
  - [ ] No console.logs with sensitive data
  - [ ] Error handling implemented

### Frontend (Vercel)

- [ ] **Code Preparation**
  - [ ] All components working locally
  - [ ] No hardcoded API URLs (using environment variables)
  - [ ] Build tested (`npm run build`)

- [ ] **Environment Variables Ready**
  - [ ] `VITE_API_URL` (will update after backend deployment)

---

## Deployment Steps

### Phase 1: Deploy Backend (Render)

1. **Create Render Account**
   - Go to https://render.com
   - Sign up with GitHub

2. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Select your repository

3. **Configure Service**
   ```
   Name: medireach-api
   Region: Oregon (or closest to you)
   Branch: main
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   Plan: Free
   ```

4. **Add Environment Variables**
   ```
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_very_long_secret_key_here
   JWT_EXPIRE=7d
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_FROM=MediReach <noreply@medireach.com>
   FRONTEND_URL=https://your-frontend-url.vercel.app (add later)
   REMINDER_CRON_SCHEDULE=0 9 * * *
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (5-10 minutes)
   - Copy the backend URL (e.g., `https://medireach-api.onrender.com`)

6. **Test Backend**
   - Visit: `https://your-backend-url.onrender.com/api/health`
   - Should see: `{"success": true, "message": "MediReach API is running"}`

### Phase 2: Deploy Frontend (Vercel)

1. **Create Vercel Account**
   - Go to https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository

3. **Configure Project**
   ```
   Framework Preset: Vite
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Add Environment Variable**
   ```
   VITE_API_URL=https://your-backend-url.onrender.com/api
   ```
   (Use the backend URL from Phase 1)

5. **Deploy**
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)
   - Copy the frontend URL (e.g., `https://medireach.vercel.app`)

### Phase 3: Update Backend with Frontend URL

1. **Go to Render Dashboard**
2. **Select your backend service**
3. **Environment Variables**
4. **Update `FRONTEND_URL`**
   ```
   FRONTEND_URL=https://your-frontend-url.vercel.app
   ```
5. **Save** (will trigger automatic redeployment)

---

## Post-Deployment Testing

### Backend Tests
```bash
# Health check
curl https://your-backend-url.onrender.com/api/health

# Root endpoint
curl https://your-backend-url.onrender.com/

# Register user (use Postman or curl)
curl -X POST https://your-backend-url.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

### Frontend Tests
- [ ] Open frontend URL in browser
- [ ] Homepage loads correctly
- [ ] Register new user
- [ ] Login with credentials
- [ ] Create appointment
- [ ] Check email for confirmation
- [ ] View appointments
- [ ] Update appointment
- [ ] Logout and login again

### Email Tests
- [ ] Register → Should receive welcome email (if implemented)
- [ ] Book appointment → Should receive confirmation
- [ ] Wait for cron job (or test manually) → Should receive reminder

---

## Troubleshooting Deployment

### Backend Issues

**Problem**: Build failed
```
Solution: 
- Check package.json for correct dependencies
- Verify Node version compatibility
- Check Render build logs
```

**Problem**: Application error / Won't start
```
Solution:
- Check environment variables are set correctly
- Verify MongoDB connection string
- Check Render logs for errors
- Ensure PORT is set to 5000 or use process.env.PORT
```

**Problem**: Can't connect to MongoDB
```
Solution:
- Verify MongoDB Atlas network access (0.0.0.0/0)
- Check connection string format
- Verify database user permissions
- Check MongoDB Atlas logs
```

### Frontend Issues

**Problem**: Build failed
```
Solution:
- Run 'npm run build' locally to test
- Check for TypeScript/ESLint errors
- Verify all imports are correct
```

**Problem**: API calls failing (CORS)
```
Solution:
- Verify FRONTEND_URL in backend .env
- Check VITE_API_URL in frontend .env
- Verify CORS settings in backend server.js
```

**Problem**: Environment variables not working
```
Solution:
- Vercel requires 'VITE_' prefix for variables
- Redeploy after adding/changing variables
- Check variable names match exactly
```

---

## Monitoring & Maintenance

### Render (Backend)
- Check logs regularly: Dashboard → Logs
- Monitor usage: Free tier has limits
- Set up alerts (optional)

### Vercel (Frontend)
- Check deployments: Dashboard → Deployments
- Monitor analytics (if enabled)
- Check for build errors

### MongoDB Atlas
- Monitor database size (Free tier: 512MB)
- Check connection count
- Review slow queries

---

## Update & Redeploy

### Backend Updates
1. Make changes locally
2. Test locally
3. Commit to GitHub
4. Push to main branch
5. Render auto-deploys from GitHub

### Frontend Updates
1. Make changes locally
2. Test locally (`npm run dev`)
3. Test build (`npm run build`)
4. Commit to GitHub
5. Push to main branch
6. Vercel auto-deploys from GitHub

---

## Performance Tips

### Backend (Render Free Tier)
- ⚠️ **Spins down after 15 minutes of inactivity**
- First request after spindown takes 30-60 seconds
- Keep alive with periodic health checks (optional)

### Frontend (Vercel)
- ✅ Always active
- ✅ Global CDN
- ✅ Fast load times

### Database (MongoDB Atlas Free Tier)
- ✅ 512MB storage
- ✅ Shared RAM
- ✅ Good for 100+ users

---

## Security Checklist

- [ ] JWT_SECRET is strong and unique
- [ ] MongoDB user has appropriate permissions only
- [ ] Email credentials are secure (app password, not main password)
- [ ] No sensitive data in GitHub repository
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Helmet middleware active
- [ ] Input validation on all routes

---

## Going Live Checklist

- [ ] Backend deployed and tested
- [ ] Frontend deployed and tested
- [ ] All environment variables set correctly
- [ ] Email service working
- [ ] Cron jobs running (check logs)
- [ ] Test all user roles (patient, staff, admin)
- [ ] Test appointment flow end-to-end
- [ ] Test email reminders
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (automatic on Vercel/Render)

---

## Custom Domain (Optional)

### Vercel (Frontend)
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as shown
4. Wait for DNS propagation

### Render (Backend)
1. Go to Service Settings → Custom Domain
2. Add your domain
3. Configure DNS records
4. Wait for SSL certificate

---

## Support Resources

- **Render Docs**: https://render.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Atlas Docs**: https://www.mongodb.com/docs/atlas/
- **Stack Overflow**: Tag your questions appropriately

---

**Deployment Complete! 🎉**

Your MediReach application is now live and accessible worldwide!
