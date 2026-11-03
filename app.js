document.querySelectorAll('.menu-btn').forEach(button => {
  button.addEventListener('click', () => {
    const panel = document.getElementById('mobile-nav');
    const opening = panel.hasAttribute('hidden');
    panel.toggleAttribute('hidden', !opening);
    button.setAttribute('aria-expanded', String(opening));
    button.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
    button.textContent = opening ? '×' : '☰';
  });
});

const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('p');
  document.querySelectorAll('[data-full]').forEach(tile => {
    tile.addEventListener('click', () => {
      image.src = tile.dataset.full;
      image.alt = tile.querySelector('img')?.alt || 'Expanded portfolio artwork';
      caption.textContent = tile.dataset.caption || '';
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('close', () => { image.removeAttribute('src'); });
}
document.querySelectorAll('[data-year]').forEach(node => { node.textContent = new Date().getFullYear(); });
