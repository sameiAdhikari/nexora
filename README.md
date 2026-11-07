# Nexora — Premium Investment Platform

A componentized Next.js implementation of the Nexora investment landing page. The project preserves the complete premium light/dark design while keeping all content, interactions, dummy portfolio data, and future backend integration points easy to maintain.

## Stack

- Next.js App Router with TypeScript
- Tailwind CSS 4
- Shadcn UI primitives
- Redux Toolkit and React Redux
- Lucide React and React Icons
- Responsive light and dark themes
- Cloudflare/Vinext production runtime for the hosted Site

## Included functionality

- Responsive animated navigation
- Persistent light/dark theme with `localStorage`
- `Alt + T` keyboard theme shortcut
- Animated hero and portfolio dashboard mockup
- Responsive bento feature section
- Redux-powered market category filters
- Scroll-reveal animations and reading progress indicator
- Insights, benefits, security, learning, CTA, and footer sections
- Accessible Shadcn account placeholder dialog
- Typed dummy market, holding, insight, and learning data

All displayed investment values are illustrative. Connect your own backend, authentication, and market-data provider before using the project as a real investment application.

## Project structure

```text
app/
  layout.tsx                 Root metadata, fonts, and Redux provider
  page.tsx                   Small route entry point
  globals.css                Tailwind, Shadcn tokens, themes, and animation system

components/
  home/
    home-page.tsx            Client-side page orchestration and shared effects
    header.tsx
    hero.tsx
    trust-marquee.tsx
    features.tsx
    portfolio-showcase.tsx
    markets.tsx
    insights.tsx
    why-nexora.tsx
    security.tsx
    learning.tsx
    final-cta.tsx
    footer.tsx
    account-dialog.tsx
  nexora/
    brand.tsx                Nexora and company marks
    charts.tsx               Reusable SVG chart visuals
  ui/                        Shadcn UI components

lib/
  features/ui/ui-slice.ts    Typed Redux UI state
  hooks.ts                   Typed Redux hooks
  nexora-data.ts             Typed demo content and market datasets
  store.ts                   Redux store configuration

public/assets/               Hero, insight, security, education, and CTA artwork
```

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Production checks

```bash
npx tsc --noEmit
npm run build
```

## Connect your backend later

The best starting points are:

- Replace the data in `lib/nexora-data.ts` with API or server-component data.
- Replace `AccountDialog` with your Better Auth sign-in/sign-up routes.
- Move real portfolio and market state into dedicated Redux or TanStack Query features.
- Keep secrets and private API credentials server-side; never place them in client components.

## Hosted preview

The owner-private hosted version is available at:

<https://nexora-invest.khadkan73.chatgpt.site>
