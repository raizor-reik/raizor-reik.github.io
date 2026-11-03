(() => {
  const current = document.documentElement.lang === 'es' ? 'es' : 'en';
  const match = location.pathname.match(/\/(index|animation|modeling|studies|films)(-es)?(?:\.html)?\/?$/);
  const page = match ? match[1] : 'index';
  const target = language => new URL('./' + page + (language === 'es' ? '-es' : '') + '.html' + location.search + location.hash, location.href);
  let preferred;
  try { preferred = localStorage.getItem('portfolio-language'); } catch {}
  if ((preferred === 'es' || preferred === 'en') && preferred !== current) {
    location.replace(target(preferred).href);
    return;
  }
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-language]').forEach(link => {
      link.href = target(link.dataset.language).href;
      link.addEventListener('click', () => {
        try { localStorage.setItem('portfolio-language', link.dataset.language); } catch {}
      });
    });
  });
})();
