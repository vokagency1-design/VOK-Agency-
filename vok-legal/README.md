# VOK Legal Agency — Website

A premium, multilingual marketing site for VOK Legal Agency, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 15** — App Router, Server Components, `generateMetadata`, `sitemap.ts` / `robots.ts`
- **TypeScript** — strict mode
- **Tailwind CSS** — custom black/gold luxury theme, dark mode via `class` strategy
- **Framer Motion** — page-load reveals, scroll-triggered animation, mobile menu transitions
- **next-themes** — light/dark mode with no flash-of-wrong-theme
- **Custom i18n** — English, Arabic, and Kurdish Sorani, with automatic RTL for `ar` / `ku`

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — you'll be redirected to `/en`, `/ar`, or `/ku` based on your browser's language.

## Project structure

```
app/
  [lang]/                # all localized routes live here (en | ar | ku)
    layout.tsx            # root <html>/<body>, fonts, theme provider, nav/footer
    page.tsx               # home
    services/page.tsx
    portfolio/page.tsx
    pricing/page.tsx
    about/page.tsx
    faq/page.tsx
    contact/page.tsx
  api/contact/route.ts     # form submission endpoint (wire up an email provider here)
  globals.css
  robots.ts
  sitemap.ts
components/                # shared, reusable UI components
lib/
  i18n-config.ts           # supported locales + RTL metadata
  get-dictionary.ts         # loads the right dictionary JSON per locale
  dictionaries/en.json
  dictionaries/ar.json
  dictionaries/ku.json
middleware.ts               # locale detection + redirect
```

## Adding or editing content

All copy lives in `lib/dictionaries/{en,ar,ku}.json`. Each file has the exact same shape, so add a key in one and mirror it in the other two. The 21 services live under `servicesPage.list` in each dictionary.

## Wiring the contact form

`app/api/contact/route.ts` currently logs submissions to the server console. Swap in your email provider (e.g. Resend, SendGrid, Postmark) or a CRM webhook where indicated by the `TODO` comment.

## Deployment

Any Next.js-compatible host works (Vercel, Netlify, a Node server). Run:

```bash
npm run build
npm run start
```

Before going live, replace the placeholder domain `voklegal.example.com` in `app/[lang]/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` with your real domain, and add a real Open Graph image.
