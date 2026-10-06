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

// LIGHTBOX
const fotos = [
  {src:'viviendas 1.webp', caption:'Jornada de bioconstrucción — Barrio Amapolas'},
  {src:'viviendas 2.webp', caption:'Asamblea cooperativa'},
  {src:'viviendas 3.webp', caption:'Territorio del proyecto'},
  {src:'vivienda-4.webp',  caption:'Taller de diseño participativo'},
  {src:'vivienda 5.webp',  caption:'Materiales de bioconstrucción'},
  {src:'vivienda 6.webp',  caption:'La comunidad'},
];
let currentFoto = 0;
function openLightbox(idx) {
  if (!fotos[idx].src) return;
  currentFoto = idx;
  document.getElementById('lightboxImg').src = fotos[idx].src;
  document.getElementById('lightboxCaption').textContent = fotos[idx].caption;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
function navLightbox(dir) {
  currentFoto = (currentFoto + dir + fotos.length) % fotos.length;
  openLightbox(currentFoto);
}
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') navLightbox(1);
  if (e.key === 'ArrowLeft') navLightbox(-1);
});
function openPlano() { /* activar con src del plano cuando esté disponible */ }
