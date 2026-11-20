/* SILVERTV SPA ROUTER
 * Keeps the existing page views in one document and maps them to clean URLs.
 */
(function (global) {
  "use strict";

  const routes = {
    home: { path: "/", title: "Home" },
    dashboard: { path: "/dashboard", title: "Dashboard" },
    overview: { path: "/overview", title: "Overview" },
    series: { path: "/my-list", title: "My List" },
    customListDetail: { path: "/my-list/custom", title: "My List" },
    watchlist: { path: "/watchlist", title: "Watchlist" },
    top: { path: "/favorites", title: "Favorites" },
    amirWatched: { path: "/collections/watched", title: "Series I've Watched" },
    amirWant: { path: "/collections/want", title: "Watchlist" },
    telegram: { path: "/telegram", title: "Telegram Channel" },
    omdbSettings: { path: "/settings/omdb", title: "OMDb API Settings" },
    deleteData: { path: "/settings/data", title: "Delete Data" }
  };

  const byPath = Object.fromEntries(Object.entries(routes).map(([id, route]) => [route.path, id]));
  let suppressNextNavigation = false;

  function normalizePath(pathname) {
    if (!pathname || pathname === "/") return "/";
    return pathname.replace(/\/+$/, "") || "/";
  }

  function resolve() {
    const path = normalizePath(global.location.pathname);
    const pageId = byPath[path] || "home";
    return { pageId, title: routes[pageId].title, path };
  }

  function navigate(pageId, options = {}) {
    const route = routes[pageId];
    if (!route) return;
    const target = route.path;
    if (normalizePath(global.location.pathname) === target) return;
    const method = options.replace ? "replaceState" : "pushState";
    global.history[method]({ pageId }, "", target);
  }

  function handlePopState() {
    const current = resolve();
    if (typeof global.showPage === "function") {
      suppressNextNavigation = true;
      global.showPage(current.pageId, current.title);
      suppressNextNavigation = false;
    }
  }

  function sync(pageId) {
    if (suppressNextNavigation) return;
    navigate(pageId);
  }

  global.addEventListener("popstate", handlePopState);
  global.SilverRouter = Object.freeze({ routes, resolve, navigate, sync });
})(window);
