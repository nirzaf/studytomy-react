# Handling Routing in Single-Page Applications with React Router

To avoid server-side configuration issues with React Router in single-page applications, consider these approaches:

## HashRouter

Use **HashRouter** instead of **BrowserRouter**. It appends routes to the URL's hash (e.g., `#/about`), so the server only sees the base URL. Import `HashRouter` from `react-router-dom` and wrap your `Routes` with it.

## Catch-All Route

Implement a wildcard route (`<Route path="*" element={<NotFound />} />`) within your `Routes` to handle undefined paths client-side. This renders a custom 404 component, improving user experience even if the server returns a 404.

## Programmatic Redirect

Use a wildcard route to programmatically redirect to the homepage. Create a component utilizing `useNavigate` to redirect to `/` within a `useEffect`.

## Service Worker Fallback (Optional)

If using a service worker, configure it to serve `index.html` for any unmatched navigation requests. This ensures the React app handles routing even for URLs the server doesn't recognize. This is beneficial for PWAs.
