# Consulting E-commerce Grow — Consulting for E-commerce Landing Page

**App name:** `consulting-ecommerce-grow`
**Path:** `apps/consulting-ecommerce-grow`
**Type:** Service + Industry app
**Service scope:** Consulting
**Industry scope:** E-commerce

## Purpose

Landing page focused specifically on consulting services for e-commerce businesses. This app positions Grow as a strategic advisor that helps online retailers make smarter decisions about growth, operations, and market expansion.

## Target Audience

E-commerce founders at inflection points (scaling from 6 to 7 figures, expanding internationally), heads of e-commerce at established retail brands going DTC, and marketplace sellers diversifying their channel strategy.

## Services Highlighted

- **E-commerce Business Strategy** — Unit economics analysis, pricing strategy, margin optimization, growth roadmapping
- **Marketplace Strategy** — Amazon, Shopify, multi-channel expansion planning, marketplace vs. DTC trade-offs
- **Supply Chain & Fulfillment Consulting** — 3PL selection, fulfillment network design, inventory planning, cost reduction
- **Customer Retention Strategy** — Churn analysis, loyalty program design, subscription model strategy, customer segmentation
- **International Expansion** — Market entry strategy, localization planning, cross-border logistics, regulatory navigation
- **Revenue Operations** — Sales funnel optimization, marketing/operations alignment, forecasting and planning frameworks
- **M&A and Exit Planning** — Valuation optimization, due diligence prep, operational cleanup for acquisition readiness

## Content Direction

- Lead with strategic outcomes: margin improvement, successful market expansion, operational cost reduction
- Framework-oriented content showing structured approaches to e-commerce challenges
- Case studies with P&L impact — revenue, margins, operational efficiency gains
- Address pain points: thin margins, fulfillment complexity, channel dependency, scaling bottlenecks
- CTAs for e-commerce strategy sessions and business audits
- Thought leadership on e-commerce industry trends

## Key Messaging

- "Strategic clarity for e-commerce growth"
- Beyond tactics — the strategy behind sustainable scaling
- We've seen the P&Ls, we know the margins, we plan for reality
- From marketplace seller to brand empire

## Development Notes

- **Skills:** Use `/content-design` for all UI copy and `/frontend-design` for all UI/UX implementation
- **Navigation:** Uses the shared megamenu from `libs/shared/megamenu` — highlights both Consulting and E-commerce as active, links to sibling service+industry pages
- **i18n:** All content must be available in both **Polish (pl)** and **English (en)**. No hardcoded strings — use the shared i18n setup for all user-facing text. The page must auto-detect the user's browser language and load in that language; default to **English** if the language is not supported

## Related Apps

- **Service parent:** [Consulting Grow](../consulting-grow/AGENTS.md)
- **Industry parent:** [E-commerce Grow](../ecommerce-grow/AGENTS.md)
- **Root:** [Grow](../grow/AGENTS.md)
