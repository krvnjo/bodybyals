# BodyByAls Website

A fitness coaching website built with Astro for Coach Anton Soler's BodyByAls brand.

## 🚀 Tech Stack

- **Framework:** Astro
- **Styling:** Bootstrap 5, Tailwind CSS, Custom CSS
- **Animations:** WOW.js, Swiper.js
- **Icons:** Lucide Astro, Font Awesome

## 📁 Project Structure

```text
/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Preloader.astro
│   │   └── index/
│   │       └── ...
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── services.astro
│       ├── products.astro
│       ├── testimonials.astro
│       ├── faqs.astro
│       └── 404.astro
└── package.json
```

## 🧞 Commands

| Command           | Action                                 |
|:------------------|:---------------------------------------|
| `npm install`     | Install dependencies                   |
| `npm run dev`     | Start dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`     |
| `npm run preview` | Preview build locally before deploying |

## 🚀 Deployment

### Manual / Static Hosting

1. Run `npm run build` to generate the `dist/` folder
2. Upload the contents of `dist/` to your hosting provider (cPanel, FTP, etc.)
