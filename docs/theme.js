// Carmen-Anhänger's theme reveal, adapted to keep the choice in memory only.
(() => {
  'use strict';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  let changing = false;

  function setTheme(theme) {
    root.dataset.theme = theme;
    const light = theme === 'light';
    toggle.setAttribute('aria-pressed', String(light));
    toggle.setAttribute('aria-label', light
      ? 'Dunkles Erscheinungsbild aktivieren'
      : 'Helles Erscheinungsbild aktivieren');
  }

  async function reveal(transition, origin) {
    await transition.ready;
    // View-transition snapshots can have an offset on mobile browsers.
    const style = getComputedStyle(root, '::view-transition');
    const x = origin.x - (Number.parseFloat(style.left) || 0);
    const y = origin.y - (Number.parseFloat(style.top) || 0);
    root.style.setProperty('--theme-x', `${x}px`);
    root.style.setProperty('--theme-y', `${y}px`);
    const animation = root.animate({clipPath: [
      `circle(0 at ${x}px ${y}px)`,
      `circle(${origin.radius}px at ${x}px ${y}px)`
    ]}, {
      duration: 880,
      easing: 'cubic-bezier(0.35, 0, 0.65, 0.85)',
      fill: 'both',
      pseudoElement: '::view-transition-new(root)'
    });
    await animation.finished;
  }

  toggle.hidden = false;
  setTheme(root.dataset.theme);
  toggle.addEventListener('click', async () => {
    if (changing) return;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(next);
      return;
    }
    const rect = toggle.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const origin = {x, y, radius: Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))};
    changing = true;
    root.style.setProperty('--theme-x', `${x}px`);
    root.style.setProperty('--theme-y', `${y}px`);
    root.classList.add('theme-changing');
    let transition;
    try {
      transition = document.startViewTransition(() => setTheme(next));
      await reveal(transition, origin);
      await transition.finished;
    } catch {
      transition?.skipTransition();
      setTheme(next);
    } finally {
      changing = false;
      root.classList.remove('theme-changing');
    }
  });
})();
