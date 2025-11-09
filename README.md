# Webcap Media Portfolio

Next.js 16 App Router site for Webcap Media showcasing Wiznote and upcoming studio projects. The build includes a custom brand system, responsive marketing pages, and an updated privacy policy route.

## Tech stack

- Next.js 16 (App Router, TypeScript, React 19)
- Tailwind CSS v4 with inline design tokens in `src/app/globals.css`
- Geist Sans/Mono via `next/font`

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint against the project |
| `npm run build` | Create a production build (uses the Webpack bundler) |
| `npm start` | Serve the production build |

## Project structure

```
src/
  app/
    layout.tsx      # Global layout, metadata, header/footer
    page.tsx        # Homepage hero, Wiznote spotlight, roadmap, contact
    privacy/page.tsx# Privacy policy content
    globals.css     # Tailwind tokens + baseline styles
  components/
    Section.tsx     # Layout helper for landing page sections
    SiteHeader.tsx  # Sticky navigation with Wordmark
    SiteFooter.tsx  # Footer links + summary
    Wordmark.tsx    # Text-based Webcap Media mark
  lib/
    utils.ts        # Utility helpers (e.g., class name combiner)
public/
  og-image.svg      # Open Graph / Twitter card
  projects/wiznote/ # Wiznote logomark assets
```

## Customization notes

- Update brand colors, spacing, and typography tokens in `src/app/globals.css`.
- Add new projects to the homepage roadmap by editing `upcomingProjects` in `src/app/page.tsx`.
- The privacy policy content lives in `src/app/privacy/page.tsx`; adjust copy and contact details there.
- Place additional assets inside `public/` so they are automatically served by Next.js.

## Deployment

Deploy on any Next.js-compatible platform (e.g., Vercel, Netlify). Run `npm run build` in your pipeline to validate the production output before shipping.
