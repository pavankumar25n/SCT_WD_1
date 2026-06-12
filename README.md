# Luminos — Responsive Landing Page

A responsive landing page for a design studio, featuring an interactive fixed navigation bar that changes style on scroll and hover.

## Features

- **Fixed navigation bar** — always visible, transparent over the hero, frosted-glass on scroll
- **Scroll-triggered nav style change** — background, blur, height and shadow all animate when the user scrolls past 40 px
- **Active link highlighting** — the current section's nav link is underlined, tracked by IntersectionObserver
- **Hover micro-interactions** — underline reveal, CTA button glow, logo mark rotation
- **Mobile hamburger menu** — animated open/close, closes on link click, outside click, or Escape key
- **Hero section** — fullscreen with animated ambient orbs and grid overlay
- **Portfolio grid** — responsive 2-column grid with hover lift effects
- **Services, About, Stats, Testimonials, Contact** sections
- **Scroll-in fade animations** — staggered reveal for cards and sections
- **Contact form** — with simulated submission feedback
- **Accessible** — ARIA labels, keyboard navigation, visible focus states, `prefers-reduced-motion` respected

## Project Structure

```
landing-page/
├── index.html   — Markup and content
├── style.css    — All styles (custom properties, responsive, animations)
├── main.js      — Scroll behaviour, nav toggle, intersection observers, form
└── README.md    — This file
```

## Getting Started

No build step required — pure HTML, CSS, and vanilla JS.

```bash
# Clone and open
git clone https://github.com/your-username/luminos-landing.git
cd luminos-landing
# Open index.html in a browser, or serve locally:
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

Works on any static host — GitHub Pages, Netlify, Vercel, Cloudflare Pages.

### GitHub Pages (quickest)

1. Push the repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, root `/`
4. Your site is live at `https://your-username.github.io/luminos-landing`

### Netlify (drag & drop)

Drag the project folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

## Customisation

All design tokens live in `:root` at the top of `style.css`. Change the accent colour, fonts, or spacing from a single place.

```css
:root {
  --accent: #a78bfa;   /* swap for any hex */
  --bg:     #09090b;
  /* … */
}
```

Fonts are loaded from Google Fonts (`Syne` + `Inter`). To go self-hosted, download the files and update the `@font-face` declarations.

## Browser Support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). `backdrop-filter` degrades gracefully in unsupported environments — the nav just shows a solid background.

## License

MIT — use freely, attribution appreciated.
