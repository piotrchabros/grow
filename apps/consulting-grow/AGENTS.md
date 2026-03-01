# Consulting Grow — Consulting Services Landing Page

**App name:** `consulting-grow`
**Path:** `apps/consulting-grow`
**Type:** Service-specific app
**Service scope:** Consulting
**Industry scope:** All industries

## Purpose

Landing page dedicated to Grow's consulting services across all industries. This app positions Grow as a strategic consulting partner that helps businesses optimize operations, scale efficiently, and navigate digital transformation.

## Target Audience

CEOs, COOs, founders, and senior leadership seeking strategic guidance on business growth, operational efficiency, digital transformation, and market expansion.

## Services Highlighted

- **Business Strategy** — Market analysis, competitive positioning, growth roadmaps, go-to-market strategy
- **Digital Transformation** — Process digitization, technology adoption planning, change management
- **Process Optimization** — Workflow analysis, bottleneck identification, automation opportunities
- **Organizational Scaling** — Team structure design, hiring strategy, operational frameworks for growth
- **Revenue Operations (RevOps)** — Sales/marketing alignment, pipeline optimization, forecasting
- **Data Strategy** — Data governance, analytics infrastructure planning, KPI frameworks
- **Market Research & Competitive Analysis** — Industry benchmarking, customer research, trend analysis

## Content Direction

- Lead with strategic outcomes: revenue growth, cost reduction, operational efficiency
- Framework-driven approach showing structured methodologies
- Case studies demonstrating transformation results with concrete metrics
- Thought leadership content establishing domain expertise
- CTAs for strategy consultations and business audits
- Navigation to industry-specific consulting pages (e.g. `consulting-ecommerce-grow`)

## Key Messaging

- "Strategy that scales"
- Hands-on consulting, not just slide decks
- Data-informed decisions, measurable transformation
- From diagnosis to execution — end-to-end support

## Development Notes

- **Skills:** Use `/content-design` for all UI copy and `/frontend-design` for all UI/UX implementation
- **Navigation:** Uses the shared megamenu from `libs/shared/megamenu` — highlights Consulting as the active service, links to industry-specific consulting pages
- **i18n:** All content must be available in both **Polish (pl)** and **English (en)**. No hardcoded strings — use the shared i18n setup for all user-facing text. The page must auto-detect the user's browser language and load in that language; default to **English** if the language is not supported

## Related Apps

- **Parent:** [Grow (root)](../grow/AGENTS.md)
- **Industry variant:** [Consulting E-commerce Grow](../consulting-ecommerce-grow/AGENTS.md)
