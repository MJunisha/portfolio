# Brand — Junisha

This document is the **permanent visual design authority** for this portfolio. Any redesign, component, or content decision should be checked against it. Where a future change conflicts with this document, the document wins unless it is deliberately revised.

This is documentation only. It does not itself change any code, component, style, or data file in this repository.

---

## 1. Identity

The primary identity of the site is:

# Junisha

There is no logo, no monogram, no job-title identity, and no personal-brand slogan. The wordmark is the name itself, set in New Spirit (see §3).

**The portfolio is a body of work, not an online résumé.** Every decision below exists to protect that distinction.

**Deliberate, scoped exception:** the persistent top-nav bar does not show the `Junisha` wordmark — it types out "Act. Achieve. Repeat." once (letter-by-letter, holds afterward, no loop) instead. This was an explicit call, made aware it reverses the "no slogan" rule above for that one location. `Junisha` remains the identity mark everywhere else, most importantly as the large masthead at the top of the homepage (see "Signature Motion") — the nav is the only place the slogan appears in its place.

---

## 2. Primary visual reference

Reference: [The Slow Builds](https://theslowbuilds.com/) — inherited as a *principle*, not a layout to copy.

Principles inherited:

- predominantly black and white
- one memorable accent colour
- typography doing most of the visual work
- generous whitespace
- minimal UI chrome
- projects and artifacts as the primary visual material
- little dependence on cards, shadows, decoration, gradients, or complex animation

Where The Slow Builds pairs black with orange, this system pairs **black with Junisha Blue**.

---

## 3. Typography reference

Reference: [The Bunawat Store visual identity](https://www.behance.net/gallery/192041493/The-Bunawat-Store) — inherited for its *two-typeface logic*, not its brand world (see §17 for what is explicitly not inherited).

### New Spirit — voice, personality, editorial meaning

Use for:
- `Junisha` (the masthead)
- large page titles
- important project titles
- major questions
- key judgments
- pull statements
- selective large metrics

New Spirit should **not** be used for every heading. If it appears on every heading, it stops meaning anything — reserve it for the moments where the site is *saying* something, not organizing something.

### New Hero — structure, explanation, information

Use for:
- body copy
- navigation
- labels
- metadata
- captions
- project descriptions
- buttons
- timelines
- technical information
- GitHub/project metadata

### The distinction

**New Spirit = judgment / voice.**
**New Hero = system / information.**

Before setting any piece of text, ask: *is this the site making a judgment, or the site organizing information?* That answer picks the typeface. This distinction is the single most important typographic rule in this document — more important than any specific size or weight below.

---

## 4. Core palette

Extremely restrained. Do not introduce colours beyond this list.

| Token | Hex | Role |
|---|---|---|
| Ink | `#111111` | Primary typography and structural colour |
| White | `#FFFFFF` | Primary background |
| Warm White | `#FAFAF7` | Selective alternate surface, when pure white feels too stark |
| Secondary Text | `#656565` | Muted / secondary copy |
| Border / Divider | `#D9D9D4` | Hairlines, dividers, subtle structure |
| Junisha Blue | `#183BC8` | The only primary accent colour |
| Blue Hover | `#1232B2` | Hover/active state for blue elements |
| Pale Blue | `#EEF2FF` | Rare tinted surface, only when genuinely useful |

Project photography, screenshots, and artifacts are exempt — they carry their own natural colour. Everything else on the page (chrome, type, UI) stays inside this table.

### Colour principle

The page should read approximately as:

- **70–80%** white / whitespace
- **15–20%** black / typography / imagery
- **5–10%** blue accents

Blue should feel noticeable *because it is rare*, not because it covers area. Do not create large blue sections, blue backgrounds-as-decoration, or blue hero panels unless there is a specific editorial reason (e.g. a single emphasized statement, a single link, a single active state).

---

## 5. Character

**The site should feel:** editorial, intelligent, restrained, curious, human, precise, quietly confident, highly considered.

**The site should not feel:** like a SaaS landing page, like a résumé website, like a generic Product Manager portfolio, like an AI-generated site, like a dashboard, like a Framer template, like the Bunawat ecommerce brand, overly futuristic.

If a screen could be mistaken for a SaaS pricing page or a résumé PDF rendered as HTML, it has failed regardless of how well it follows the rest of this document.

---

## 6. Core design principles (non-negotiable)

1. The work is the hero.
2. Artifacts beat decoration.
3. One dominant idea per viewport.
4. Typography creates hierarchy before containers do.
5. Whitespace is structural, not empty space.
6. Blue is used for emphasis, not decoration.
7. New Spirit carries voice and judgment.
8. New Hero carries explanation and systems.
9. Avoid card grids unless the content genuinely needs cards.
10. Avoid excessive rounded rectangles.
11. Avoid decorative shadows.
12. Avoid gradients.
13. Avoid unnecessary icons.
14. Avoid generic illustrations when real work exists.
15. Project imagery supplies most of the colour.
16. Motion should feel like editorial transition, not app animation.

**Picker interaction (Selected Work):** presented as a row of compact selector tabs; clicking one reveals its full detail below, with the visual (video/diagram) doing a one-time slide-in-from-the-side + fade as it appears. This exists because an earlier `position: sticky` "stacking cards" attempt broke down once content (the Bunawat video) was taller than the viewport — sticky freezes a whole element in place rather than letting you scroll within it, so the stats below the video were never reachable. The picker is click-triggered, not scroll-triggered, so it doesn't conflict with the "nothing moves unless interacted with" rule or need a shadow/rounding exception — it's ordinary interactive-control styling (small rounded-border tabs), not decorative cards.

**Vertical stacking (Independent Product Studies):** unlike Selected Work, these three cards are short enough to comfortably fit the viewport, so the sticky-stack technique that failed for Bunawat works correctly here. Each card is `position: sticky` with an increasing `top` offset, so as the visitor scrolls, each new card slides up and settles slightly over the previous one, in a rounded, shadowed, opaque card. Whichever card is currently topmost stays sharp with an accent border; the ones receded behind it pick up a subtle blur + brightness dip (a scroll-position-driven state, not a decorative loop). This knowingly overrides principles 10 and 11 above (rounded rectangles, decorative shadows) — scoped to this one section, because the stacking illusion doesn't read without them.

---

## 7. Project-first presentation

Project previews do not behave like résumé cards (`Company / Role / Year / Skills`). They lead with the interesting problem or judgment, then follow with evidence.

Pattern:

```
01 · FOUNDER

Bunawat

Taking a forty-year-old assisted retail business online
without removing the trust that made customers buy.

[ evidence / outcome / artifact ]
```

The project statement (the judgment sentence) should often be more visually important — larger, set in New Spirit — than the metadata around it (which stays small, New Hero, secondary-text colour).

---

## 8. Signature editorial pattern — "The Decision"

A recurring case-study treatment, used as a subtle signature of the portfolio:

```
THE DECISION                         ← small, New Hero, label-style

How do you take assisted shopping     ← large, New Spirit, question
online without removing the
assistance?
```

Use sparingly — once per case study, at the moment the reader needs to understand the actual judgment being made. Do not place this pattern on every section or every project; if it appears constantly it becomes wallpaper instead of a signature.

---

## 9. Artifact rhythm

Case studies alternate rather than march through uniform heading/paragraph blocks:

```
quiet editorial moment
      ↓
large real artifact
      ↓
analysis
      ↓
artifact
      ↓
judgment
      ↓
outcome
```

Avoid the PRD cadence of `heading → paragraph → heading → paragraph → …` indefinitely. The reading experience should feel like an editorial feature — text and artifact trading the lead — not a document being scrolled.

---

## 10. Homepage philosophy

The homepage is **curated, not comprehensive.** It is not a directory of everything done to date, and it does not carry the full employment history.

Homepage sections, in spirit:

- hero
- selected work (a small number of case studies, not all of them)
- limited independent studies
- a glimpse of curious builds
- writing
- a small about/contact area

Anything that doesn't clear the bar for "selected" belongs one click deeper, not on the homepage.

---

## 11. Layout

Favor generous spacing throughout. These are recommended, not absolute — the reading-width and grid values should hold; the spacing values should be treated as a floor, not a ceiling.

| Property | Recommendation |
|---|---|
| Max page width | 1200px (`max-w-6xl`-ish container for full-bleed sections) |
| Reading width (body copy / case-study prose) | 680–720px (`max-w-2xl`–`max-w-3xl`) |
| Desktop grid | 12-column, 24px gutter, content typically spans 8–10 of 12 |
| Tablet grid | 8-column, 20px gutter |
| Mobile grid | Single column, 20–24px side gutter |
| Vertical section spacing (desktop) | 128–192px between major sections |
| Vertical section spacing (mobile) | 80–112px |
| Content spacing (within a section) | 24–48px between distinct content blocks |

Whitespace here is structural — it is one of the primary tools (alongside typography) doing the work that cards and borders do on a more conventional site. When in doubt, add space rather than a container.

---

## 12. Typography system

Font family key:
- **New Spirit** — voice / judgment (see §3)
- **New Hero** — system / information (see §3)

| Role | Family | Weight | Desktop size | Mobile size | Line height | Letter spacing |
|---|---|---|---|---|---|---|
| Junisha masthead | New Spirit | Medium/Semibold | 28–32px | 22–24px | 1.1 | −0.01em |
| Display headline | New Spirit | Semibold | 64–88px | 36–44px | 1.05–1.1 | −0.01 to −0.02em |
| H1 (page/case-study title) | New Spirit | Semibold | 48–56px | 32–36px | 1.1 | −0.01em |
| H2 (section title) | New Spirit | Medium/Semibold | 32–40px | 26–28px | 1.15 | −0.01em |
| H3 (sub-section) | New Hero | Medium | 20–24px | 18–20px | 1.3 | 0 |
| Lead (intro paragraph) | New Hero | Regular | 20–22px | 18px | 1.5 | 0 |
| Body | New Hero | Regular | 17–18px | 16px | 1.6 | 0 |
| Small (secondary copy) | New Hero | Regular | 14–15px | 14px | 1.5 | 0 |
| Metadata / labels | New Hero | Medium, uppercase | 12–13px | 12px | 1.4 | 0.06–0.1em |

**Do not set body copy smaller than 16px on mobile.** This is a hard floor, not a guideline — it protects reading comfort over visual density.

Mobile behaviour is not "shrink everything proportionally" — display and H1 sizes drop more aggressively than body/lead sizes do, so headlines stay expressive without body copy becoming cramped or oversized relative to the viewport.

---

## 13. Components

Keep component styling minimal across the board — the rules below describe restraint, not a full visual spec.

- **Navigation** — text links in New Hero, uppercase or small-caps optional, generous spacing between items. No pill backgrounds, no active-state boxes. Active/current state indicated by colour (ink vs. secondary text) or a thin underline, not a filled background.
- **Editorial links (inline, in prose)** — Junisha Blue text, no default underline; underline appears on hover/focus as a deliberate transition (see §14).
- **Buttons** — rare. When used, flat (no gradient, no shadow), either ink-on-white with a hairline border or blue-on-white with the border in blue. No pill-shaped saturation-heavy CTAs mimicking SaaS conventions. Prefer a text link with an arrow glyph over a button where either would work.
- **Project previews** — lead with the judgment sentence (New Spirit or large New Hero), metadata secondary and small. No shadow, no hover-lift. See §7.
- **Case-study hero** — title in New Spirit, one supporting line in New Hero, generous top/bottom space, no background image treatment unless it's a real artifact.
- **Metrics** — set as a plain number + label pair, New Spirit for the number when it's genuinely a headline metric, New Hero label beneath. No dashboard-style tiles, gauges, or icon badges.
- **Quotes / pull statements** — large New Spirit, minimal or no quotation-mark styling, generous surrounding whitespace instead of a card or background tint.
- **Labels** (`THE DECISION`, section kickers, category tags) — small, uppercase, New Hero, wide letter-spacing, ink or secondary-text colour (blue only if the label itself is the point of emphasis).
- **Dividers** — a single hairline in the border/divider colour (`#D9D9D4`). No decorative rules, no gradient fades.
- **Images** — full-bleed or generously margined, no rounded corners beyond a very slight radius if any, no drop shadow. Let the image be the artifact, not a "card containing an image."
- **Diagrams** — treated as artifacts, not decoration — same restraint as photography; avoid adding chrome (shadows, borders, backgrounds) beyond what makes the diagram legible.
- **GitHub / lab projects** — presented with the same judgment-first pattern as case studies, just shorter; metadata (stars, language, link) stays small and New Hero.
- **Footer** — quiet, New Hero, minimal — contact and a small set of links. Not a sitemap.

---

## 14. Motion

Motion should read as **editorial transition**, not app animation.

Use, subtly:
- text/image reveal on scroll or load
- restrained hover movement (a few px, not a bounce)
- underline transitions on links
- very slight image scaling on hover (e.g. 1.0 → 1.02)
- page transitions where they genuinely help continuity

Do not use:
- parallax for decoration
- scroll hijacking
- animated gradients
- bouncing
- floating elements
- spinning graphics
- custom cursor gimmicks

If a motion effect would look at home in a SaaS product tour, it does not belong here.

---

## 15. Signature Motion — Thought Before Movement

Motion on this portfolio is exceptionally restrained. Credibility should come from looking **useful, thoughtful, and unhurried** — not from demonstrating design sophistication through animation.

There is only **one meaningful animated moment** on the site.

### Homepage opening

`Junisha` appears immediately and confidently in New Spirit. Do not animate the letters of the name.

After a brief moment, one short line underneath the name reveals **letter by letter**, slowly and deliberately. This should feel less like a conventional "typewriter effect" and more like watching a thought form.

The sentence:

- appears only once, on initial page load
- reveals at an intentionally slow pace
- has no typing sound
- has no bouncing cursor
- does not continuously erase and rewrite itself
- does not rotate through multiple job titles
- does not loop
- does not become a gimmick

Once the sentence has appeared, it stays permanently visible.

Approximate behaviour:

- page appears
- `Junisha` is already present
- pause approximately 600–900ms
- sentence begins appearing
- characters reveal at approximately 45–70ms each
- punctuation can introduce slightly longer pauses
- once complete, animation stops permanently for that page view

Pacing should feel human rather than mechanically uniform, if that can be achieved simply — commas and full stops can create slightly longer pauses than other characters.

### The cursor

The one permitted continuing motion is an extremely subtle cursor/caret associated with the identity:

`Junisha|`

The caret:

- uses Junisha Blue
- is very thin
- blinks slowly
- has low visual dominance
- never resembles a terminal/coding aesthetic
- never distracts from the name

Suggested blink: approximately **1.1–1.4 seconds**, with a soft opacity transition rather than abrupt on/off flashing.

If this feels too much like a typing interface once implemented, remove it. An alternative is a tiny, static "thinking" mark near the identity — but do not introduce animated ellipses or loading indicators. The design should never imply that the website is loading or that AI is generating the page.

### Important motion rule

After the opening sentence has resolved, **nothing else on the page should move unless the user interacts with it.**

No:

- scroll-triggered text reveals
- floating backgrounds
- parallax
- auto-moving images
- marquee text
- animated gradients
- decorative looping motion
- staggered section entrances
- elements sliding into view while scrolling

Hover/focus feedback for interactive elements is allowed, but it should be nearly imperceptible and functional.

**Deliberate, scoped exception:** the small `↓` arrow in the "Selected work ↓" link, directly beneath the opening sentence, has a continuous, slow idle bounce (~1.8s cycle, a few pixels of travel). This was a specific call to echo a scroll-cue pattern from a reference site, made explicitly aware that it overrides the "nothing moves unless interacted with" rule above. It is scoped to that one arrow only — it does not license adding idle motion elsewhere on the site. Respects `prefers-reduced-motion` (no bounce for those users).

### Reduced motion

Respect `prefers-reduced-motion`. For those users:

- show `Junisha` immediately
- show the complete opening sentence immediately
- do not blink the caret

### Conceptual reason

The opening animation communicates: **a thought is forming. Then the work speaks for itself.**

This is the motion philosophy of the entire portfolio. The animation should make the visitor slightly curious during the first few seconds. After that, get out of their way.

---

## 16. Images

Prefer real material: product interfaces, photographs, research, documents, diagrams, working artifacts, prototypes, GitHub projects.

Avoid generic laptop/device mockups unless the physical hardware context is genuinely part of the story. A screenshot presented plainly beats the same screenshot dropped into a laptop bezel.

---

## 17. Mobile

Mobile is designed deliberately, not derived by shrinking desktop.

Preserve on mobile:
- large, expressive typography (within the 16px body floor)
- real whitespace, not compressed spacing
- artifacts at real size — don't shrink an image until it's illegible
- reading comfort (line length, line height)

Simplify layout (fewer columns, stacked structure, reordered content) rather than reducing everything uniformly in size.

---

## 18. Accessibility

- **Minimum text sizes** — body copy never below 16px on any breakpoint; metadata/labels never below 12px.
- **Contrast** — Ink (`#111111`) on White/Warm White and White on Junisha Blue both clear WCAG AA comfortably; Secondary Text (`#656565`) on White clears AA for normal-size body text — verify against Warm White (`#FAFAF7`) specifically if secondary text is placed on that surface.
- **Keyboard focus** — every interactive element (links, buttons, nav items) needs a visible focus state; a thin Junisha Blue outline/ring is the natural choice given the palette, and should never be suppressed without a visible replacement.
- **Interactive target size** — minimum ~44×44px tap target on touch devices, even where the visible link/label is smaller (pad the hit area rather than enlarging the text).
- **Alt text** — every real artifact (screenshot, diagram, photograph) gets alt text describing what it shows and why it matters in context, not a filename or "image of X." Purely decorative images get empty alt text (`alt=""`).
- **Reduced motion** — every non-essential motion effect (reveals, hover scaling, page transitions) must respect `prefers-reduced-motion: reduce` and fall back to an instant/no-motion state.

---

## 19. Important distinction from Bunawat

**Inherited from Bunawat:** New Spirit, New Hero, typographic confidence, editorial warmth.

**Not inherited from Bunawat:** the Bunawat logo, fashion-brand styling, packaging motifs, thread/yarn graphics, ecommerce visual language, or its wider colour palette.

This portfolio should never read as another Bunawat property. The typefaces travel; the brand world does not.

---

## 20. Final test

Before shipping any screen, it should pass:

1. Is the work more prominent than the interface?
2. Can I identify the main idea within three seconds?
3. Are we showing evidence instead of decoration?
4. Is blue being used deliberately?
5. Is New Spirit communicating meaning rather than being decorative?
6. Could something be removed?
7. Does this feel authored rather than templated?
8. Does the design reveal judgment rather than simply making the résumé attractive?

If a screen fails more than one of these, it needs another pass before it ships.

---

## 21. Shorthand

**The Slow Builds' restraint and project-first structure, with New Spirit + New Hero and Junisha Blue replacing orange.**

---

## Appendix — compatibility notes for this codebase

This repo is Next.js 16 (App Router) with React 19 and Tailwind CSS v4. These notes exist so a future implementation pass can apply this document without re-deriving the wiring. They are notes only — no code in this repository has been changed as part of writing this document.

- **Tokens.** The current `app/globals.css` defines colour tokens as CSS variables inside a Tailwind v4 `@theme inline` block (`--color-background`, `--color-surface`, `--color-foreground`, `--color-muted`, `--color-border`, `--color-accent`, `--color-accent-foreground`), sourced from `:root` variables with a `prefers-color-scheme: dark` override block. The palette in §4 maps onto that existing structure almost directly:
  - `--background` → White `#FFFFFF` (or Warm White `#FAFAF7` where selectively used)
  - `--surface` → Warm White `#FAFAF7`
  - `--foreground` → Ink `#111111`
  - `--muted` → Secondary Text `#656565`
  - `--border` → Border/Divider `#D9D9D4`
  - `--accent` → Junisha Blue `#183BC8`
  - `--accent-foreground` → White `#FFFFFF` (contrast against blue)
  - Two new tokens would be needed for states this document introduces: an accent-hover token (Blue Hover `#1232B2`) and a subtle-surface token (Pale Blue `#EEF2FF`) — neither exists in the current token set.
  - This is a **light-mode-first system**: the palette above has no dark-mode pairing defined by this document. A future implementation should decide explicitly whether dark mode is in scope; if so, it needs its own set of dark values, since none of the hexes in §4 were chosen with a dark surface in mind.
- **Fonts.** The current setup loads Geist and Geist Mono via `next/font/google` in `app/layout.tsx`, exposed as `--font-geist-sans`/`--font-geist-mono` and mapped to Tailwind's `--font-sans`/`--font-mono`. New Spirit and New Hero are commercial typefaces, not available via Google Fonts — implementing this document means switching to `next/font/local` with licensed font files (woff2) checked into the repo or fetched at build time, and introducing two new CSS variables in place of the Geist ones — something like `--font-spirit` (voice) and `--font-hero` (system) — rather than reusing the generic `--font-sans`/`--font-mono` naming, since the sans/mono distinction doesn't map to the voice/system distinction this document defines.
- **Existing components.** The current homepage (`components/Header.tsx`, `Hero.tsx`, `Philosophy.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Interests.tsx`, `Footer.tsx`) and case-study page (`app/work/[slug]/page.tsx`) currently use a card-and-grid-heavy pattern (rounded borders, `bg-surface` tiles, stat grids) that predates this document and does not yet reflect it — §6 principles 9–11 in particular (avoid card grids, rounded rectangles, shadows) call much of that existing visual treatment into question. Reconciling them is future implementation work, not something resolved by this document.
- **Content model.** `lib/data.ts` currently stores case studies as `sections` of `paragraphs`/`bullets` under generic headings — compatible with §9's artifact-rhythm goal in structure, but the current schema has no field for artifact/image references or for a "the decision" question, both of which a future content-model update would need to add.
