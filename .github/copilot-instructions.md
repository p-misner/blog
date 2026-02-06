# Copilot / AI Agent quick instructions

Purpose: Short, actionable guidance to help an AI coding agent be productive in this repository.

## Quick start (commands) ✅
- Dev: `npm run dev` (Next 14 App Router; opens at http://localhost:3000)
- Build: `npm run build` (CI uses Node 20 per workflow)
- Start (prod-static): `npm run start`
- Lint: `npm run lint`

Notes: There are no test scripts configured in the repo. CI (GitHub Pages) builds with `next build` and expects a static export (see `.github/workflows/nextjs.yml`).

## Big-picture architecture 🔧
- Next.js 14 App Router is used under `src/app/` (route segments are directories containing `page.tsx`).
- Server components are the default. Files that require client behavior include the directive `"use client"` at the top (e.g., interactive pages and components).
- Styling is primarily done with `styled-components` (server-side rendering handled in `src/app/lib/registry.tsx`). Global CSS lives in `src/app/style/globals.css`.
- TypeScript with `strict: true` and `allowJs: true`; path alias `@/*` → `src/*` is configured in `tsconfig.json`.

## Project-specific conventions and patterns 📐
- Routes: create a folder under `src/app/` and add `page.tsx`; dynamic routes use `[param]` (e.g., `src/app/projects/goldenyear/[dogName]/`).
- Client components: add `"use client"` to files needing browser features (hooks, event handlers, p5, mapbox, etc.). Example: `src/app/blogposts/creativecoding/components/p5test.tsx`.
- Styles: prefer per-page/style folders (e.g., `src/app/projects/.../style/`) and share constants from `src/app/style/styleConstants.tsx`.
- Assets: put static assets in `public/` (e.g., `public/coverImages/`, `public/spriteSheets/`); images are often referenced directly. Next config disables image optimization (`images.unoptimized: true`).
- Shaders: GLSL files are imported raw using `raw-loader`. See `next.config.js` which adds a `test: /\.glsl/i` rule. Example shaders: `src/app/projects/blowflower/shaders/*.glsl`.
- Custom typings: there are project-level typing declarations under `typings/` and `src/app/typings/` (e.g., `lygia-resolve`, `raw-loader`). Update these when adding new non-TS imports.

## Integration points & env vars 🔌
- Google Analytics: uses `NEXT_PUBLIC_GOOGLE_ANALYTICS` in `src/app/components/googleAnalytics.tsx`.
- Mapbox: `mapbox-gl` is used in several pages; some CSS import is commented out (see `src/app/blogposts/mapprojections/page.tsx` and `src/app/loremipsum/page.tsx`). If adding map features, expect to provide an access token via environment vars.
- Data viz libs: `d3-geo`, `d3-geo-projection`, `@visx/visx` are in use across projects.
- p5: interactive sketches use `p5` and `react-p5` (see creative coding pages).

## Build & CI notes ⚙️
- GitHub Actions workflow at `.github/workflows/nextjs.yml` sets up Node 20 and builds for GitHub Pages.
- The workflow expects static pages output (the project has `output: 'export'` in `next.config.js`).
- If you change webpack handling (e.g., adding new file loaders), update `next.config.js` accordingly.

## Local dev & debugging tips 🐞
- When adding client-side libraries (mapbox, p5, WebGL shaders) ensure those files are loaded only in client components (use `"use client"`).
- For styled-components SSR quirks, refer to `src/app/lib/registry.tsx` — do not remove the server registry unless you replace SSR strategy.
- If TypeScript errors appear for special imports (e.g., `.glsl`, raw assets), add typings under `typings/` or `src/app/typings/` and update `tsconfig.json` include/typeRoots if needed.

## Where to look for examples 🔎
- App layout & providers: `src/app/layout.tsx` and `src/app/components/providers.tsx`.
- Styled-components SSR: `src/app/lib/registry.tsx`.
- Styling patterns and constants: `src/app/style/styleConstants.tsx` and other `src/app/*/style/*.tsx` files.
- GLSL shader imports: `src/app/projects/blowflower/shaders/` and `next.config.js`.
- p5 example: `src/app/blogposts/creativecoding/components/p5test.tsx`.

## What to avoid / limitations ⚠️
- No automated tests present; do not assume test coverage exists.
- Be careful editing build/webpack rules—some loaders (e.g., raw-loader for .glsl) are relied upon by projects.
- Environment variables like analytics/Mapbox tokens are expected to be provided by the environment (not present in repo).

---
If anything here is unclear or you'd like more coverage in any section (e.g., code examples for adding a new route, or guidance on where to add tests), tell me which area to expand and I'll iterate.