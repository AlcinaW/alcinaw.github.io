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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

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
    "url": "webpack-runtime-b0b536504818fbd1da33.js"
  },
  {
    "url": "app-b69e76d45bbd6035e03e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9538d068e15af3827374.js"
  },
  {
    "url": "index.html",
    "revision": "b98be3a1ab35adfd71b7f4f287b10307"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "81d9f63d4149b1a45c521564e92533cd"
  },
  {
    "url": "1.94904d6ef95a77634fe7.css"
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
    "url": "google-fonts/s/ptserif/v9/EJRVQgYoZZY2vCFuvAFWzr8.woff2",
    "revision": "bf8db531544f899031fefd24e908c6a8"
  },
  {
    "url": "google-fonts/s/rubik/v7/iJWKBXyIfDnIV7nBrXw.woff2",
    "revision": "cebc4ea456a88943fb6b6cb56a648071"
  },
  {
    "url": "1-b389e0aa8c1ee0ced5bd.js"
  },
  {
    "url": "component---src-pages-index-js-e4e7102ae0c954019145.js"
  },
  {
    "url": "0-6dcf1e55da2b058c3792.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js-71a9ed80b67db4229b18.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});