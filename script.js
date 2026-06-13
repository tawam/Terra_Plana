const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.proof-card');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tag = btn.dataset.filter;
    cards.forEach(card => {
      const tags = card.dataset.tags || '';
      card.classList.toggle('hidden', tag !== 'all' && !tags.includes(tag));
    });
  });
});
