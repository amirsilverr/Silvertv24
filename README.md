# SILVER TV

Static movie and series manager built with HTML, CSS, and vanilla JavaScript.

## Project files

- `index.html` — application markup
- `style.css` — styles
- `app.js` — application logic and client-side page routing
- `vercel.json` — Vercel configuration for clean URLs and refresh-safe routes

All application files are in the project root. No build step or package installation is required.

## Deploy to Vercel

1. Extract this ZIP. Upload the **contents** of the extracted folder to the root of a GitHub repository (do not put them inside an extra nested folder).
2. Import that repository into Vercel.
3. Set **Framework Preset** to `Other`.
4. Set **Root Directory** to `.` (the repository root).
5. Leave **Build Command** empty.
6. Leave **Output Directory** empty.
7. Deploy.

The `vercel.json` file rewrites app routes to `index.html`, so direct navigation and browser refresh on routes such as `/dashboard` or `/watchlist` can load the single-page app.

## Notes

- The app uses browser `localStorage`; saved collection data is specific to the browser/device and is not automatically synchronized.
- OMDb requests are made from client-side JavaScript. Any API key embedded in browser code is visible to visitors; do not use a private key in client-side code.
- The logo references an external image host, so that image still requires the external host to be available.
