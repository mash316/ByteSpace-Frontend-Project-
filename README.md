# ByteSpace New

A responsive recreation of the **ByteSpace New** educational platform interface, built as a frontend assessment project for a **Jr. Software Engineer (Frontend)** role.

The project focuses on translating the provided Figma design into a clean, reusable, responsive Next.js application using modern frontend practices.

## ✨ Features

### Landing Page
- Pixel-focused recreation of the ByteSpace landing page from the provided Figma design
- Responsive layout for desktop, tablet, and mobile
- ByteSpace navigation
- Hero section
- Course search
- Course/category filtering UI
- Reusable course cards
- Course information and metadata
- Footer
- Consistent typography, spacing, colors, borders, and visual styling based on the design

### Authentication Bonus Pages
The assessment lists Login and Signup as optional bonus/extra-credit pages.

#### Sign In
- Email and password fields
- Frontend form validation
- Password show/hide functionality
- Loading state
- Error/success feedback
- Navigation to Sign Up
- Google and Facebook authentication entry points matching the design

#### Sign Up
- Name
- Email
- Password
- Confirm password
- Frontend validation
- Password show/hide functionality
- Loading state
- Navigation to Sign In
- Google and Facebook authentication entry points matching the design

### Authentication Scope
Authentication is intentionally implemented as a **frontend/demo flow** for this assessment.

No production authentication backend, database, JWT system, or OAuth server has been implemented because real authentication was not required by the assessment.

The Google and Facebook buttons reproduce the provided UI and interaction entry points. Real OAuth can be connected later through an authentication provider such as Firebase, Supabase, or a custom backend.

## 🛠️ Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **HTML5**
- **CSS**
- **Git / GitHub**
- **Vercel** for deployment

## 📁 Project Structure

```text
bytespace-new/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── sign-in/
│   │   └── page.tsx
│   └── sign-up/
│       └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── auth/
│   │   ├── AuthLayout.tsx
│   │   ├── AuthInput.tsx
│   │   ├── PasswordInput.tsx
│   │   └── AuthButton.tsx
│   └── courses/
│       ├── CourseCard.tsx
│       └── CourseGrid.tsx
│
├── data/
│   └── courses.ts
│
├── public/
│   └── images/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

> The exact file structure may vary slightly depending on the final implementation.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Enter the project directory

```bash
cd bytespace-new
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The application will automatically reload when files are changed.

## 📜 Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm start
```

Runs the production build locally.

```bash
npm run lint
```

Runs the project's linting checks.

## 🔐 Demo Authentication

The authentication pages are designed as frontend demonstration pages.

### Sign Up Flow

```text
User enters information
        ↓
Frontend validation
        ↓
Demo account/state handling
        ↓
Sign In
```

### Sign In Flow

```text
User enters email/password
        ↓
Frontend validation
        ↓
Credentials checked against demo state
        ↓
Success or error feedback
```

No real passwords should be stored or used for production authentication.

For a production implementation, the frontend would communicate with a secure authentication API or service.

## 🌐 Google & Facebook Authentication

The Google and Facebook buttons are included to match the provided design.

For this assessment, they are frontend/demo entry points rather than real OAuth authentication.

A production implementation could connect them to:

- Firebase Authentication
- Supabase Auth
- Auth.js / another authentication provider
- A custom backend OAuth implementation

A real OAuth flow would require provider configuration, client credentials, redirect URLs, secure session handling, and appropriate environment variables.

## 🎨 Design & Figma Implementation

The interface was implemented from the provided ByteSpace Figma design.

The implementation prioritizes:

- Overall page structure
- Typography
- Color palette
- Spacing
- Responsive behavior
- Card dimensions
- Border radius
- Buttons
- Navigation
- Course presentation
- Authentication page styling
- Visual consistency across pages

Rather than relying on absolute positioning for the entire page, responsive CSS, Flexbox, Grid, reusable components, and Tailwind utilities are used to preserve the design across different screen sizes.

## ♻️ Reusable Components

The project uses reusable components instead of duplicating UI.

Examples include:

- `Navbar`
- `Footer`
- `CourseCard`
- `CourseGrid`
- `AuthLayout`
- `AuthInput`
- `PasswordInput`
- `AuthButton`

Course information is kept separately from the presentation layer so course cards can be generated from structured data.

## 📱 Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive Tailwind utilities are used to adjust:

- Layout
- Grid columns
- Typography
- Spacing
- Navigation
- Form widths
- Course cards
- Authentication layouts

## ⚡ Performance & Code Quality

The implementation aims to follow common frontend engineering practices:

- Reusable React components
- TypeScript for type safety
- Clear component responsibilities
- Structured course data
- Responsive Tailwind styling
- Minimal unnecessary dependencies
- Semantic HTML where appropriate
- Client-side validation for forms
- Loading and error states
- Clean Git history

## 🔄 Git Workflow

Development can be organized using a feature branch:

```text
main
  │
  └── feature/bytespace-landing-page
```

Recommended workflow:

```bash
git checkout -b feature/bytespace-landing-page
```

Make changes and commit them:

```bash
git add .
git commit -m "Build ByteSpace landing page"
```

Push the branch:

```bash
git push -u origin feature/bytespace-landing-page
```

Then create a Pull Request into `main`.

## ☁️ Deployment

The project is intended to be deployed using **Vercel**.

Typical deployment flow:

```text
GitHub Repository
       ↓
Connect repository to Vercel
       ↓
Vercel detects Next.js
       ↓
Build
       ↓
Deploy
       ↓
Public URL
```

After deployment, the final public URL can be added here:

**Live Demo:** `<YOUR_VERCEL_URL>`

**GitHub Repository:** `<YOUR_GITHUB_REPOSITORY_URL>`

## 📋 Assessment Context

This project was created for the **Doin Tech Limited – Jr. Software Engineer (Frontend)** assessment.

The implementation focuses on the technologies and frontend practices relevant to the role:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Responsive UI development
- Figma-to-code implementation
- Reusable components
- Form handling
- Loading and error states
- Git/GitHub workflow
- Vercel deployment

## 🔮 Possible Production Improvements

If this were developed into a production application, the following could be added:

- Real authentication and authorization
- Google OAuth
- Facebook OAuth
- Secure backend API
- Database integration
- Password hashing
- Session management
- Course enrollment
- User profiles
- Payment integration
- Real course APIs
- Automated tests
- API error handling
- Server-side data fetching
- Caching and performance optimization

These features are outside the scope of the current frontend assessment.

## 👨‍💻 Author

**Masrur Hoque**

Computer Science  
BRAC University

---

Built with **Next.js + React + TypeScript + Tailwind CSS**.



## Project Description
ByteSpace Frontend landing page built with Next.js and Tailwind CSS.