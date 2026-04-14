# 🚀 Suraj Gaikwad — Personal Portfolio

A modern, 3D-enhanced personal portfolio website built with pure **HTML**, **CSS**, and **JavaScript** — no frameworks required.

---

## 📸 Preview

> **Live at:** [surajgaikwad.dev](https://surajgaikwad2004.github.io/Suraj-Portfolio-/) *(update with your actual URL)*

---

## ✨ Features

- **Animated 3D Canvas Background** — Particle network with drifting stars and connecting lines rendered on HTML5 Canvas
- **Custom Cursor** — Dot + ring cursor with smooth lag and hover expansion effect
- **Typewriter Role Rotator** — Cycles through job titles with typing/deleting animation
- **Glitch Text Effect** — Subtle cyberpunk-style glitch on the hero name
- **3D Floating Hero Card** — Mouse-tracking tilt card with spinning rainbow avatar ring
- **3D Card Tilt** — All skill, project, cert, and education cards tilt toward your cursor in 3D
- **Scroll Reveal Animations** — Elements fade up as they enter the viewport
- **Counter Animation** — Stats count up when scrolled into view
- **Dark / Light Theme Toggle** — Persisted to localStorage
- **Responsive Design** — Mobile-first, works on all screen sizes
- **Smooth Scrolling** — Animated navigation with active link tracking
- **Contact Form** — Validated form with simulated submission & success message
- **Hamburger Mobile Menu** — Slide-in navigation for small screens

---

## 🗂️ Project Structure

```
portfolio/
│
├── index.html       # Main HTML — all sections
├── style.css        # All styles, animations, responsive rules
├── script.js        # All interactivity and 3D effects
└── README.md        # This file
```

---

## 🧱 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Name, typewriter role, CTA buttons, stats counter, 3D card |
| 2 | **About** | Bio text, spinning 3D avatar with orbiting tech icons |
| 3 | **Skills** | Frontend, Backend, Database, Data Science, Tools |
| 4 | **Projects** | Featured work cards with GitHub & live demo links |
| 5 | **Experience** | Timeline of work history |
| 6 | **Education** | Academic background cards |
| 7 | **Certifications** | Credential cards with links to certificates |
| 8 | **Contact** | Email/LinkedIn/GitHub links + contact form |

---

## 🎨 Design System

### Fonts
| Role | Font | Usage |
|------|------|-------|
| Display / Headings | [Orbitron](https://fonts.google.com/specimen/Orbitron) | Section titles, card names, nav logo |
| Body | [Rajdhani](https://fonts.google.com/specimen/Rajdhani) | Paragraphs, descriptions, form inputs |
| Monospace / Labels | [Space Mono](https://fonts.google.com/specimen/Space+Mono) | Tags, labels, nav links, badges |

### Color Palette (Dark Theme)
| Variable | Value | Usage |
|----------|-------|-------|
| `--accent` | `#00f5d4` | Primary cyan-green glow color |
| `--accent2` | `#7c3aed` | Purple secondary accent |
| `--accent3` | `#f72585` | Pink/magenta tertiary accent |
| `--bg` | `#050510` | Main background |
| `--bg2` | `#0a0a1a` | Alternate section background |
| `--card` | `#0d0d22` | Card backgrounds |
| `--text` | `#e2e2f0` | Body text |
| `--text-muted` | `#7878a0` | Secondary / muted text |

### Key CSS Variables
```css
--radius:     20px    /* Card border radius */
--radius-sm:  10px    /* Input / small element radius */
--transition: 0.35s cubic-bezier(0.4,0,0.2,1)
--shadow:     0 20px 60px rgba(0,0,0,0.35)
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure & semantics |
| CSS3 | Styling, animations, 3D transforms |
| Vanilla JavaScript | All interactivity & effects |
| HTML5 Canvas API | Animated background (stars + network) |
| CSS Custom Properties | Theming system |
| Intersection Observer API | Scroll reveal & counter animations |
| Font Awesome 6.5 | Icons |
| Google Fonts | Typography |

---

## ⚡ JavaScript Features Breakdown

```
script.js
│
├── Theme Toggle          — dark/light, persisted to localStorage
├── Custom Cursor         — dot + lagging ring, hover expand
├── Canvas Background     — stars + connected node network animation
├── Typewriter            — multi-role cycling with delete/retype
├── Hero Particle Dots    — floating ambient particles in hero
├── Hero Card Tilt        — 3D mouse-tracking rotation on card
├── About Avatar Tilt     — 3D tilt on the about section avatar
├── Data-Tilt             — 3D hover effect on all [data-tilt] cards
├── Counter Animation     — number count-up on scroll into view
├── Hamburger Menu        — mobile nav open/close + outside click close
├── Scroll Reveal         — IntersectionObserver fade-up for .reveal elements
├── Active Nav Link       — highlights current section in navbar
├── Smooth Scroll         — animated anchor scrolling
├── Navbar Shadow         — box-shadow appears on scroll
└── Contact Form          — validation, simulated submit, success message
```

---

## 🚀 Getting Started

### 1. Clone or Download

```bash
git clone https://github.com/surajgaikwad2004/portfolio.git
cd portfolio
```

### 2. Open Locally

No build tools or installs needed. Just open in your browser:

```bash
# Option 1 — double-click index.html in your file explorer

# Option 2 — use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Option 3 — Python simple server
python -m http.server 8000
# Then open http://localhost:8000
```

### 3. Deploy

Deploy to any static host:

| Platform | Steps |
|----------|-------|
| **GitHub Pages** | Push to repo → Settings → Pages → Deploy from `main` branch |
| **Netlify** | Drag & drop the project folder at [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel` in the project folder |

---

## 🔧 Customization Guide

### Update Personal Info
Edit `index.html`:

```html
<!-- Hero name -->
<span class="highlight glitch" data-text="Your Name">Your Name</span>

<!-- Typewriter roles — edit in script.js -->
const roles = ['Your Role 1', 'Your Role 2', 'Your Role 3'];

<!-- Stats -->
<span class="stat-num counter" data-target="10">0</span>  <!-- change target -->

<!-- Contact email -->
<a href="mailto:your@email.com" ...>
```

### Change Accent Color
In `style.css`, update the `:root` block:

```css
:root {
  --accent:  #00f5d4;  /* Change to your preferred color */
  --accent2: #7c3aed;
  --accent3: #f72585;
}
```

### Add a New Project
Copy a project card block in `index.html` and update:

```html
<div class="project-card reveal reveal-delay-2" data-tilt>
  <div class="project-card-bg"></div>
  <div class="project-number">03</div>
  <div class="project-header">
    <div class="project-icon"><i class="fas fa-YOUR-ICON"></i></div>
    <div class="project-links">
      <a href="YOUR_GITHUB_URL" class="project-link" target="_blank"><i class="fab fa-github"></i></a>
      <a href="YOUR_LIVE_URL"   class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i></a>
    </div>
  </div>
  <div class="project-title">Your Project Title</div>
  <p class="project-desc">Your project description here.</p>
  <div class="project-stack">
    <span class="project-stack-tag">Tech 1</span>
    <span class="project-stack-tag">Tech 2</span>
  </div>
</div>
```

### Add a New Skill Card
```html
<div class="skill-card reveal" data-tilt>
  <div class="skill-card-glow"></div>
  <div class="skill-category">
    <div class="skill-icon"><i class="fas fa-YOUR-ICON"></i></div>
    <div class="skill-category-name">Category Name</div>
  </div>
  <div class="skill-tags">
    <span class="skill-tag">Skill 1</span>
    <span class="skill-tag">Skill 2</span>
  </div>
</div>
```

### Connect the Contact Form
The form currently simulates submission. To make it real, replace the `setTimeout` block in `script.js` with a service like [EmailJS](https://www.emailjs.com/) or [Formspree](https://formspree.io/):

```javascript
// Using Formspree — change form action in HTML:
// <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
// Then remove the custom JS submit handler and let it POST natively.
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `> 1100px` | Full layout — 2-col hero with 3D card visible |
| `≤ 1100px` | 3D hero card hidden, single column hero & about |
| `≤ 900px` | Contact section stacks to single column |
| `≤ 700px` | Hamburger nav, single col projects, custom cursor hidden |
| `≤ 480px` | Stacked CTA buttons, single col highlights |

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| IE 11 | ❌ Not supported |

> **Note:** CSS `conic-gradient`, `backdrop-filter`, and CSS custom properties require modern browsers.

---

## 📄 License

This project is open source under the [MIT License](LICENSE).  
Feel free to use it as a template for your own portfolio — just give a star ⭐ if it helped!

---

## 👤 Author

**Suraj Gaikwad**

- 🌐 Portfolio: [surajgaikwad.dev](https://surajgaikwad.dev)
- 💼 LinkedIn: [linkedin.com/in/suraj-gaikwad-b28b70201](https://www.linkedin.com/in/suraj-gaikwad-b28b70201/)
- 🐙 GitHub: [github.com/surajgaikwad2004](https://github.com/surajgaikwad2004)
- 📧 Email: surajgaikwad1305@gmail.com

---

<div align="center">

Made with ❤️ by Suraj Gaikwad

⭐ Star this repo if you found it useful!

</div>
