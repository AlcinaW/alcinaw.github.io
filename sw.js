/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-eca611af5c04fe272cdf.js"
  },
  {
    "url": "framework-a0312b285dbca6857039.js"
  },
  {
    "url": "app-cdb33ec704697a5cea88.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-af9e0f2c9acfb4fb259c.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b423f3de7559e863ee0cd701ece04f8f"
  },
  {
    "url": "google-fonts/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2",
    "revision": "d08c09f2f169f4a6edbcf8b8d1636cb4"
  },
  {
    "url": "google-fonts/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0b.woff2",
    "revision": "cffb686d7d2f4682df8342bd4d276e09"
  },
  {
    "url": "google-fonts/s/oswald/v16/TK3iWkUHHAIjg752GT8G.woff2",
    "revision": "f15aa285863274b4f6ed578caa76565e"
  },
  {
    "url": "google-fonts/s/ptserif/v11/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
    "revision": "d099b509e40bccf1a0a7e03b26cc5d50"
  },
  {
    "url": "google-fonts/s/ptserif/v9/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
    "revision": "bf8db531544f899031fefd24e908c6a8"
  },
  {
    "url": "google-fonts/s/rubik/v7/iJWKBXyIfDnIV7nBrXw.woff2",
    "revision": "cebc4ea456a88943fb6b6cb56a648071"
  },
  {
    "url": "google-fonts/s/rubik/v9/iJWKBXyIfDnIV7nBrXw.woff2",
    "revision": "63c5b6176f60881d53dd2dc10904a04c"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "992dd712935b9525f6ee909dbdb40b99"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-cdb33ec704697a5cea88.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  return await caches.match(offlineShell)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
