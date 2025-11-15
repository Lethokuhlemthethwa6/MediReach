# MediReach Navigation & Page Structure

## 🗺️ Site Map

```
MediReach Application
│
├── 🏠 Home (/)
│   ├── Hero Section
│   ├── Discover MediReach Cards
│   │   ├── → Features
│   │   ├── → How It Works
│   │   └── → Contact
│   ├── SDG Section
│   ├── Value Propositions
│   └── Call to Action
│
├── ✨ Features (/features)
│   ├── Hero Section
│   ├── 6 Feature Cards
│   │   ├── Easy Booking
│   │   ├── Smart Reminders
│   │   ├── Role-Based Access
│   │   ├── Secure & Private
│   │   ├── 24/7 Access
│   │   └── Modern Interface
│   ├── Additional Benefits
│   └── Call to Action
│
├── 📋 How It Works (/how-it-works)
│   ├── Hero Section
│   ├── 4 Step Process
│   │   ├── 1. Create Account
│   │   ├── 2. Book Appointment
│   │   ├── 3. Get Reminders
│   │   └── 4. Attend & Follow Up
│   ├── Role-Based Workflows
│   │   ├── For Patients
│   │   └── For Staff
│   └── Call to Action
│
├── 📞 Contact (/contact)
│   ├── Hero Section
│   ├── Contact Information
│   │   ├── Email
│   │   ├── Phone
│   │   ├── Address
│   │   └── Hours
│   ├── Contact Form
│   ├── FAQ Section
│   ├── Emergency Notice
│   └── Call to Action
│
├── 🔐 Login (/login)
│   └── Authentication Form
│
├── 📝 Register (/register)
│   └── Registration Form
│
├── 👤 Patient Dashboard (/dashboard) [Protected]
│   └── Appointment Management
│
└── 👨‍⚕️ Staff Dashboard (/staff) [Protected]
    └── Staff Management Tools
```

## 📱 Navigation Structure

### Desktop Navigation (Not Logged In)
```
┌─────────────────────────────────────────────────────────────┐
│ [MediReach Logo]  Home | Features | How It Works | Contact │
│                              Sign In    [Get Started Button] │
└─────────────────────────────────────────────────────────────┘
```

### Desktop Navigation (Logged In)
```
┌─────────────────────────────────────────────────────────────┐
│ [MediReach Logo]         [Dashboard] [User Info] [Logout]  │
└─────────────────────────────────────────────────────────────┘
```

### Mobile Navigation (Not Logged In)
```
┌─────────────────────────────┐
│ [MediReach Logo]      [☰]  │
└─────────────────────────────┘
        ↓ (when opened)
┌─────────────────────────────┐
│ Home                        │
│ Features                    │
│ How It Works                │
│ Contact                     │
│ ───────────────             │
│ Sign In                     │
│ Get Started                 │
└─────────────────────────────┘
```

## 🎨 Page Layouts

### Standard Page Layout Pattern

```
┌───────────────────────────────────────────────┐
│           GRADIENT HERO SECTION               │
│  ┌─────────────────────────────────────┐     │
│  │        [Icon Badge]                 │     │
│  │     Large Page Title                │     │
│  │  with Gradient Accent Text          │     │
│  │                                     │     │
│  │    Descriptive subtitle text        │     │
│  └─────────────────────────────────────┘     │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│         MAIN CONTENT SECTION                  │
│  ┌─────────────────────────────────────┐     │
│  │  max-w-6xl mx-auto px-6            │     │
│  │                                     │     │
│  │  [Cards or Content in Grid]        │     │
│  │  ┌───┐ ┌───┐ ┌───┐                │     │
│  │  │   │ │   │ │   │                │     │
│  │  └───┘ └───┘ └───┘                │     │
│  │                                     │     │
│  └─────────────────────────────────────┘     │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│      CALL TO ACTION SECTION                   │
│  ┌─────────────────────────────────────┐     │
│  │     Large CTA Heading               │     │
│  │     Subtitle text                   │     │
│  │   [Primary CTA] [Secondary CTA]     │     │
│  └─────────────────────────────────────┘     │
└───────────────────────────────────────────────┘
```

## 🎯 Key Page Elements

### Home Page Sections
1. **Hero** - Main value proposition
2. **Stats** - 3 key metrics
3. **Discover Cards** - Navigation to Features, How It Works, Contact
4. **SDG Section** - Mission statement
5. **Value Props** - Benefits for Patients & Staff
6. **CTA** - Sign up prompt

### Features Page Sections
1. **Hero** - Feature overview
2. **Feature Grid** - 6 detailed feature cards
3. **Benefits** - Additional capabilities list
4. **CTA** - Get started or contact

