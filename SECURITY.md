# Security Policy

## Supported Versions

Only the latest commit on the `main` branch is supported. We do not maintain
older release branches; security fixes ship as new commits.

| Version | Supported          |
| ------- | ------------------ |
| `main`  | :white_check_mark: |
| Other   | :x:                |

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

Use GitHub's private vulnerability reporting:

1. Go to the [Security tab](../../security) of this repository.
2. Click **Report a vulnerability**.
3. Fill in a clear description, reproduction steps, affected paths /
   commits, and the impact you observed.

If you cannot use GitHub's private reporting, email **ospo@ospo.cc** with
the same information. PGP / encrypted mail is welcome but not required.

### What to expect

- **Acknowledgement**: within 3 business days.
- **Initial assessment**: within 7 business days — we'll let you know
  whether the report is accepted, needs more info, or is out of scope.
- **Fix & disclosure**: coordinated with you. We aim to ship a fix within
  90 days of acknowledgement; the embargo may be shorter for trivial
  issues or longer for complex ones, but we will keep you informed.

We will credit reporters in the release notes unless you ask to remain
anonymous.

## Scope

In scope:

- Source code in this repository (`app/`, `components/`, `lib/`, …).
- Build and deploy configuration (`next.config.mjs`, `.github/workflows/`).
- Dependencies pinned in `package.json` / `pnpm-lock.yaml` when the issue
  affects how this project consumes them.

Out of scope:

- Vulnerabilities in third-party services we link to (Linux Foundation,
  CNCF, etc.) — please report those upstream.
- Findings that require a compromised developer machine, an attacker
  with admin access, or social engineering of maintainers.
- Issues only reproducible against forked or modified copies of the
  project.

Thanks for helping keep the OSPO Portal and its users safe.
