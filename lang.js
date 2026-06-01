function setLang(lang) {
  document.querySelectorAll('[data-pt]').forEach(el => {
    el.innerText = el.dataset[lang];
  });
  localStorage.setItem('lang', lang);
}

window.onload = () => {
  const saved = localStorage.getItem('lang') || 'pt';
  setLang(saved);
};
