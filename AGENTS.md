<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- For navigating/exploring the workspace, invoke the `nx-workspace` skill first - it has patterns for querying projects, targets, and dependencies
- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- Prefix nx commands with the workspace's package manager (e.g., `pnpm nx build`, `npm exec nx test`) - avoids using globally installed CLI
- You have access to the Nx MCP server and its tools, use them to help the user
- For Nx plugin best practices, check `node_modules/@nx/<plugin>/PLUGIN.md`. Not all plugins have this file - proceed without it if unavailable.
- NEVER guess CLI flags - always check nx_docs or `--help` first when unsure

## Scaffolding & Generators

- For scaffolding tasks (creating apps, libs, project structure, setup), ALWAYS invoke the `nx-generate` skill FIRST before exploring or calling MCP tools

## When to use nx_docs

- USE for: advanced config options, unfamiliar flags, migration guides, plugin configuration, edge cases
- DON'T USE for: basic generator syntax (`nx g @nx/react:app`), standard commands, things you already know
- The `nx-generate` skill handles generator discovery internally - don't call nx_docs just to look up generator syntax

<!-- nx configuration end-->

---

# Grow Monorepo — Agent Guide

This document describes the structure, naming conventions, and purpose of every application in the Grow monorepo. It is the single source of truth for any coding agent working in this workspace.

## What is Grow?

**Grow** is a services company offering **Marketing**, **Consulting**, **Technology**, and **AI** services to businesses across different industries. Each combination of service and industry gets its own dedicated landing page application.

## Workspace Layout

```
apps/
├── grow/                          # Root "mother" app — all services, all industries
│
├── marketing-grow/                # Marketing services — all industries
├── consulting-grow/               # Consulting services — all industries
├── tech-grow/                     # Technology services — all industries
├── ai-grow/                       # AI services — all industries
│
├── ecommerce-grow/                # All services — E-commerce industry
│
├── marketing-ecommerce-grow/      # Marketing services — E-commerce industry
├── consulting-ecommerce-grow/     # Consulting services — E-commerce industry
├── tech-ecommerce-grow/           # Technology services — E-commerce industry
├── ai-ecommerce-grow/             # AI services — E-commerce industry
│
├── *-e2e/                         # Playwright E2E tests (one per app)
│
libs/                              # Shared libraries (future)
```

## Naming Conventions

Every app name follows a strict pattern built from three segments:

```
[service]-[industry]-grow
```

| Segment    | Values                                       | Required? |
| ---------- | -------------------------------------------- | --------- |
| `service`  | `marketing`, `consulting`, `tech`, `ai`      | No        |
| `industry` | `ecommerce` (more planned)                   | No        |
| `grow`     | Always present — the brand suffix            | **Yes**   |

### Derivation Rules

| Type                    | Pattern                       | Example                    |
| ----------------------- | ----------------------------- | -------------------------- |
| Root app                | `grow`                        | `grow`                     |
| Service-only app        | `{service}-grow`              | `tech-grow`                |
| Industry-only app       | `{industry}-grow`             | `ecommerce-grow`           |
| Service + Industry app  | `{service}-{industry}-grow`   | `marketing-ecommerce-grow` |
| E2E test project        | `{app-name}-e2e`              | `tech-ecommerce-grow-e2e`  |

### Adding a New Industry

To add a new industry (e.g. `healthcare`), create:

1. `healthcare-grow` — all Grow services for Healthcare
2. `marketing-healthcare-grow` — Marketing for Healthcare
3. `consulting-healthcare-grow` — Consulting for Healthcare
4. `tech-healthcare-grow` — Technology for Healthcare
5. `ai-healthcare-grow` — AI for Healthcare
6. Corresponding `*-e2e` projects for each

### Adding a New Service

To add a new service (e.g. `design`), create:

1. `design-grow` — Design services for all industries
2. `design-ecommerce-grow` — Design for E-commerce
3. (Repeat for every existing industry)
4. Corresponding `*-e2e` projects for each

## Services Offered

| Service    | Slug         | Description                                                                  |
| ---------- | ------------ | ---------------------------------------------------------------------------- |
| Marketing  | `marketing`  | Digital marketing, SEO, PPC, social media, content strategy, email campaigns |
| Consulting | `consulting` | Business strategy, process optimization, digital transformation advisory     |
| Technology | `tech`       | Web/mobile development, system integration, cloud infrastructure, DevOps     |
| AI         | `ai`         | AI/ML solutions, automation, data analytics, intelligent process optimization |

## Industries Served

| Industry   | Slug        | Description                                                    |
| ---------- | ----------- | -------------------------------------------------------------- |
| E-commerce | `ecommerce` | Online retail, DTC brands, marketplaces, subscription commerce |

> More industries will be added over time (e.g. healthcare, fintech, SaaS, real estate).

## App Hierarchy

```
grow (root — everything)
├── marketing-grow (marketing — all industries)
│   └── marketing-ecommerce-grow (marketing — e-commerce)
├── consulting-grow (consulting — all industries)
│   └── consulting-ecommerce-grow (consulting — e-commerce)
├── tech-grow (technology — all industries)
│   └── tech-ecommerce-grow (technology — e-commerce)
├── ai-grow (AI — all industries)
│   └── ai-ecommerce-grow (AI — e-commerce)
└── ecommerce-grow (all services — e-commerce)
    ├── marketing-ecommerce-grow
    ├── consulting-ecommerce-grow
    ├── tech-ecommerce-grow
    └── ai-ecommerce-grow
```

## Per-App Agent Guides

Each application has its own `AGENTS.md` with specific details about what the app covers, its target audience, and content direction.

| App                        | AGENTS.md Location                                                             |
| -------------------------- | ------------------------------------------------------------------------------ |
| Grow (root)                | [apps/grow/AGENTS.md](apps/grow/AGENTS.md)                                    |
| Marketing Grow             | [apps/marketing-grow/AGENTS.md](apps/marketing-grow/AGENTS.md)                |
| Consulting Grow            | [apps/consulting-grow/AGENTS.md](apps/consulting-grow/AGENTS.md)              |
| Tech Grow                  | [apps/tech-grow/AGENTS.md](apps/tech-grow/AGENTS.md)                          |
| AI Grow                    | [apps/ai-grow/AGENTS.md](apps/ai-grow/AGENTS.md)                              |
| E-commerce Grow            | [apps/ecommerce-grow/AGENTS.md](apps/ecommerce-grow/AGENTS.md)                |
| Marketing E-commerce Grow  | [apps/marketing-ecommerce-grow/AGENTS.md](apps/marketing-ecommerce-grow/AGENTS.md) |
| Consulting E-commerce Grow | [apps/consulting-ecommerce-grow/AGENTS.md](apps/consulting-ecommerce-grow/AGENTS.md) |
| Tech E-commerce Grow       | [apps/tech-ecommerce-grow/AGENTS.md](apps/tech-ecommerce-grow/AGENTS.md)      |
| AI E-commerce Grow         | [apps/ai-ecommerce-grow/AGENTS.md](apps/ai-ecommerce-grow/AGENTS.md)          |

## Tech Stack

- **Framework:** React 19 with React Router
- **Build:** Vite 7
- **Language:** TypeScript 5.9
- **Testing:** Vitest (unit), Playwright (E2E)
- **Monorepo:** Nx 22.5
- **Package Manager:** pnpm (workspaces)

## Running Apps

```bash
pnpm nx serve <app-name>         # Dev server on port 4200
pnpm nx build <app-name>         # Production build
pnpm nx test <app-name>          # Unit tests
pnpm nx e2e <app-name>-e2e       # E2E tests
```
