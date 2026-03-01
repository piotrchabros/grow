# AI Grow — AI Services Landing Page

**App name:** `ai-grow`
**Path:** `apps/ai-grow`
**Type:** Service-specific app
**Service scope:** AI
**Industry scope:** All industries

## Purpose

Landing page dedicated to Grow's AI services across all industries. This app positions Grow as an AI partner that helps businesses plan their AI journey, build conversational interfaces, and embed AI into their existing products and workflows.

## Target Audience

CTOs, product leaders, and founders looking to adopt AI strategically — whether through chatbots and virtual assistants, integrating AI capabilities into existing systems, or defining an AI roadmap from scratch.

## Services Highlighted

- **AI Strategy & Roadmapping** — Use-case identification, feasibility assessment, AI adoption planning, technology selection, build-vs-buy analysis
- **Conversational AI** — Chatbots, virtual assistants, voice interfaces, customer service automation, guided workflows, human handoff design
- **AI Integration** — Embedding AI into existing products, API-first AI services, MLOps pipelines, third-party AI platform integration (OpenAI, cloud AI services)

## Content Direction

- Lead with practical outcomes: faster customer support through conversational AI, new capabilities through AI integration, clear direction through strategic roadmapping
- Demystify AI — clear, jargon-free explanations of capabilities and ROI
- Case studies showing before/after metrics from conversational AI deployments and AI integrations
- Showcase integration expertise with AI platforms (OpenAI, cloud AI services, etc.)
- CTAs for AI readiness assessments and proof-of-concept workshops
- Navigation to industry-specific AI pages (e.g. `ai-ecommerce-grow`)

## Key Messaging

- "Intelligent growth, powered by AI"
- From strategy to integration — a clear path to AI adoption
- Conversational AI that handles real conversations, not just FAQs
- AI embedded where it matters — inside your existing products and workflows

## Development Notes

- **Skills:** Use `/content-design` for all UI copy and `/frontend-design` for all UI/UX implementation
- **Navigation:** Uses the shared megamenu from `libs/shared/megamenu` — highlights AI as the active service, links to industry-specific AI pages
- **i18n:** All content must be available in both **Polish (pl)** and **English (en)**. No hardcoded strings — use the shared i18n setup for all user-facing text. The page must auto-detect the user's browser language and load in that language; default to **English** if the language is not supported

## Related Apps

- **Parent:** [Grow (root)](../grow/AGENTS.md)
- **Industry variant:** [AI E-commerce Grow](../ai-ecommerce-grow/AGENTS.md)