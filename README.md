# <SM> // Sourabh Mahiya — Developer Portfolio

A Neo-Brutalist, retro-terminal inspired developer portfolio built with **React**, **Vite**, and **React Router**. Designed with high-contrast aesthetics, hard offset shadows, custom scroll-triggered animations, and a mobile-first bottom dock navigation architecture.

## ✨ Key Features

* **Neo-Brutalist UI Architecture:** Crisp `3px` solid borders, offset neo-brutalist box shadows, custom grid patterns, and `Space Mono` typography.
* **Scroll-Triggered Staggered Animations:** Hardware-accelerated CSS transitions (`cubic-bezier`) paired with the native `IntersectionObserver` API for directional card entrances (`.slide-left`, `.slide-up`, `.slide-right`, `.scale-up`).
* **Adaptive Mobile Dock Navigation:** Desktop multi-section top bar that transforms on mobile viewports (`<= 768px`) into a compact `<SM>` top header and a fixed 5-tab bottom navigation dock with active route tracking.
* **Interactive Project Showcase:** Home page 70/30 split carousel for featured builds alongside a dedicated `/projects` technical archive detailing architectural highlights, tech stacks, and live links.
* **Verified Certifications Vault & Lightbox:** Dedicated `/certifications` gallery with automatic image fallback handling and an interactive full-screen modal lightbox viewer.
* **Serverless Contact Transmission:** Integrated with **EmailJS** (`@emailjs/browser`) for direct, zero-backend email delivery with real-time transmission status states (`sending`, `success`, `error`).

---

## 🛠️ Tech Stack

* **Frontend Framework:** React 18, Vite
* **Routing:** React Router DOM (`useLocation`, `Link`, hash-aware active states)
* **Styling:** Custom Modular CSS3 (Grid, Flexbox, CSS Variables, Media Queries, Keyframe Animations)
* **Email Delivery:** EmailJS (`@emailjs/browser`)
* **Typography:** Space Mono & Times New Roman

---

## 📂 Project Structure

```text
portfolio-app/
├── public/
│   ├── Certificates/             # Certification preview images
│   ├── dp.jpg                    # Profile avatar
│   ├── pc.jpg                    # Contact terminal workstation image
│   └── SOURABH_MAHIYA-CV.pdf     # Downloadable resume
├── src/
│   ├── components/
│   │   ├── AboutMe/              # 3-column profile, core focus, & academics grid
│   │   ├── ExperienceSection/    # Career timeline & CTA banner
│   │   ├── Footer/               # Site footer
│   │   └── NavBar/               # Responsive top bar & mobile bottom dock
│   ├── data/
│   │   └── portfolioData.js      # Centralized projects & certifications data
│   ├── pages/
│   │   ├── HomePage/             # Hero containers, Skills strip, & ShowcaseSection
│   │   ├── ProjectsPage/         # Full technical archive grid
│   │   ├── CertificationsPage/   # Credentials grid & modal lightbox
│   │   └── ContactMe/            # EmailJS form & direct social channels
│   ├── App.jsx
│   └── main.jsx
└── package.json
