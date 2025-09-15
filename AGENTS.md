# Repository Guidelines

## Project Structure & Module Organization
- `src/components/` reusable UI (shadcn/ui lives under `src/components/ui/`).
- `src/pages/` route views wired in `src/App.tsx` (React Router).
- `src/hooks/` custom hooks (kebab-case files starting with `use-`).
- `src/lib/` utilities and helpers.
- `public/` static assets served as-is; `index.html` at root.
- Path alias: use `@/` for imports (e.g., `@/components/Header`).

## Build, Test, and Development Commands
- `npm ci` install exact deps (Node 18+). Bun users: `bun install`.
- `npm run dev` start Vite dev server on `http://localhost:8080`.
- `npm run build` production build to `dist/`.
- `npm run build:dev` development-optimized build.
- `npm run preview` preview the production build.
- `npm run lint` run ESLint on the project.

## Coding Style & Naming Conventions
- Language: TypeScript + React (Vite). TailwindCSS for styling.
- Imports: prefer `@/` alias over relative paths.
- Components: PascalCase filenames/exports (`ToolCard.tsx`).
- Hooks: kebab-case files starting with `use-` (e.g., `use-mobile.tsx`).
- Utilities: colocate in `src/lib/`; prefer named exports.
- Linting: configured via `eslint.config.js` (React Hooks + TS). Fix issues before PRs.

## Testing Guidelines
- No test runner is configured yet. If adding tests, use Vitest + React Testing Library.
- Name tests `*.test.ts(x)` near source or under `src/__tests__/`.
- Aim for critical-path coverage (routing, forms, data fetching) and accessible queries.

## Commit & Pull Request Guidelines
- Commits: short, imperative subject lines (e.g., "Add header navigation").
- No strict Conventional Commits; keep messages clear and scoped. Optional tags like `[skip lovable]` are supported.
- PRs: include a concise description, linked issues (`Closes #123`), and screenshots/GIFs for UI changes.
- Before opening a PR: run `npm run lint` and `npm run build`; ensure local preview works.

## Security & Configuration Tips
- Env vars must be prefixed with `VITE_` and stored in `.env.local` (do not commit).
- Keep secrets out of code and `public/`.
- Avoid new global CSS; prefer Tailwind utilities and component-level styles.
