# Junisha — Portfolio

Personal portfolio site — a curated body of work rather than a résumé. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

Live design authority: [`docs/BRAND.md`](docs/BRAND.md) — read it before making visual changes.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Structure

```
app/
  page.tsx              Homepage
  work/[slug]/page.tsx   Individual case-study pages
  globals.css            Design tokens, fonts, motion keyframes

components/
  Opening.tsx            Hero — name, letter-reveal line, CTA
  SelectedWork.tsx        Real professional/founder work (click-to-select)
  IndependentStudies.tsx  Independent strategy studies (vertical stack)
  CuriousBuilds.tsx       Lab / builds-in-progress placeholder
  Writing.tsx             Enterprise Decision Design pointer
  Footer.tsx              About + contact
  Header.tsx              Persistent nav

lib/
  data.ts                All content — profile, experience, case studies
  textReveal.ts           Shared letter-reveal animation helper

docs/
  BRAND.md               Design system and brand authority

public/work/             Case-study imagery/logos
```

## Content model

All copy lives in `lib/data.ts`, typed and structured so every case study explicitly declares:

- `kind` — `founder`, `professional`, `independent-study`, or `curious-build`
- `epistemicStatus` — `actual-outcome`, `recommendation`, `hypothesis`, `projection`, or `experiment`
- `featured` — whether it appears in the homepage's Selected Work section

This keeps a clear line between **real shipped/founder work** (Bunawat, Fab.com/Hem) and **independent product studies** (Snapmint, Koskii, Atomberg) — strategy exercises on real companies, not company engagements.

## Notes

- Fonts (New Spirit / New Hero) are not yet supplied — `--font-spirit` and `--font-hero` currently both map to Geist as placeholders; see `docs/BRAND.md` for the intended typographic system.
- The Bunawat video/imagery is sourced from a third party's public case study for local-prototype use — see the `TODO(rights)` comment in `components/BunawatFeature.tsx` before using it in production.
