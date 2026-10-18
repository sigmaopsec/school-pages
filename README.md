# Lernräume

A tiny school exercise directory for GitHub Pages. Plain HTML and CSS. No packages, build, framework, analytics, accounts, cookies or service worker. The index works without JavaScript; its optional local scripts add a light/dark toggle and name search. Interactive exercises run their own embedded JavaScript.

## GitHub Pages

Public repository: **https://github.com/sigmaopsec/school-pages**

Site: **https://sigmaopsec.github.io/school-pages/**

Pages serves branch **main**, folder **/docs**, using GitHub's built-in branch deployment. Changes pushed to `main` publish automatically. No custom workflow or build step is required.

Use the secondary account through `gh-2` for this repository. Git credentials and commit identity are configured locally for the secondary account; other repositories keep their existing settings.

## Add another exercise

1. Drop the standalone HTML into `inbox/` (ignored by Git), then ask Codex to wire it up.
2. Codex reviews the file for saved progress, embedded personal data, external dependencies and mobile layout, then places the reviewed copy in `docs/exercises/` using a stable lowercase filename.
3. Add an ordinary relative link in `docs/index.html`, inside `.exercise-grid`, following the existing exercise. Set `data-added` to its original ISO 8601 addition timestamp with timezone (for example `2026-10-18T18:47:00+02:00`). Keep markup newest first for the no-JavaScript fallback; the directory automatically sorts by this timestamp and updates the visible count. Preserve the timestamp when editing a page.
4. Check it on mobile and desktop, commit and push. Once Pages is enabled, GitHub deploys it.

Only `docs/` is served by Pages. All committed files become readable when the repository becomes public. Do not commit unreviewed originals, private answers or private documents. The existing PuG exercise includes its supplied reference documents; these will be public with the exercise.

## Appearance

Phones always show large full-width cards with a near-square minimum shape, without a view selector. Desktop cards use two columns from 768px and three from 1200px. Name/subject search filters the existing cards in memory; no results are announced and can be cleared. Only real exercises are listed.

The index uses its original blue palette. The sun/moon toggle and circular reveal animation are adapted from Carmen-Anhänger. It starts light; switching to dark lasts only until reload, with no browser storage. Reduced-motion preferences and browsers without View Transitions get an immediate switch.

## No saved progress

The published PuG exercise keeps answers, progress and reading preferences only in JavaScript memory. Reloading, closing, or restoring the page from back/forward cache resets that state. Its browser storage and progress import/export features were removed. Static learning content, exercises and reference material remain available. No responses are sent to a server. Explicit copying of text remains available.

**Caching limit:** the site uses no application cache, offline worker or browser database. GitHub Pages controls HTTP cache headers; browsers and GitHub's CDN can cache static HTML/CSS. GitHub Pages cannot guarantee absolutely no caching. This does not persist exercise answers. Browser history can retain page URLs. If strict HTTP `Cache-Control: no-store` is required, use a host that allows custom response headers instead.

## Preview locally

```sh
python3 -m http.server 8080 --bind 127.0.0.1 --directory docs
```

Open http://127.0.0.1:8080/. No install step. Exercise links also work under the GitHub Pages repository path. Modern Android Chrome and iPhone/iPad Safari are supported; browser emulation does not replace testing on physical devices.

## Verified locally · 2026-10-18

Chromium and WebKit with iPhone emulation: index layout at 320, 390, 768 and 1440 CSS pixels; all 30 topic/stage entry routes at phone width; choosing and checking an answer; writing an answer; changing reading settings; reload clears answers, settings and progress; mobile menu and return link. No browser storage calls, cookies, unexpected requests or JavaScript/console errors during these checks. Index light/dark appearances inspected. Embedded lesson/reference/lexicon data matches the supplied original. Physical Android/iOS devices and the public Pages deployment have not been tested.

Follow-up verification: Chromium and iPhone WebKit passed at 320, 390, 767, 1024 and 1440px. Mobile cards fill one column and have a minimum height matching their width (at least 320px), with no horizontal overflow. Name/subject search, empty results and clearing search passed. The view selector and bottom fresh-start note are removed. The original sun/moon toggle, animation and no-persistence behavior remain.

## Included pages

- **Politik verstehen. Schritt für Schritt.**: date shown on the card is **19.10.2027** (`2027-10-19`), separate from the addition timestamp used for sorting.
- **Primal Nutrition**: supplied English content in `docs/exercises/primal-1.html`. Listed after PuG because the user identifies it as older; its sort timestamp is a relative ordering seed, not a known original publication date. Source HTML is preserved locally. Google Fonts requests and browser theme storage were removed; light mode starts fresh on reload. A return link and mobile navigation/layout fixes keep it usable from the directory.

Primal integration passed Chromium and iPhone WebKit at 320, 390, 768 and 1440px: card order, Politik date, name/subject search, page opening, mobile menu, accordion, theme switching/reload and return link. No browser storage calls, cookies, external requests or console/JavaScript errors occurred.

PuG revised edition: 6 learning areas, 30 examples and 30 tasks. Replaces the previous edition at the same URL; card date and addition order are preserved. The supplied original is kept only in ignored `inbox/`.

Revised PuG verification: Chromium and iPhone WebKit passed all 18 topic/stage entry routes at 320, 390, 768 and 1440px, answer checking, reading settings and reload reset, and return navigation. No overflow, storage calls, cookies, external requests or JavaScript errors. All three embedded content datasets match the revised supplied file.
