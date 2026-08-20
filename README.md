# Portfolio v2

[![Netlify Status](https://api.netlify.com/api/v1/badges/5f3cbbc0-62ca-4c83-87c2-4ede0f566dad/deploy-status)](https://app.netlify.com/projects/rishav-mondal/deploys)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![MIT License](https://img.shields.io/badge/License-MIT-green)](./LICENSE)

Personal portfolio site for **Rishav Mondal**, a full-stack web developer.
Live demo: [rishav-mondal.netlify.app](https://rishav-mondal.netlify.app)

## Features

- **Sticky sidebar navigation** with active-section tracking
- **Smooth scrolling** between sections
- **Framer Motion animations** for a polished, interactive feel
- **React Server Components** for fast, efficient rendering
- **Contact form** backed by Nodemailer (Gmail SMTP) with React Hook Form + Zod validation
- **Fully responsive** dark-themed design using Tailwind CSS v4

## Tech stack

| Layer         | Technology                                                 |
| ------------- | ---------------------------------------------------------- |
| **Framework** | Next.js 16 (App Router, RSC, React Compiler)               |
| **Language**  | TypeScript (strict)                                        |
| **Styling**   | Tailwind CSS v4 (CSS `@theme` config), CSS variables       |
| **UI**        | shadcn/ui (new-york style), Radix primitives, Lucide icons |
| **Animation** | Framer Motion (`motion`)                                   |
| **State**     | Jotai                                                      |
| **Forms**     | React Hook Form, Zod validation                            |
| **Contact**   | Nodemailer (Gmail SMTP)                                    |
| **Deploy**    | Netlify                                                    |

## Getting started

Prerequisite: [Bun](https://bun.sh) installed.

```bash
bun install
bun run dev      # Clean .next then start dev server
bun run build    # Production build
bun run prod     # Clean, build, then start production server
```

### Scripts

| Command         | Action                                     |
| --------------- | ------------------------------------------ |
| `bun run dev`   | Clean `.next` then start dev server        |
| `bun run build` | Production build                           |
| `bun run start` | Start production server                    |
| `bun run prod`  | Clean, build, then start production server |
| `bun run lint`  | Run ESLint                                 |

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

## Environment variables

Required vars (see `.env`):

| Variable          | Description                  |
| ----------------- | ---------------------------- |
| `SERVER_URL`      | Server-side base URL         |
| `NEXT_PUBLIC_URL` | Client-side base URL         |
| `user`            | Gmail address for Nodemailer |
| `pass`            | Gmail app password           |
| `DOMAIN_NAME`     | Domain used in metadata      |

## License

This project is licensed under the [MIT License](./LICENSE).

---

Built with 🧠 and ❤️ by [Rishav Mondal](https://rishav-mondal.netlify.app) — where logic meets passion.
