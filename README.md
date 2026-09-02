# Akshat Jain — Personal Portfolio 🚀

> **Live Website:** [https://Akshatj555.github.io](https://Akshatj555.github.io)

A modern, high-performance personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, and **Framer Motion**. Designed with an executive deep-violet dark/light theme, magnetic cursor physics, full-screen page transitions, and responsive layouts across all screen sizes.

---

## ✨ Features

- 🎨 **Classy Dark / Light Theme**: Tailored violet and indigo palette with smooth CSS variable transitions and `localStorage` persistence.
- 🟣 **Dynamic Page Wipe Transition**: Full-screen slide transitions between routes using Framer Motion.
- ⌨️ **Typewriter Hero**: Interactive cycling text highlighting core engineering roles.
- 📱 **100% Mobile & Tablet Responsive**: Custom slide-in drawer navigation with a floating glassmorphism hamburger toggle.
- 📄 **Resume Integration**: Direct PDF download (`Akshat_Jain_Resume.pdf`) and an interactive career timeline with achievements.
- 🔍 **Filterable Project Cards**: Dynamic filtering by domain (`AI / Agents`, `Backend`, `Full Stack`, `Cloud / PCF`) with smooth layout animations.
- 📊 **Animated Skill Gauges**: Viewport-triggered animated progress indicators for core frameworks, databases, and cloud platforms.
- 🚀 **GitHub Actions CI/CD**: Automatic static HTML export and deployment to GitHub Pages on push to `main`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Static HTML Export)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Google Fonts via `next/font` ([Syne](https://fonts.google.com/specimen/Syne), [Inter](https://fonts.google.com/specimen/Inter), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono))
- **Styling**: Vanilla CSS Modules (Glassmorphism & Design Tokens)
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions

---

## 📂 Project Structure

```text
d:\MyPortfolio/
├── .github/workflows/
│   └── deploy.yml          # Automated GitHub Pages CI/CD pipeline
├── app/
│   ├── layout.tsx          # Root layout (fonts, providers, magnetic cursor, sidebar)
│   ├── globals.css         # Design tokens, color system, and responsive utilities
│   ├── page.tsx            # Home / Hero section with developer vector illustration
│   ├── about/              # About page (bio, quick facts, metrics, profile photo)
│   ├── skills/             # Skills page (categorized animated skill bars)
│   ├── projects/           # Projects page (filterable cards with live/code links)
│   ├── resume/             # Career timeline, education & honors
│   └── contact/            # Interactive contact form & verified social cards
├── components/
│   ├── Sidebar.tsx         # Fixed navigation sidebar with mobile drawer & theme toggle
│   ├── PageTransition.tsx  # Smooth page wipe animation wrapper
│   ├── MagneticCursor.tsx  # Custom spring physics magnetic cursor (desktop)
│   ├── ScrollReveal.tsx    # Staggered in-viewport reveal animation wrapper
│   └── ThemeProvider.tsx   # Context provider for Dark / Light mode switching
├── lib/
│   └── data.ts             # Single source of truth for portfolio content & resume data
└── public/
    ├── developer_coding.png# Hero vector illustration
    ├── profile.jpg         # Executive portrait headshot
    └── resume.pdf          # Official resume document
```

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/Akshatj555/Akshatj555.github.io.git
cd Akshatj555.github.io
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Static Export

```bash
npm run build
```

This exports the fully optimized static site into the `./out` directory.

---

## 🌐 Deploy to GitHub Pages

This repository includes a ready-to-use GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To deploy:
1. In your GitHub repository, navigate to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Push to `main`:
   ```bash
   git push origin main
   ```
4. The site will automatically build and deploy to **`https://Akshatj555.github.io`**.

---

## 📬 Connect

- **Portfolio**: [https://Akshatj555.github.io](https://Akshatj555.github.io)
- **LinkedIn**: [linkedin.com/in/akshatj555](https://www.linkedin.com/in/akshatj555/)
- **GitHub**: [github.com/Akshatj555](https://github.com/Akshatj555)
- **HackerRank**: [hackerrank.com/akshatjain325](https://www.hackerrank.com/profile/akshatjain325)
- **Email**: [akshatjain325@gmail.com](mailto:akshatjain325@gmail.com)
- **Phone**: `+91 8103117573`
