---
status: implemented
title: Minimal Hello World Page
---

Context: the project currently contains only `README.md` and `env.example`. The full app scaffold must be created.

1. Create the Vite + React + TypeScript project baseline at the repo root: `package.json` (ESM, npm, scripts for dev/build/preview), `tsconfig.json` + `tsconfig.node.json` with a `@/*` → `src/*` path alias, `index.html` pointing at `/src/main.tsx`, and `.gitignore`. Outcome: `npm install && npm run dev` is able to boot the app.
2. Create `vite.config.ts` registering the React plugin, `@tailwindcss/vite`, and `@tanstack/router-plugin/vite` (file-based routing on `src/routes`), plus the `@/` alias resolution matching tsconfig. Outcome: routes and Tailwind compile automatically; `src/routeTree.gen.ts` is generated on dev/build and is never hand-edited.
3. Create `src/styles/global.css` containing exactly `@import "tailwindcss";` as its first line. Outcome: Tailwind v4 utilities available app-wide.
4. Create `src/main.tsx` that imports `./styles/global.css` once, builds the router from the generated `src/routeTree.gen.ts`, and mounts `RouterProvider` into the `#root` element in StrictMode. Outcome: app renders through TanStack Router.
5. Create `src/routes/__root.tsx` as the app shell: a root route rendering an `<Outlet />` inside a full-height, white-background wrapper with default dark text. Keep it free of nav bars, banners, or placeholder branding. Outcome: a clean, empty shell.
6. Create `src/routes/index.tsx` for the `/` route: a single centered block of text reading "Hello World" — large, medium-weight, neutral dark on white, vertically and horizontally centered in the viewport using Tailwind flex/min-height utilities. No buttons, logos, counters, or extra copy. Outcome: visiting `/` shows only the centered "Hello World".
7. Verify no placeholder landing content exists anywhere in `src/routes/`; the only routes are `__root.tsx` and `index.tsx`. Outcome: no leftover starter/demo UI.
8. Run the dev server and confirm: white background, centered "Hello World", no console or type errors. Outcome: the minimal app is confirmed working.
