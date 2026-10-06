const navbar = document.getElementById('navbar');
function updateNav() {
  const past = window.scrollY > 40;
  navbar.classList.toggle('over-bg', !past);
  navbar.classList.toggle('solid', past);
}
window.addEventListener('scroll', updateNav, {passive:true});
updateNav();
window.addEventListener('scroll', () => {
  document.getElementById('stop').classList.toggle('on', window.scrollY > 500);
}, {passive:true});
document.getElementById('ham').addEventListener('click', () =>
  document.getElementById('mob').classList.add('open')
);
function toggleMobAcc(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}
const io = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  {threshold:.08}
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
