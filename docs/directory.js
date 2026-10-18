(() => {
  'use strict';
  const controls = document.getElementById('directory-controls');
  const search = document.getElementById('exercise-search');
  const grid = document.getElementById('exercise-grid');
  const empty = document.getElementById('search-empty');
  const status = document.getElementById('search-status');
  const count = document.querySelector('.collection-heading > span');
  const normalize = text => text.normalize('NFKD').replace(/\p{M}/gu, '').toLocaleLowerCase('de').replace(/ß/g, 'ss');
  const cards = [...grid.querySelectorAll('.exercise')].map(card => ({
    card,
    added: Date.parse(card.dataset.added) || 0,
    name: normalize([...card.querySelectorAll('h3, .subject')].map(el => el.textContent).join(' '))
  })).sort((a, b) => b.added - a.added);
  grid.append(...cards.map(({card}) => card));

  function filter() {
    const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const {card, name} of cards) {
      card.hidden = !words.every(word => name.includes(word));
      if (!card.hidden) visible++;
    }
    count.textContent = String(visible).padStart(2, '0');
    empty.hidden = visible > 0;
    status.textContent = `${visible} ${visible === 1 ? 'Lernraum' : 'Lernräume'} gefunden.`;
  }

  // Search text is intentionally never persisted.
  search.value = '';
  filter();
  controls.hidden = false;
  search.addEventListener('input', filter);
  window.addEventListener('pageshow', event => {
    if (!event.persisted) return;
    search.value = '';
    filter();
  });
})();
