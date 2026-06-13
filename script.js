const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}
const searchInput = document.getElementById('searchClaims');
if (searchInput) {
  const cards = [...document.querySelectorAll('[data-filter]')];
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.dataset.hidden = q && !text.includes(q) ? '1' : '0';
    });
  });
}
