# Raj Kushwaha — Portfolio

High-performance one-page portfolio built with **AstroJS**.

## ✨ Features

- Zero-JS by default (Astro's island architecture)
- Dark terminal aesthetic with electric green accent system
- Smooth scroll + intersection observer fade-up animations
- Dynamic project cards rendered from `src/data/projects.json`
- Filterable projects by category
- Responsive — mobile-first
- SEO meta tags + Open Graph
- Custom scanline + noise overlay for texture
- Interactive terminal component in About section

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Structure

```
src/
├── data/
│   ├── projects.json   # ← Add/edit projects here
│   └── info.js         # ← Skills, experience, education, contact
├── layouts/
│   └── Layout.astro    # Base HTML shell + global scripts
├── pages/
│   └── index.astro     # Single-page layout
└── styles/
    └── global.css      # All styles
public/
└── favicon.svg
```

## 📦 Adding Projects

Edit `src/data/projects.json`. Each project:

```json
{
  "id": 7,
  "title": "My New Project",
  "description": "What it does and how you built it.",
  "tags": ["Node.js", "React"],
  "category": "Full Stack",
  "github": "https://github.com/rajk5266/project",
  "live": "https://example.com",
  "featured": true,
  "year": "2025"
}
```

Available `category` values (auto-populate the filter bar):
`Backend`, `Full Stack`, `Cybersecurity`, `Security`, `Automation`

## 🚢 Deploy

```bash
# Vercel (recommended)
npx vercel

# Or Netlify
npm run build
# Upload dist/ folder
```

## 🎨 Customization

All design tokens in `src/styles/global.css` under `:root { }`.
Key colors: `--green: #00FF88`, `--bg: #080A0C`.
