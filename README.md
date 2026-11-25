# annaarteeva.com

Personal site of Anna Arteeva: courses, in-house trainings and talks.
A single-page React app built with Vite, TypeScript and Tailwind CSS, deployed on Vercel.

## Run locally

Requires Node.js 20.19 or newer. Use npm: `package-lock.json` is the only lockfile.

```sh
npm install
npm run dev        # http://localhost:8080
```

| Script              | What it does                         |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Production build into `dist/`        |
| `npm run preview`   | Serve the production build           |
| `npm run lint`      | ESLint                               |
| `npm run typecheck` | TypeScript check without emitting    |

## Where things live

- `src/pages/Index.tsx` lists the home page sections in order; each section is a component in `src/components/`.
- `src/data/testimonials.json` holds the testimonials. Entries in the "Design & Leadership" category show in the About section, the rest under "What people say".
- `src/components/Speaking.tsx` lists talks. A talk switches from "upcoming" to past by itself after its date.
- `public/` holds images, logos and favicons, served from the site root.
- Light and dark theme: the saved or system theme is applied by a small script in `index.html` before the page paints; `ThemeToggle` switches it.

## Editing with Lovable

The project is connected to [Lovable](https://lovable.dev/projects/0f15a3b9-24a2-4d37-84f7-370f23d81646). Changes made there are committed to this repository, and pushed changes show up in Lovable. `lovable-tagger` in `vite.config.ts` only runs in development mode, for Lovable's editor.

## Deploy

Vercel builds the site with `npm run build`. `vercel.json` rewrites every path to `index.html` so client-side routes work.
