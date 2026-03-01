# Tech E-commerce Grow — Technology for E-commerce Landing Page

**App name:** `tech-ecommerce-grow`
**Path:** `apps/tech-ecommerce-grow`
**Type:** Service + Industry app
**Service scope:** Technology
**Industry scope:** E-commerce

## Purpose

Landing page focused specifically on technology services for e-commerce businesses. This app positions Grow as the technical partner that builds, integrates, and scales the infrastructure powering online stores and digital commerce platforms.

## Target Audience

E-commerce CTOs, technical founders building custom storefronts, heads of engineering at online retailers, and e-commerce directors evaluating platform migrations or custom development.

## Services Highlighted

- **Storefront Development** — Headless commerce (Hydrogen, Next.js Commerce), Shopify theme/app development, custom-built storefronts, progressive web apps
- **Platform Migration** — Shopify, BigCommerce, Magento migrations, headless commerce transitions, data migration and URL preservation
- **E-commerce Integrations** — ERP (NetSuite, SAP), CRM (HubSpot, Klaviyo), OMS, PIM, payment gateways (Stripe, Adyen), shipping APIs
- **Checkout & Payments** — Custom checkout flows, one-click purchasing, multi-currency support, subscription billing, payment optimization
- **Performance Engineering** — Page speed optimization, Core Web Vitals, CDN configuration, image optimization, server-side rendering for SEO
- **Scalability & Infrastructure** — Auto-scaling for traffic spikes (Black Friday), load balancing, caching strategies, database optimization
- **Mobile Commerce** — Native shopping apps, responsive storefront optimization, mobile-first UX, push notification infrastructure

## Content Direction

- Lead with technical credibility: performance benchmarks, uptime SLAs, page speed scores
- Architecture case studies showing technology decisions and their business impact
- Address pain points: slow storefronts, integration nightmares, platform limitations, Black Friday crashes
- Technology comparison content (headless vs. monolithic, Shopify vs. custom, etc.)
- CTAs for technical audits, architecture reviews, and proof-of-concept builds
- Demo or showcase of past builds with tech stack breakdowns

## Key Messaging

- "The tech behind every great online store"
- Fast, reliable, scalable — commerce infrastructure that sells
- From Shopify themes to headless architecture — every level of complexity
- Built to handle your biggest sales day, every day

## Development Notes

- **Skills:** Use `/content-design` for all UI copy and `/frontend-design` for all UI/UX implementation
- **Navigation:** Uses the shared megamenu from `libs/shared/megamenu` — highlights both Technology and E-commerce as active, links to sibling service+industry pages
- **i18n:** All content must be available in both **Polish (pl)** and **English (en)**. No hardcoded strings — use the shared i18n setup for all user-facing text. The page must auto-detect the user's browser language and load in that language; default to **English** if the language is not supported

## Related Apps

- **Service parent:** [Tech Grow](../tech-grow/AGENTS.md)
- **Industry parent:** [E-commerce Grow](../ecommerce-grow/AGENTS.md)
- **Root:** [Grow](../grow/AGENTS.md)
