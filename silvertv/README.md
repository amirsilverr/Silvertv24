# SILVERTV — SPA structure

## Files
- `index.html`: shared application shell and existing page markup.
- `css/main.css`: extracted original styles.
- `js/router.js`: clean-URL client-side router using the History API.
- `js/app.js`: existing application logic, retained as a classic script so current global handlers and inline-generated actions continue to work.
- `assets/`: reserved for local images, icons, and fonts.

## Routes currently backed by existing views
| URL | View |
|---|---|
| `/` | Home |
| `/dashboard` | Dashboard |
| `/overview` | Overview |
| `/my-list` | My List |
| `/my-list/custom` | Custom list detail |
| `/watchlist` | Watchlist |
| `/favorites` | Favorites |
| `/collections/watched` | Series I've Watched |
| `/collections/want` | Watchlist collection |
| `/telegram` | Telegram Channel |
| `/settings/omdb` | OMDb API Settings |
| `/settings/data` | Delete Data |

## Hosting
The included `_redirects` (Netlify-compatible) and `vercel.json` route deep links to `index.html`. On another host, configure an equivalent SPA fallback. Serve the folder over HTTP; opening `index.html` via `file://` will not provide reliable clean-route behavior.

## Compatibility note
The original application logic is preserved in `js/app.js` as a classic script because it currently relies on shared top-level declarations and dynamically assigned handlers. `router.js` is isolated as a separate module-like IIFE. Further extraction of storage, OMDb, rendering, and page features into ES modules should be done incrementally with regression tests to avoid breaking existing data and UI behavior.
