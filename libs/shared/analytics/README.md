# @org/shared-analytics

Shared PostHog analytics setup for every Grow app.

- `initAnalytics()` starts the PostHog client. Call it once at app start, next to `initI18n`.

It reads `VITE_POSTHOG_KEY` and `VITE_POSTHOG_HOST` from the app environment and captures a
`$pageview` on the first load and on every later SPA route change. When `VITE_POSTHOG_KEY` is
missing, the app still boots: development throws a clear error, and production stays a no-op.
