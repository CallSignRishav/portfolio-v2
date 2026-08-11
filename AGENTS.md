# portfolio-v2 — Agent Guide

## Stack

- **Next.js 16** (React 19) with `reactCompiler: true` in next.config.ts
- **TypeScript** (strict, bundler moduleResolution)
- **Tailwind CSS v4** with `@tailwindcss/postcss` (no tailwind.config — all config in CSS via `@theme`)
- **shadcn/ui** (new-york style, RSC enabled) — components in `src/components/ui/`
- **Jotai** for client-side state (`src/lib/atoms.ts`)
- **Framer Motion** (`motion` package) — motion components in `src/components/MotionComps/`
- **React Hook Form + Zod** for contact form validation (`src/lib/schemas.ts`)
- **Nodemailer** (server action in `src/Hooks/email.ts`) for contact form submission

## Dev commands

| Command          | Action                                   |
| ---------------- | ---------------------------------------- |
| `bun run dev`    | Clean `.next` then start dev server      |
| `bun run build`  | Production build                         |
| `bun run lint`   | ESLint only (no typecheck step)          |
| `bun run prod`   | Clean, build, then start production      |
| `bun run format` | Not configured — use `prettier` directly |

## Project structure

```
src/
  app/              # Next.js App Router (single page app)
  components/       # Client components
    Header/         # Sticky sidebar nav with active section tracking
    MotionComps/    # Framer Motion wrappers
    ui/             # shadcn/ui primitives
  Hooks/            # Server actions (email.ts — "use server")
  lib/              # Utilities, schemas, types, data, atoms, env config
```

## Important quirks

- **`dev` clears `.next` on every start** via `rimraf .next && next dev`. Expect a full re-build on each run.
- **No typecheck script** — `lint` only runs ESLint. To typecheck, run `npx tsc --noEmit`.
- **Email server action** lives in `src/Hooks/email.ts` (not `src/app/api/`). It uses `"use server"` directly and is imported normally from the client component (`import { sendEmail } from "@/Hooks/email"`).
- **Env vars** are read at runtime from `process.env` in `src/lib/env.ts`. Required vars: `SERVER_URL`, `NEXT_PUBLIC_URL`, `user` (Gmail), `pass` (Gmail app password), `DOMAIN_NAME`.
- **Site content** (experiences, projects, tech skills) lives in `src/lib/informations.ts`, not in the components. Edit content there.
- **Projects section is commented out** in `AllSections.tsx` (lines 180-207); the `projects` data still exists in `src/lib/informations.ts` and is ready to re-enable.
- **Deployed on Netlify** (see README badge).
- **No testing setup** — no test runner configured.

## Code conventions

- **Prettier**: tabs, 4-space tab width, `bracketSameLine: true`, `singleAttributePerLine: true`, `prettier-plugin-tailwindcss` for class sorting.
- **Imports use `@/` path alias** (maps to `src/`).
- **`cn()` utility** from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class merging.
- **CSS variables** for theming in `globals.css` — `.dark` vars exist but the site is always dark (hardcoded gradient body in `layout.tsx`); `next-themes` is installed but has no provider.
- **shadcn/ui components** use the `@radix-ui/*` primitives (label, slot).
