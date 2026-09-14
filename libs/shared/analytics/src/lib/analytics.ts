import posthog from 'posthog-js';

export function initAnalytics() {
  const key = import.meta.env.VITE_POSTHOG_KEY;
  const host = import.meta.env.VITE_POSTHOG_HOST;

  if (!key) {
    if (import.meta.env.DEV) {
      throw new Error(
        'VITE_POSTHOG_KEY variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once VITE_POSTHOG_KEY is configured'
      );
    }
    return;
  }

  posthog.init(key, {
    api_host: host,
    defaults: '2025-05-24',
    // Capture a $pageview on every SPA route change, not just the first load.
    capture_pageview: 'history_change',
  });
}
