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

- **Englisch · Unit 4**: preparation for the **21.10.2026** short exam, with 93 unchanged vocabulary entries and three source-based climate nonfiction texts: two practice readings and one reserved for the exam simulation. Each text uses course vocabulary; together they cover all 93 entries. Texts are approximately 950–1,060 words, with B2/B2+ as a practice-level estimate, not an official certification. Each follows the supplied Fachabitur task format: four multiple-choice questions, one concise comparative English–German mediation (four half-point criteria), and two expression-retrieval questions; seven tasks, eight points. No additional essay or matching tasks in these readings. Independently written passages link their factual sources; the private reference PDFs and original answers are not published. Reviewed page: `docs/exercises/englisch-kurzarbeit-21-10-26.html`; supplied HTML remains in ignored `inbox/`. German navigation, relative return link, light theme on reload and transient progress. Textbook page 50 and the exact four-step reading overview are missing; context revision and exam Part 2 remain provisional. Durations and scoring are practice settings, not official exam rules.
- **Politik verstehen. Schritt für Schritt.**: date shown on the card is **19.10.2027** (`2027-10-19`), separate from the addition timestamp used for sorting.
- **Primal Nutrition**: supplied English content in `docs/exercises/primal-1.html`. Listed after PuG because the user identifies it as older; its sort timestamp is a relative ordering seed, not a known original publication date. Source HTML is preserved locally. Google Fonts requests and browser theme storage were removed; light mode starts fresh on reload. A return link and mobile navigation/layout fixes keep it usable from the directory.

Primal integration passed Chromium and iPhone WebKit at 320, 390, 768 and 1440px: card order, Politik date, name/subject search, page opening, mobile menu, accordion, theme switching/reload and return link. No browser storage calls, cookies, external requests or console/JavaScript errors occurred.

PuG revised edition: 6 learning areas, 30 examples and 30 tasks. Replaces the previous edition at the same URL; card date and addition order are preserved. The supplied original is kept only in ignored `inbox/`.

Revised PuG verification: Chromium and iPhone WebKit passed all 18 topic/stage entry routes at 320, 390, 768 and 1440px, answer checking, reading settings and reload reset, and return navigation. No overflow, storage calls, cookies, external requests or JavaScript errors. All three embedded content datasets match the revised supplied file.

English integration verification (2026-10-19): Chromium and WebKit passed index search → exercise → answer/check → reload reset → return at 320, 390, 768 and 1440px. All six main sections fit these widths. No persistent answers, storage calls, cookies, external requests or console/JavaScript errors occurred. Theme starts light and resets on reload. Browser emulation does not constitute physical-device testing.

Climate revision verification (2026-10-20): content validation confirms three nonfiction texts, seven tasks/eight points each, all 93 original vocabulary entries unchanged and covered. Chromium and WebKit passed at 320, 390, 768 and 1440px: both readings answered and checked, expression retrieval with surrounding quotes/punctuation, incorrect-expression rejection, mediation self-assessment at 0.5/1.5/2 points, exam reading without premature solutions or vocabulary hints, submission/correction, reload reset, index/return navigation and all six sections without overflow. Storage-call instrumentation, cookies, automatic external requests and browser errors remained empty. Phone and desktop screenshots inspected. Physical devices were not tested.

## Deutsch · Stilmittel Akademie: Prüfungsfokus (2026-10-25)

Preparation for the 26.10.2026 short exam, updated from `Stilmittel-Akademie-Pruefungsfokus.html`. Reviewed page stays at `docs/exercises/deutsch-kurzarbeit-26-10-26.html`; originals remain in ignored `inbox/`. The directory addition timestamp and exam date are unchanged. This edition focuses on 47 classroom terms (23 priority terms), recognition, short analysis/commentary paragraphs, and two 30-minute mock exams with 14 tasks/40 points each. All supplied content datasets are preserved.

Browser persistence, progress import/export, archive controls and answer downloads removed. Answers, drafts, settings and theme remain in memory until reload. Relative return link, restrictive CSP and mobile/touch adjustments retained.

Chromium and WebKit passed at 320, 390, 768 and 1440px: directory → exercise → answer/check, writing, profile changes, both mock variants with answer/submission/results, reload reset and return. Ten main views fit each width; no JavaScript errors, storage calls, cookies or automatic external requests. Browser emulation does not constitute physical-device testing.

## Informatik · modellraum (2026-11-23)

Databases and ERM practice (Informatik 12): learning lab, cardinality drills, the classroom worksheet tasks as reading versions, an ERM workshop, relational-model training, a paper exam round and a mock exam. Reviewed page: `docs/exercises/informatik-kurzarbeit-lernraum.html`; the supplied original stays in ignored `inbox/`. Addition timestamp `2026-11-23T09:23:13+01:00`; no exam date known, so the card shows none.

Public edition: all embedded original PDFs and page scans are removed, so no school, teacher or worksheet originals are published. Only two cropped faulty diagrams from sheets 06 and 08 remain, because tasks depend on them. Browser storage, backup/import/export and saved-state wording are removed; answers, drafts, notes, exams and theme stay in memory until reload. Added a relative return link, a restrictive CSP, 44px touch targets on phones and touch devices, and a light/dark toggle (light on every load; diagrams stay on light paper).

Chromium and WebKit passed at 320, 390, 768 and 1440px: directory → exercise → cardinality answer/check → dark toggle → reload reset (answers cleared, theme back to light) → return. All twelve views fit each width in light and dark mode; no storage calls, cookies, automatic external requests or JavaScript/console errors. Browser emulation does not constitute physical-device testing.
