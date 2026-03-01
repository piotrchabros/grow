# Tech Grow — Technology Services Landing Page

**App name:** `tech-grow`
**Path:** `apps/tech-grow`
**Type:** Service-specific app
**Service scope:** Technology
**Industry scope:** All industries

## Purpose

Landing page dedicated to Grow's technology services across all industries. This app positions Grow as a technology partner that designs, builds, and scales digital products and infrastructure.

## Target Audience

CTOs, VP of Engineering, technical founders, and product leaders looking for a development partner to build, modernize, or scale their technology stack.

## Services Highlighted

- **Web Development** — Custom web applications, SPA/SSR, progressive web apps, responsive design
- **Mobile Development** — Native iOS/Android, cross-platform (React Native, Flutter), mobile-first design
- **Cloud Infrastructure & DevOps** — AWS/GCP/Azure setup, CI/CD pipelines, containerization, IaC
- **System Integration** — API development, third-party integrations, middleware, data pipelines
- **Platform Engineering** — Internal tooling, developer experience, platform architecture
- **Legacy Modernization** — Codebase migration, architecture redesign, tech debt reduction
- **Performance & Scalability** — Load optimization, caching strategies, database tuning, CDN configuration

## Content Direction

- Lead with technical credibility and engineering excellence
- Showcase architecture diagrams and technology choices
- Case studies with technical depth — scale metrics, uptime, performance gains
- Technology stack highlights (React, Node, cloud-native, etc.)
- CTAs for technical discovery calls and architecture reviews
- Navigation to industry-specific tech pages (e.g. `tech-ecommerce-grow`)

## Key Messaging

- "Engineering growth, one system at a time"
- Modern stack, production-grade quality
- Scalable architectures built for what comes next
- From MVP to enterprise — we build at every stage

## Development Notes

- **Skills:** Use `/content-design` for all UI copy and `/frontend-design` for all UI/UX implementation
- **Navigation:** Uses the shared megamenu from `libs/shared/megamenu` — highlights Technology as the active service, links to industry-specific tech pages
- **i18n:** All content must be available in both **Polish (pl)** and **English (en)**. No hardcoded strings — use the shared i18n setup for all user-facing text. The page must auto-detect the user's browser language and load in that language; default to **English** if the language is not supported

## Related Apps

- **Parent:** [Grow (root)](../grow/AGENTS.md)
- **Industry variant:** [Tech E-commerce Grow](../tech-ecommerce-grow/AGENTS.md)
