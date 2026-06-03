# OSPO Internal Portal

[中文](./README-zh-hans.md) | English

A static internal portal for an Open Source Program Office — a single hub for
open source strategy, projects, compliance, governance, resources, news, and
foundation memberships.

## Features

- **Home** — multi-image hero carousel, latest open source news, vision /
  mission / responsibilities, team, foundation & industry memberships
  (Linux Foundation, CNCF, AAIF, TODO Group, OpenSSF, ASF), curated links
- **Capabilities** — milestone timelines with auto-derived progress
- **Projects** — internal projects, external contributions, public OSS
- **Compliance** — license metrics, policies, knowledge base, SCA tooling,
  supply chain health (overall score + 5 dimensions)
- **Governance** — policies, org structure, operating procedures
- **Resources** — processes, guides, success stories (with search)
- **Open Source Community** — outbound link to the internal community
- Full **English / 简体中文** UI, persisted via `localStorage`
- Dark / light / system theme

## Stack

Next.js 15 (App Router, static export) · React 19 · TypeScript · Tailwind CSS
· shadcn/ui (Radix) · embla-carousel · vitest

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck    # tsc --noEmit
pnpm test         # vitest run
pnpm build        # static export to ./out
```

Requires Node 20+ and pnpm 9+. Optional env: `NEXT_PUBLIC_INTERNAL_GIT_BASE`
(see `.env.example`).

## Layout

```
app/                    # routes (one page.tsx + layout.tsx per route)
components/             # feature components and shadcn/ui primitives
lib/data/               # all hardcoded content (projects, foundations, news…)
lib/i18n/locales/       # en.json / zh.json (parity-tested)
public/foundations/     # vendored foundation logos
tests/                  # vitest unit tests
```

## Contributing & security

- Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a PR.
- Report security issues per [SECURITY.md](./SECURITY.md) — do **not** open
  a public issue for vulnerabilities.
- Agents (AI coding assistants) should also read [AGENTS.md](./AGENTS.md).

## License

MIT — see [LICENSE](./LICENSE).

Community: [https://ospo.cc](https://ospo.cc)