### How It Works Page Sections
1. **Hero** - Process introduction
2. **Steps** - 4 detailed steps with alternating layouts
3. **Workflows** - Patient vs Staff processes
4. **CTA** - Start journey or view features

### Contact Page Sections
1. **Hero** - Contact introduction
2. **Contact Cards** - 4 ways to reach out
3. **Form + FAQ** - Two-column layout
4. **Emergency Notice** - Important disclaimer
5. **CTA** - Sign up or login

## 📐 Layout Specifications

### Container Widths
```css
max-w-6xl     /* Main content: 1152px */
max-w-4xl     /* Narrower content: 896px */
max-w-2xl     /* Text content: 672px */
```

### Spacing Scale
```css
py-16        /* Section padding: 4rem (64px) */
py-20        /* Large sections: 5rem (80px) */
py-24        /* Extra large: 6rem (96px) */
px-6         /* Horizontal padding: 1.5rem (24px) */
gap-8        /* Grid gaps: 2rem (32px) */
space-y-4    /* Vertical spacing: 1rem (16px) */
```

### Grid Layouts
```css
/* Mobile */
grid-cols-1

/* Tablet (md: 768px+) */
md:grid-cols-2

/* Desktop (lg: 1024px+) */
lg:grid-cols-3 or lg:grid-cols-4
```

## 🎨 Color Usage by Section

### Hero Sections
- Background: `gradient-hero` (sky-600 to blue-700)
- Text: White
- Accent: Emerald/Cyan gradients
- Badge: White/10 with backdrop blur

### Content Sections
- Background: Alternating `slate-50` and `white`
- Text: `slate-900` (headings), `slate-600` (body)
- Cards: White with shadow (`card-elevated`)

### Feature Cards
- Sky: Easy Booking, Contact
- Emerald: Smart Reminders, How It Works
- Violet: Role-Based Access
- Amber: Secure & Private
- Rose: 24/7 Access
- Cyan: Modern Interface

### Interactive Elements
- Primary Button: `sky-500` to `blue-600` gradient
- Secondary Button: Outlined with hover fill
- Hover States: `hover:scale-105`, `hover:shadow-xl`

## 🔗 Internal Links

### Navigation Links
```
Home           → /
Features       → /features
How It Works   → /how-it-works
Contact        → /contact
Sign In        → /login
Get Started    → /register
Dashboard      → /dashboard (patients) or /staff (staff/admin)
```

### Cross-Page Links
```
Home "Discover" cards   → /features, /how-it-works, /contact
Features CTA            → /register, /contact
How It Works CTA        → /register, /features
Contact CTA             → /register, /login
All page CTAs           → /register (primary action)
```

## 📱 Responsive Breakpoints

```css
/* Mobile First (default) */
0px - 767px

/* Tablet (md:) */
768px - 1023px

/* Desktop (lg:) */
1024px+

/* Large Desktop (xl:) */
1280px+
```

### Component Behavior

**Hero Sections**
- Mobile: Single column, smaller text (text-4xl)
- Desktop: Larger text (text-6xl/text-7xl)

**Grid Layouts**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Navigation**
- Mobile: Hamburger menu with dropdown
- Desktop: Horizontal inline links

**Cards**
- Mobile: Full width stacking
- Desktop: Grid with hover effects

## ✨ Animation Classes

```css
animate-fade-in           /* Entrance animation */
hover:scale-105          /* Card hover effect */
hover:translate-x-1      /* Arrow/button hover */
transition-all           /* Smooth transitions */
duration-300             /* Animation timing */
group-hover:scale-110    /* Icon hover in groups */
```

## 🚀 Quick Reference

### Adding a New Page

1. **Create page component** in `src/pages/NewPage.jsx`
2. **Add route** in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';
   <Route path="/new-page" element={<NewPage />} />
   ```
3. **Add navigation link** in `src/components/Navbar.jsx`:
   ```jsx
   <Link to="/new-page">New Page</Link>
   ```
4. **Follow layout pattern**:
   - Hero section with gradient
   - Content section with `max-w-6xl mx-auto px-6`
   - CTA section at bottom

### Consistent Styling Checklist

- ✅ Use `max-w-6xl mx-auto px-6` for centered content
- ✅ Apply `py-16 lg:py-24` for section spacing
- ✅ Use `card-elevated` for card components
- ✅ Include hover effects with `hover:scale-105`
- ✅ Add `animate-fade-in` for entrance animations
- ✅ Use gradient backgrounds for icons/buttons
- ✅ Maintain color consistency with palette
- ✅ Ensure mobile responsiveness with `md:` and `lg:` breakpoints

---

**Last Updated:** Layout Reorganization Complete
**Version:** 2.0 - Multi-Page Structure
**Status:** ✅ Production Ready
