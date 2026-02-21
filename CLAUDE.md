# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BodyByAls is a marketing website for an online fitness coaching and nutrition business, built with Astro. It's a single-page site composed of section components (Hero, About, Services, Products, Transformations, Testimonials, FAQs, GetStarted) assembled in `src/pages/index.astro`.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npx prettier --write .` | Format all files |

No linting or test scripts are configured.

## Architecture

- **Framework**: Astro 5 with strict TypeScript (`@/*` alias maps to `src/*`)
- **Styling**: Bootstrap grid + custom CSS (`public/css/main.css` for base styles, `public/css/custom.css` for overrides). No CSS preprocessor or utility framework.
- **Animations**: GSAP (ScrollTrigger, SplitText), WOW.js for scroll-triggered animations, Swiper.js for carousels
- **JS**: jQuery 3.7 + plugins loaded globally via `src/layouts/Layout.astro`. Component-specific behavior uses inline `<script>` tags within each `.astro` component.
- **Icons**: Lucide Astro (`@lucide/astro`) for inline SVG icons, Font Awesome via CSS for social/star icons

## Key Patterns

- **Data-driven sections**: Components like Services, Products, Testimonials, and FAQs define data as JS object arrays in the component frontmatter, then map over them in the template.
- **Image handling**: Use Astro's `<Image>` component with `format="webp"` and `loading="lazy"`. Source images live in `src/assets/images/`; runtime-only images (hero background, decorative) go in `public/images/`.
- **CSS variables** (defined in `main.css` `:root`): `--accent-color: #008001`, `--accent-dark-color: #10542f`, `--primary-color: #0e0e0e`. Fonts: "Inter Tight" (body), "Playfair Display" (display headings).
- **Section anchors**: Each section has an ID (`#about`, `#services`, `#products`, `#transformations`, `#testimonials`, `#faqs`, `#get-started`, `#footer`) used for in-page navigation from the Header.
- **Animation classes**: `wow` + `fadeInUp`/`fadeIn` with `data-wow-delay` for staggered scroll reveals. `text-anime-style-3` for GSAP text split animations.

## Formatting

Prettier is configured at `.prettierrc.mjs`: 120 char print width, bracket same line, Astro parser plugin.
