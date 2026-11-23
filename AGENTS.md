# School Pages

- Keep the published site in `docs/`: plain HTML/CSS with standalone exercises in `docs/exercises/`.
- No build system, runtime dependencies, CDN assets, analytics, cookies, service workers or persistent browser storage.
- Keep answers and progress in memory only. Review supplied HTML; do not assume standalone files obey this rule. Remove progress import/export and saved-state UI.
- Incoming originals belong in ignored `inbox/`. Never publish original private answers or unrelated local files.
- Keep public UI German, accessible by keyboard, responsive from 320px, with touch targets at least 44px.
- Add a plain relative index link for each exercise and a return link from exercises to `../`.
- Set each card's `data-added` to its original ISO 8601 addition timestamp, including timezone. Keep markup newest first; the directory also sorts by this timestamp. Editing an existing exercise must not change its addition time.
- Light mode is the default. Theme changes last only until reload.
- Test index → exercise → answer/check → reload reset in Chromium and WebKit, at phone/tablet/desktop sizes. Verify no storage writes or unexpected network requests.
- HTTP caching is controlled by GitHub Pages. Do not promise zero browser/CDN caching.
- Never change repository visibility without the user's instruction.

## Publishing

- Use `/home/opsec/.local/bin/gh-2` (config: `~/.config/gh-2`) for GitHub operations; never fall back to `gh`.
- Before GitHub writes, verify `gh-2 api user --jq .login` = `sigmaopsec`. Login: `gh-2 auth login --hostname github.com --web --git-protocol https`.
- Target `sigmaopsec/school-pages`; origin: `https://github.com/sigmaopsec/school-pages.git`. Leave private `levi-cm/school-pages` untouched.
- Pages serves `main:/docs` at `https://sigmaopsec.github.io/school-pages/`.
- Keep Git authentication and author identity local to this repository.
