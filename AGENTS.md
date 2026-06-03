# AGENTS.md

Guidance for AI coding agents working in this repository. Human contributors should
read `README.md`; agents should read **both**, but treat this file as the source of
truth for repo-specific conventions.

## Project overview

OSPO Internal Portal — a Next.js 15 (App Router) static site for an Open Source
Program Office. Six top-level routes: `/`, `/capabilities`, `/projects`,
`/governance`, `/compliance`, `/resources`. Built with TypeScript, Tailwind CSS,
shadcn/ui (Radix), and a custom React-Context-based i18n layer (zh / en).

The site is deployed as a fully static export (`next.config.mjs` sets
`output: 'export'`). There is no backend: all content lives in `lib/data/*.ts`
or `lib/i18n/locales/*.json`.

## Setup commands

```bash
pnpm install          # install dependencies (use pnpm, not npm/yarn)
pnpm dev              # start the dev server on http://localhost:3000
pnpm typecheck        # tsc --noEmit
pnpm test             # vitest run
pnpm build            # next build (static export to ./out)
```

Required tooling: Node 20+, pnpm 9+. The lockfile is `pnpm-lock.yaml` — do not
commit `package-lock.json` or `yarn.lock`.

## Project layout

```
app/                  # Next.js App Router routes
  layout.tsx          # root layout — wraps ThemeProvider + LanguageProvider
  page.tsx            # home (Hero carousel, news, team, foundations, links)
  <route>/page.tsx    # one file per route — currently all "use client"
                      # because i18n / Tabs interactions need it
  <route>/layout.tsx  # server component; exports per-route Metadata
                      # (title/description). Do NOT add "use client" here.
  compliance/_components/  # tab subcomponents (do NOT export from page.tsx)
components/
  ui/                 # shadcn/ui primitives (Card, Tabs, Sheet, Badge, Input…)
  *.tsx               # feature components (hero-carousel, foundation-card, …)
lib/
  data/*.ts           # all hardcoded content (projects, foundations, news, …)
  i18n/locales/*.json # translation dictionaries (en.json, zh.json)
  milestones.ts       # pure helpers (testable without React)
  utils.ts            # cn() etc.
tests/                # vitest unit tests (mirror lib/ structure where useful)
public/               # static assets bundled into the export
```

## Conventions agents must follow

### TypeScript & build hygiene
- **Never** re-introduce `typescript.ignoreBuildErrors` or
  `eslint.ignoreDuringBuilds` in `next.config.mjs`. They were removed
  deliberately to keep the build honest. `pnpm typecheck` must pass before
  any commit.
- All page files are statically prerendered. If you call `useSearchParams()`,
  wrap the consumer in `<Suspense>` (see `app/compliance/page.tsx` for the
  pattern) or the static export will fail with a CSR-bailout error.

### Internationalization (load-bearing)
- Every user-visible string MUST go through `t("some.key")`.
  Never hardcode English (or Chinese) text in a component.
- When adding a key, add it to **both** `lib/i18n/locales/en.json` and
  `lib/i18n/locales/zh.json`. The `tests/i18n-parity.test.ts` test enforces
  that both files expose the same key set and that no value is empty —
  PRs that break parity will fail CI.
- Missing keys are logged to the console in dev (`[i18n] Missing translation
  for "..."`). Treat that warning as a build break.

### Data layer
- Hardcoded content lives in `lib/data/*.ts`, not in page components.
  Add new content to (or alongside) the existing files:
  `site.ts`, `team.ts`, `projects.ts`, `compliance.ts`, `governance.ts`,
  `resources.ts`, `foundations.ts`, `news.ts`, `hero.ts`.
- Domain-specific types belong next to the data they describe
  (e.g. `ProjectStatus` in `lib/data/projects.ts`).
- Internal-only URLs go through `siteConfig.internalGitBase`
  (env: `NEXT_PUBLIC_INTERNAL_GIT_BASE`). Do not hardcode internal hostnames.

### Components
- UI primitives from `components/ui/` are shadcn-generated; treat them as
  vendored library code. Prefer adding a new variant (e.g. Badge `success` /
  `warning` / `info`) over inline `className` color overrides.
- Feature components live in `components/`. New shared visuals
  (cards, lists, rings) should go here, not in `app/`.
- Tab content for `app/compliance` belongs in `app/compliance/_components/`
  (the `_` prefix marks it private to the segment per Next.js convention).

### Styling
- Tailwind only. Do not add CSS-in-JS or styled-components.
- Use Tailwind theme tokens (`bg-primary`, `text-muted-foreground`) over
  raw color classes when the value is semantic. Raw colors
  (`bg-green-500`) are acceptable only for status indicators where the hue
  itself carries meaning.

### Accessibility
- Icon-only buttons must have `aria-label` (and a `<span className="sr-only">`
  for screen readers if no other accessible name is present).
- Decorative images and icons get `aria-hidden="true"` or empty `alt=""`.
- Tabs/carousels/menus should follow the patterns in `components/header.tsx`
  and `components/hero-carousel.tsx` (`aria-current`, `aria-roledescription`).

### Routing & metadata
- Each route ships its own `layout.tsx` exporting a `Metadata` object so the
  title/description differ per page. The root `layout.tsx` provides a title
  template (`%s | OSPO Portal`) — keep route titles short.

## Testing instructions

- Test runner: **vitest** (`pnpm test`). No DOM tests — keep tests in `node`
  environment unless you set up jsdom explicitly. Pure helpers (e.g.
  `lib/milestones.ts`) are easier to test than React components.
- Test files live in `tests/` and use `*.test.ts` / `*.test.tsx`.
- Do **not** import `.tsx` JSX modules from a `.test.ts` file — vitest's
  default loader does not transform JSX. Either rename the test to `.test.tsx`
  with the proper config, or extract the pure logic into a `.ts` file and
  test that (the milestones split is the canonical example).
- The i18n parity test (`tests/i18n-parity.test.ts`) is non-negotiable:
  if you add a key to one locale, add it to the other.

## CI

`.github/workflows/ci.yml` runs on push and PR:
1. `pnpm install --frozen-lockfile`
2. `pnpm typecheck`
3. `pnpm test`
4. `pnpm build`

All four must pass. If you change `pnpm-lock.yaml` you must commit it.

## Pull request expectations

- Title: imperative, concise, scoped (`feat(home): add foundation cards`).
- Description: what changed, why, and how it was verified
  (mention `pnpm typecheck && pnpm test && pnpm build` if you ran them).
- Keep diffs focused. Mixing a refactor with a new feature makes review hard.
- Never commit `.env`, secrets, or anything under `.next/` or `out/`.

## Things to avoid (lessons from past iterations)

- Do not regress `app/<route>/page.tsx` files into one giant client component
  that mixes data, layout, and tab content — split into `_components/` and
  `lib/data/` instead.
- Do not introduce `next-intl` (or any heavy i18n lib) without first removing
  the existing `LanguageProvider`. Two parallel i18n systems is worse than
  one imperfect one.
- Do not add image domains to `next.config.mjs` `images.remotePatterns`
  while `images.unoptimized: true` is set — it is a no-op and confuses
  reviewers. Use `<Image unoptimized>` per-call instead.
- Do not weaken the i18n parity test to make a PR pass. Fix the missing keys.
