# Portfolio v2

[![Netlify Status](https://api.netlify.com/api/v1/badges/5f3cbbc0-62ca-4c83-87c2-4ede0f566dad/deploy-status)](https://app.netlify.com/projects/rishav-mondal/deploys)

Personal portfolio site for **Rishav Mondal** — a full-stack web developer.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **shadcn/ui**. Features a sticky sidebar nav with active section tracking, smooth scroll, Framer Motion animations, and a contact form backed by Nodemailer.

## Getting started

```bash
bun install
bun run dev      # Clean .next then start dev server
bun run build    # Production build
bun run prod     # Clean, build, then start production server
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

## Stack

- **Framework:** Next.js 16 (App Router, RSC)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS `@theme` config), CSS variables for theming
- **UI:** shadcn/ui (new-york style), Radix primitives, Lucide icons
- **Animation:** Framer Motion (`motion`)
- **State:** Jotai
- **Forms:** React Hook Form, Zod validation
- **Contact:** Nodemailer (Gmail SMTP)
- **Deploy:** Netlify
