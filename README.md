# Andrea Perna – Portfolio

Personal portfolio of Andrea Perna, automation engineer and Ph.D. student in the Rainbow Team (IRISA/CNRS, Rennes).

**Live site:** https://gradiek.com

Built with **React 18**, **Vite 6** and **Tailwind CSS 4**.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build locally
npm run lint
```

## Deployment

The site is hosted on **Netlify** (project `gradiek`) and deploys automatically on every push to `main`.

- Build command: `npm run build`, publish directory: `dist`
- Domains: `gradiek.com` (primary), `www.gradiek.com`, `gradiek.it`, `www.gradiek.it`
- DNS is managed in Squarespace Domains: `A @ → 75.2.60.5` and `CNAME www → gradiek.netlify.app`
- `public/_redirects` sends the `.it` domains to `https://gradiek.com`

## Structure

```
public/
├── _redirects              # Netlify redirect rules
└── favicon.svg
src/
├── assets/                 # gallery photos
├── components/
│   ├── navLinks.js         # section anchors shared by the menus
│   ├── Navbar.jsx
│   ├── MobileMenu.jsx
│   ├── LoadingScreen.jsx
│   ├── RevealOnScroll.jsx
│   └── sections/           # Home, About, Skills, Projects, Gallery, Contact
├── App.jsx
├── index.css               # Tailwind import, global styles, animations
└── main.jsx
```

Content (education, experience, skills, projects, contacts) lives directly in the matching file under `src/components/sections/`.
