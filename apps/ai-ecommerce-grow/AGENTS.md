# AI E-commerce Grow — AI for E-commerce Landing Page

**App name:** `ai-ecommerce-grow`
**Path:** `apps/ai-ecommerce-grow`
**Type:** Service + Industry app
**Service scope:** AI
**Industry scope:** E-commerce

## Purpose

Landing page focused specifically on AI services for e-commerce businesses. This app positions Grow as the AI partner that helps online retailers leverage machine learning and intelligent automation to personalize experiences, optimize operations, and drive revenue.

## Target Audience

E-commerce leaders exploring AI adoption, data-driven DTC brands looking for personalization at scale, marketplace sellers wanting pricing advantages, and e-commerce directors seeking automation for customer service and operations.

## Services Highlighted

- **Product Recommendations** — Collaborative filtering, content-based recommendations, "frequently bought together", personalized homepage and email recommendations
- **Dynamic Pricing & Demand Forecasting** — Competitor price monitoring, elasticity-based pricing, inventory-aware pricing, seasonal demand prediction
- **AI-Powered Search & Discovery** — Semantic search, visual search (search by image), autocomplete optimization, personalized search rankings
- **Customer Service AI** — Shopping assistant chatbots, order tracking automation, returns/exchange handling, FAQ automation, human handoff workflows
- **Personalization Engines** — On-site personalization (banners, content, product order), email personalization, segment-of-one targeting, behavioral triggers
- **Fraud Detection & Prevention** — Transaction risk scoring, account takeover detection, return abuse identification, chargeback prevention
- **Inventory & Supply Chain AI** — Demand forecasting, reorder point optimization, warehouse allocation, dead stock prediction

## Content Direction

- Lead with revenue impact: uplift from recommendations, conversion gains from personalization, cost savings from automation
- Before/after case studies showing AI implementation results with concrete metrics
- Demystify AI for e-commerce — practical explanations, not academic jargon
- Address pain points: generic shopping experiences, manual customer service costs, stockouts and overstock, fraud losses
- CTAs for AI readiness assessments, personalization audits, and proof-of-concept demos
- ROI calculators or interactive demos where possible

## Key Messaging

- "Smarter commerce, powered by AI"
- Every shopper gets a personal experience — at scale
- AI that pays for itself: measurable ROI from day one
- From product recommendations to demand forecasting — AI across the entire e-commerce stack

## Development Notes

- **Skills:** Use `/content-design` for all UI copy and `/frontend-design` for all UI/UX implementation
- **Navigation:** Uses the shared megamenu from `libs/shared/megamenu` — highlights both AI and E-commerce as active, links to sibling service+industry pages
- **i18n:** All content must be available in both **Polish (pl)** and **English (en)**. No hardcoded strings — use the shared i18n setup for all user-facing text. The page must auto-detect the user's browser language and load in that language; default to **English** if the language is not supported

## Related Apps

- **Service parent:** [AI Grow](../ai-grow/AGENTS.md)
- **Industry parent:** [E-commerce Grow](../ecommerce-grow/AGENTS.md)
- **Root:** [Grow](../grow/AGENTS.md)
