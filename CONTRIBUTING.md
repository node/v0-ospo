# Contributing

Thanks for your interest! This guide is intentionally short — read it once
and you're good.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Before pushing:

```bash
pnpm typecheck && pnpm test && pnpm build
```

All three must pass. CI runs the same commands.

## Workflow

1. **Fork & branch** — `feat/<topic>`, `fix/<topic>`, or `docs/<topic>`.
2. **Make focused changes** — one topic per PR; refactors and features
   stay in separate PRs.
3. **Add tests** for non-trivial logic. Pure helpers go in `lib/` so
   vitest can import them without JSX setup
   (see `lib/milestones.ts` + `tests/milestone-timeline.test.ts`).
4. **Localize every string** — add new copy to **both**
   `lib/i18n/locales/en.json` and `lib/i18n/locales/zh.json`. The parity
   test will fail otherwise.
5. **Open a PR** — describe what changed, why, and how you verified it.

## Where to put what

- New page content / hardcoded data → `lib/data/*.ts`
- Reusable component → `components/`
- shadcn/ui-style primitive → `components/ui/`
- Route-private subcomponents → `app/<route>/_components/`
- Pure logic that needs tests → `lib/*.ts`

## Style notes

- TypeScript everywhere; no `any` unless commented and justified.
- Tailwind only — no CSS-in-JS.
- Accessibility: icon-only buttons need `aria-label`; decorative images
  use `alt=""` or `aria-hidden="true"`.
- Keep `next.config.mjs` strict — do **not** re-enable
  `ignoreBuildErrors` or `ignoreDuringBuilds`.

## Commits

Conventional Commits encouraged but not enforced
(`feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`).

## Code of conduct

Be kind. Assume good intent. If something feels off, email
**ospo@ospo.cc** privately.

## Security

Found a vulnerability? See [SECURITY.md](./SECURITY.md) — do not open a
public issue.

## AI / agent contributions

Welcome, with attribution in the commit trailer. Agents must read
[AGENTS.md](./AGENTS.md) first; the same review bar applies as for human
PRs.
