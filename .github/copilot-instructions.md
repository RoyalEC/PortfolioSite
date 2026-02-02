**Purpose**
- `copilot` guidance tailored to this repository: a Vite + React + TypeScript portfolio site using Tailwind.

**How To Run (developer commands)**
- `dev`: start the Vite dev server: `npm run dev` (runs `vite`).
- `build`: typecheck and build: `npm run build` (runs `tsc -b && vite build`).
- `preview`: preview a production build: `npm run preview`.

Example (PowerShell):
```pwsh
npm install
npm run dev
```

**Big-picture architecture**
- Frontend-only single-page app built with React + TypeScript (`src/`).
- Routing is defined in `src/App.tsx` via `react-router-dom` (see routes for `/`, `/projects`, `/skills`, `/contact`, `/resume`).
- UI is composed from `src/components/*` and pages in `src/pages/*` (each page is a route element).
- Global state for theme lives in `src/context/ThemeContext.tsx` and is wrapped around the app in `src/main.tsx`.

**Project-specific conventions & patterns**
- Pages folder is the source of truth for route components (e.g., `src/pages/Projects.tsx`).
- Components are small and presentational: look at `src/components/Navbar.tsx` and `ProjectsCarousel.tsx` for examples.
- Imports sometimes include the `.tsx` extension (see `src/main.tsx`), so keep import resolution consistent when moving files.
- Styling uses Tailwind + PostCSS. Global styles in `src/index.css` and `src/App.css`.

**Build / TypeScript notes**
- `npm run build` runs `tsc -b` first; TypeScript composite build errors will block production build. Fix TS errors, then run Vite build.
- Vite config is minimal (`vite.config.ts`) with `@vitejs/plugin-react`.

**External integrations to be aware of**
- `react-slick` + `slick-carousel` used for carousels (check `ProjectsCarousel.tsx` and ensure the slick CSS is imported where needed).
- `react-icons` used for iconography.

**Common tasks & where to do them**
- Add a new page/route: create `src/pages/MyPage.tsx` and add a `<Route path="/my" element={<MyPage/>} />` in `src/App.tsx`.
- Add a shared UI component: put in `src/components/` and import from pages; follow `Navbar.tsx` style.
- Update theme behavior: edit `src/context/ThemeContext.tsx` and `src/index.css` / Tailwind config.

**Patterns to preserve (don't change lightly)**
- The `ThemeProvider` wraps the app in `src/main.tsx` — important for dark mode classes and tailwind utilities.
- Keep Tailwind + PostCSS pipeline intact; `postcss.config.ts` and `tailwind.config.ts` are part of the build flow.

**Quick examples (concrete snippets)**
- Route example (from `src/App.tsx`):
  - ` <Route path="/projects" element={<Projects />} />`
- Theme provider usage (from `src/main.tsx`):
  - `createRoot(...).render(<ThemeProvider><App/></ThemeProvider>)`

**Files to reference when coding**
- `package.json` (scripts & deps)
- `vite.config.ts` (build server plugins)
- `src/App.tsx`, `src/main.tsx` (routing + app bootstrap)
- `src/context/ThemeContext.tsx` (global theme behavior)
- `src/components/*` and `src/pages/*` (UI and pages)

If anything above is unclear or you want more detail (tests, CI, or coding conventions), tell me which area to expand.
