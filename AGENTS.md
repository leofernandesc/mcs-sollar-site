# Repository Guidelines

## Project Structure & Module Organization

Astro source lives in `src/`: routes in `pages/`, shared shells in `layouts/`, reusable UI in `components/`, content in `data/`, and styles in `styles/`. Build-processed images belong in `src/assets/`; unchanged public files belong in `public/`. Project documentation and received references live in `docs/`. Automated checks can go in `tests/` when a test framework is introduced.

## Build, Test, and Development Commands

- `npm install` — install dependencies from `package-lock.json`.
- `npm run dev` — start the Astro development server.
- `npm run build` — generate the static site in `dist/`.
- `npm run preview` — preview the generated production build locally.

No automated test command is configured yet. Run the production build before submitting changes and document additional checks when they are added.

## Coding Style & Naming Conventions

Follow Astro and Tailwind conventions; no separate formatter or linter is configured yet. Use descriptive, lowercase kebab-case for file names where the framework permits it (for example, `site-layout.astro` or `solar-summary.ts`). Keep components and modules focused, and avoid adding dependencies without a clear need.

## Testing Guidelines

There is no test framework or coverage requirement yet. Add tests with the first meaningful application behavior, use names that describe the behavior under test (for example, `navigation.test.ts`), and document the command that runs them. Include checks for responsive layouts and accessible interactions when adding UI.

## Commit & Pull Request Guidelines

The repository has no commit history, so no local message convention is established. Use short imperative messages, optionally with a Conventional Commit prefix such as `feat: add landing page` or `fix: correct mobile navigation`. Pull requests should explain the user-visible change, list validation performed, link any related issue, and include screenshots for visual changes.

## Security & Configuration

Do not commit credentials, private keys, or environment-specific secrets. Provide an example environment file with placeholder values if configuration is needed, and document required variables without including real secrets.
