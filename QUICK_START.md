# MediReach - Quick Start Guide

## 🎯 Project Overview

**MediReach** is a healthcare appointment management system supporting **SDG 3: Good Health & Well-Being**. The frontend has been completely rebuilt with 9 independent, professionally designed pages.

---

## 📂 Project Structure

```
frontend/
├── src/
│   ├── pages/                    # 9 Independent Pages
│   │   ├── Home.jsx             # Landing page with hero + stats
│   │   ├── Features.jsx         # Feature showcase (6 cards)
│   │   ├── HowItWorks.jsx       # 4-step process guide
│   │   ├── Contact.jsx          # Contact form + info
│   │   ├── Login.jsx            # User authentication
│   │   ├── Register.jsx         # New user signup
│   │   ├── PatientDashboard.jsx # Patient appointment view
│   │   ├── StaffDashboard.jsx   # Staff management view
│   │   └── Unauthorized.jsx     # Access denied page
│   │
│   ├── components/              # Shared Components
│   │   ├── Navbar.jsx          # Top navigation (responsive)
│   │   ├── Footer.jsx          # Bottom footer (3-column grid)
│   │   └── PrivateRoute.jsx    # Auth protection wrapper
│   │
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication state
│   │
│   └── App.jsx                 # Main router configuration
```

---

## 🚀 Running the Application

### Start Dev Server
```bash
cd frontend
npm run dev
```

Server runs at: **http://localhost:5173**

---

## 🗺️ Page Routes

| Page | Route | Access | Description |
|------|-------|--------|-------------|
| **Home** | `/` | Public | Landing page with hero, stats, quick links |
| **Features** | `/features` | Public | 6 feature cards + benefits |
| **How It Works** | `/how-it-works` | Public | 4-step process + user types |
| **Contact** | `/contact` | Public | Contact form + FAQ |
| **Login** | `/login` | Public | User authentication |
| **Register** | `/register` | Public | New account creation |
| **Patient Dashboard** | `/dashboard` | Protected | Patient appointment management |
| **Staff Dashboard** | `/staff` | Protected (Staff) | Staff appointment + patient mgmt |
| **Unauthorized** | `/unauthorized` | Public | Access denied error page |

---

## 🎨 Design Patterns

### Page Structure (All pages follow this)
```jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PageName = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Page content - centered with max-w-6xl */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            {/* Content here */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
```

### Form Pattern (Login, Register, Contact)
```jsx
<div className="flex-grow flex items-center justify-center">
  <div className="max-w-md w-full mx-auto px-6">
    <div className="bg-white shadow-lg rounded-xl p-8">
      <form className="space-y-4">
        {/* Form fields */}
      </form>
    </div>
  </div>
</div>
```

---

## 🧩 Key Components

### Navbar
- **Responsive**: Hamburger menu on mobile
- **Auth-Aware**: Shows different links when logged in/out
- **Sticky**: `sticky top-0 z-50`
- **Logo**: 🏥 MediReach

### Footer
- **3-Column Grid**: Quick Links | Contact Info | Social Links
- **Responsive**: Stacks on mobile
- **Sticky Bottom**: Uses `mt-auto` to stick to bottom

---

## 🎨 Color Scheme

```css
/* Primary */
Sky Blue: #0ea5e9, #3b82f6, #0284c7

/* Secondary */
Emerald: #10b981, #059669, #047857

/* Accents */
Violet: #8b5cf6
Rose: #f43f5e
Amber: #f59e0b

/* Neutrals */
Gray: #374151, #6b7280, #9ca3af
```

---

## 📱 Responsive Breakpoints

| Screen | Width | Columns |
|--------|-------|---------|
| Mobile | < 768px | 1 column |
| Tablet | 768px - 1024px | 2 columns |
| Desktop | > 1024px | 3-4 columns |

**Key Classes:**
- `md:grid-cols-2` - 2 columns on tablet+
- `lg:grid-cols-3` - 3 columns on desktop+
- `md:flex-row` - Horizontal layout on tablet+

---

## 🔐 Authentication Flow

1. User visits protected route (e.g., `/dashboard`)
2. `PrivateRoute` checks if user is logged in
3. If not → Redirect to `/login`
4. User logs in → Redirected to original route
5. Dashboard displays based on user role

**User Roles:**
- `patient` → `/dashboard` (PatientDashboard)
- `staff` or `admin` → `/staff` (StaffDashboard)

---

## ✅ Testing Checklist

### Navigation
- [ ] Logo clicks navigate to home
- [ ] All navbar links work
- [ ] Mobile menu opens/closes
- [ ] Footer links work

### Forms
- [ ] Login form validates email/password
- [ ] Register form checks password match
- [ ] Contact form shows success message
- [ ] Error messages display correctly

### Responsive
- [ ] Pages look good on mobile (< 768px)
- [ ] Layout adjusts on tablet (768px - 1024px)
- [ ] Full layout on desktop (> 1024px)

### Auth
- [ ] Protected routes redirect to login
- [ ] Login redirects to dashboard
- [ ] Logout clears auth and redirects
- [ ] Unauthorized page displays correctly

---

## 🐛 Common Issues & Fixes

### Issue: Dev server not starting
```bash
# Kill existing processes
taskkill /F /IM node.exe
# Restart
npm run dev
```

### Issue: Pages not loading
- Check browser console for errors
- Verify all imports are correct
- Ensure routes are defined in App.jsx

### Issue: Auth not working
- Check AuthContext is wrapping App
- Verify useAuth hook is imported correctly
- Check localStorage for auth token

---

## 📝 Next Development Steps

1. **Backend Integration**
   - Connect auth forms to API
   - Implement appointment CRUD
   - Add real data fetching

2. **Features to Add**
   - Appointment booking flow
   - Patient history view
   - Staff schedule management
   - Notification system

3. **Improvements**
   - Add loading skeletons
   - Implement error boundaries
   - Add toast notifications
   - Optimize images

---

## 🎯 Tech Stack

- **React**: 19.1.1
- **Vite**: 7.2.2
- **Tailwind CSS**: 4.1.17
- **React Router**: 6.20.1

**No External Icon Libraries** - Uses emoji icons (🏥, 📅, 🔔, etc.)

---

## 📞 Support

For issues or questions:
- Check `PAGE_STRUCTURE.md` for detailed page breakdown
- Review code comments in each component
- Test in browser DevTools for responsive issues

---

**Status**: ✅ All 9 pages operational
**Build**: Clean (0 errors)
**Server**: Running on http://localhost:5173
