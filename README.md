# Travel Website

A Next.js (App Router) travel website integrated with Sanity CMS for content management. Built with TypeScript, Tailwind CSS, and Sanity studio for editorial content.

## Features

- Next.js App Router and server components
- Sanity CMS integration (project: `db5nen6r` by default)
- Tailwind CSS + PostCSS
- TypeScript and ESLint
- Reusable components for destinations, tips, and posts

## Tech stack

- Next.js
- React
- Sanity (CMS)
- Tailwind CSS
- Styled Components
- TypeScript

## Quick Start

Prerequisites:

- Node.js (v18 or newer recommended)
- npm, pnpm, or yarn

Setup and run locally:

```bash
# install dependencies
npm install

# run the Next.js dev server
npm run dev

# build
npm run build

# start production server
npm run start

# lint
npm run lint
```

Sanity studio (in-project):

```bash
cd sanity
# if you have the CLI installed globally
sanity start
# or using npx
npx sanity start
```

## Environment variables

The project reads Sanity settings from environment variables. Defaults are provided in `sanity/env.ts`.

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project id (default: `db5nen6r`)
- `NEXT_PUBLIC_SANITY_DATASET` — dataset name (default: `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION` — API version (default: `2026-01-19`)

Create a `.env.local` at the repository root and set values when needed:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-19
```

## Project structure (high-level)

- `app/` — Next.js App Router pages and layout
- `components/` — UI components and reusable pieces
- `lib/` — helper utilities
- `public/` — static assets
- `sanity/` — Sanity studio, schemas and studio config

## Scripts

- `npm run dev` — Start Next.js development server
- `npm run build` — Build production assets
- `npm run start` — Run the production server
- `npm run lint` — Run ESLint

## Deployment

Recommended: deploy the Next.js app on Vercel. Configure the Sanity project and environment variables in the Vercel dashboard. If you deploy Sanity Studio separately, follow Sanity's hosting docs.

## Contributing

Contributions are welcome. Open an issue or submit a pull request with a clear description and tests/examples when applicable.

## License

This project does not include a license file. Add a `LICENSE` file (for example, MIT) if you want to make the project open source.

---

For more details about the codebase, open the `app/`, `components/`, and `sanity/` folders.
