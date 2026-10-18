# Lernräume

A tiny school exercise directory for GitHub Pages. Plain HTML and CSS. No packages, build, framework, analytics, accounts, cookies or service worker. The index needs no JavaScript; interactive exercises run their own embedded JavaScript.

## Publish once the repository is public

1. Change the repository visibility to **Public** when ready.
2. Open **Settings → Pages → Build and deployment**.
3. Select **Deploy from a branch**, branch **main**, folder **/docs**, then **Save**.
4. Wait for the Pages deployment to finish. Share this single link:
   **https://levi-cm.github.io/school-pages/**

Changes pushed to `main` are then published automatically. No custom Actions workflow is required. The link is not live until Pages has been enabled and deployed. GitHub's free personal plan requires a public repository for Pages.

## Add another exercise

1. Drop the standalone HTML into `inbox/` (ignored by Git), then ask Codex to wire it up.
2. Codex reviews the file for saved progress, embedded personal data, external dependencies and mobile layout, then places the reviewed copy in `docs/exercises/` using a stable lowercase filename.
3. Add an ordinary relative link in `docs/index.html`, following the existing exercise. Update the visible directory count.
4. Check it on mobile and desktop, commit and push. Once Pages is enabled, GitHub deploys it.

Only `docs/` is served by Pages. All committed files become readable when the repository becomes public. Do not commit unreviewed originals, private answers or private documents. The existing PuG exercise includes its supplied reference documents; these will be public with the exercise.

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
