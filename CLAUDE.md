# BodyByAls

Online fitness coaching website for BodyByAls, built with Astro from the AppZen HTML template.

## Tech Stack

- **Framework:** Astro 5 (static site generation)
- **Language:** TypeScript (strict mode)
- **UI:** Bootstrap 5 (grid, components), jQuery 3.7.1
- **Icons:** Lucide (`@lucide/astro`) for component icons, Font Awesome for general icons
- **Animations:** GSAP + ScrollTrigger, WOW.js, Animate.css
- **Fonts:** Playfair Display (headings), Inter Tight (body) via Google Fonts
- **Node:** LTS (managed via mise)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build

## Project Structure

```
src/
├── pages/           # Astro pages (file-based routing)
├── layouts/         # Layout wrappers (Layout.astro)
├── components/      # Reusable components
│   ├── Header.astro, Footer.astro, Preloader.astro
│   └── index/       # Homepage section components (*Section.astro)
└── assets/          # Processed assets (images imported in components)
public/
├── css/             # Stylesheets (Bootstrap, custom, vendor)
├── js/              # Client-side scripts (jQuery, GSAP, vendor, main.js)
├── images/          # Static images
└── webfonts/        # Font files (Font Awesome, custom)
appzen/              # Original HTML template (reference only, do not modify)
```

## Conventions

- **Path alias:** `@/*` maps to `src/*` (configured in tsconfig.json)
- **Imports:** Use `@/` alias for src imports (e.g., `@/layouts/Layout.astro`)
- **Components:** Astro components (`.astro` files), no client-side framework
- **Section naming:** Homepage sections follow `*Section.astro` pattern in `src/components/index/`
- **Static assets:** Vendor CSS/JS lives in `public/`; component-specific images use `src/assets/` with Astro image optimization
- **Scripts:** Client-side JS uses `is:inline` directive in Layout.astro to avoid Astro bundling
- **Formatting:** Prettier with `printWidth: 120`, `bracketSameLine: true`, astro parser plugin
