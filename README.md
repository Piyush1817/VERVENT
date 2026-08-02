<div align="center">

<img src="public/assets/images/branding/logo.jpg" alt="Vervent Web Solutions Logo" width="180"/>

# 🔥 Vervent — Web Solutions & Digital Products

**Turning ideas into fast, scalable & meaningful digital experiences.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-B747FE?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## 🚀 Overview

**Vervent** is a digital technology partner building practical, high-quality solutions for modern businesses. This repository contains the official **Vervent Web Solutions** landing page — a modern, dark-themed **React single-page application (SPA)** converted from the original multi-page HTML site.

It features a sleek **dark/orange design**, full client-side navigation between pages, a scroll-reveal animation system, an AJAX-powered contact form, and a fully responsive layout — no full browser reloads when moving between pages. 🎨⚡

---

## ✨ Features

- 🧭 **Single-Page Application** — Client-side routing between Home, About, Services, Work & Contact with React Router.
- ⚡ **Instant Navigation** — No full page reloads; smooth, app-like transitions between routes.
- 📱 **Fully Responsive** — Mobile-first design with a hamburger menu toggle handled in React state.
- 🎬 **Scroll Reveal Animations** — IntersectionObserver-powered `.reveal` animations for a polished feel.
- 🧩 **Reusable Shell** — Shared `Header` & `Footer` components rendered across all pages.
- 📬 **AJAX Contact Form** — Spam-guarded, no-reload form submission powered by FormSubmit.
- 🌐 **SEO-Friendly Shell** — Custom fonts (Inter + Space Grotesk), Font Awesome icons, meta theme-color.
- 🔥 **Modern Visual Design** — Dark/orange branding, hero orbs, floating cards, animated circuits & glows.
- 🗺️ **Deep-Link Support** — Routes like `/contact#project-form` scroll directly to the contact form.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ **React 19** | UI components & application state |
| 🧭 **React Router 7** | Client-side routing & navigation |
| ⚡ **Vite 6** | Lightning-fast dev server & build tool |
| 🎨 **CSS3** | Custom design system & responsive layouts |
| 🔤 **Font Awesome 6** | Icons via CDN |
| 📝 **Inter / Space Grotesk** | Typography via Google Fonts |

---

## 📄 Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | 🏠 **Home** | Hero, about preview, services, selected work, process & CTA |
| `/about` | 👥 **About** | Mission, expertise, values & the team behind Vervent |
| `/services` | 🧰 **Services** | Web dev, custom software, e-commerce & UI/UX offerings |
| `/projects` | 💼 **Work** | Featured projects like DocLinker & portfolio showcase |
| `/contact` | 📬 **Contact** | Enquiry form, email, phone & location details |

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) **18+** (includes `npm`)

### 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/vervent.git
cd vervent

# 2. Install dependencies
npm install
```

### 💻 Development Server

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal (usually `http://localhost:5173`). 🎉

### 🏗️ Production Build

```bash
npm run build      # Build for production → /dist
npm run preview    # Preview the production build locally
```

---

## 📁 Project Structure

```text
vervent/
├── 📄 index.html                 # HTML entry point
├── 📄 package.json               # Project config & scripts
├── 📄 vite.config.json           # (implied) Vite configuration
├── 📄 vercel.json                # Vercel SPA rewrites
├── 📁 public/
│   ├── 📄 _redirects             # Netlify SPA redirects
│   └── 📁 assets/
│       ├── 📁 images/branding/   # Logo
│       ├── 📁 images/hero/       # Hero slides
│       ├── 📁 images/about/      # About section images
│       ├── 📁 images/services/   # Service thumbnails
│       ├── 📁 images/projects/   # Project showcase images
│       ├── 📁 images/team/       # Team member photos
│       └── 📁 images/testimonials/ # Testimonial avatars
└── 📁 src/
    ├── 📄 main.jsx               # React entry — router, header, footer
    ├── 📄 app.css                # Shell & internal page styles
    ├── 📄 home.css               # Home page styles
    ├── 📄 homeContent.html       # Home page content
    ├── 📄 aboutContent.html      # About page content
    ├── 📄 servicesContent.html   # Services page content
    ├── 📄 projectsContent.html   # Projects page content
    └── 📄 contactContent.html    # Contact page content
```

---

## 🧰 What We Do

| Service | Description |
|---------|-------------|
| 🌐 **Web Development** | Responsive, high-performance websites built around your brand & goals |
| 🧩 **Custom Software** | Scalable web apps, dashboards, APIs & workflow systems |
| 🛒 **E-Commerce** | Modern online stores with smooth customer journeys |
| 🎨 **UI / UX Design** | Clear, intuitive interfaces that make products easy to use |

### 🏗️ Featured Project — DocLinker

> 🩺 **DocLinker** is a doctor & hospital listing platform that makes healthcare discovery structured and accessible — with doctor profiles, hospital relationships, search by city & specialization, scheduling workflows, reviews and an admin approval system.

---

## 👥 The Team

| Member | Role |
|--------|------|
| 👤 **Pratham Mahida** | Product & Development |
| 👤 **Piyush Lakhwani** | Backend & Development |
| 👤 **Raj Soni** | Design & Development |
| 👤 **Kush Sharma** | Development & Solutions |

---

## 🌐 Deployment

### ▲ Vercel

`vercel.json` is included so **BrowserRouter** routes such as `/about`, `/services`, `/projects`, and `/contact` are rewritten to `index.html`:

```bash
npm run build
vercel --prod
```

### 🔷 Netlify

A `_redirects` file is already provided in `public/` containing:

```text
/* /index.html 200
```

---

## 📬 Contact

- 📧 **Email:** [verventsupport@gmail.com](mailto:verventsupport@gmail.com)
- 📞 **Phone:** [93283 89850](tel:+919328389850) · [94097 64920](tel:+919409764920)
- 📍 **Location:** Gujarat, India

> 💡 Have an idea? **Let's build it!** Head to the [Contact page](https://vervent.com/contact#project-form) and start a conversation.

---

## 📜 License

© 2026 **Vervent Web Solutions**. All rights reserved.

---

<div align="center">

**Built with 💛 by the Vervent team** · [LinkedIn](#) · [Instagram](#)

</div>

