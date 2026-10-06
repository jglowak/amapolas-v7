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
  {threshold:.06}
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const lbData = {
  api:    [{src:'/proyectos/apicultura.jpg', cap:'Apiario Colectivo — Tambo Báez'}, {src:'', cap:'Colmenas en el bosque'}, {src:'', cap:'Trabajo con las colmenas'}],
  plantas:[{src:'/proyectos/plantas.jpg',   cap:'Plantas nativas patagónicas'},      {src:'', cap:'Reproducción por esquejes'}, {src:'', cap:'Taller de compostaje'}],
  hongos: [{src:'', cap:'Cobertizo en Tambo Báez'}, {src:'', cap:'Cultivo de gírgolas'}, {src:'', cap:'Proceso de inoculación'}]
};
const lbIdx = {api:0, plantas:0, hongos:0};
function openLB(k, i) {
  if (!lbData[k][i].src) return;
  lbIdx[k] = i;
  document.getElementById('lb-'+k+'-img').src = lbData[k][i].src;
  document.getElementById('lb-'+k+'-cap').textContent = lbData[k][i].cap;
  document.getElementById('lb-'+k).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLB(k) {
  document.getElementById('lb-'+k).classList.remove('open');
  document.body.style.overflow = '';
}
function navLB(k, d) {
  const n = lbData[k];
  lbIdx[k] = (lbIdx[k] + d + n.length) % n.length;
  openLB(k, lbIdx[k]);
}
document.querySelectorAll('.lightbox').forEach(lb => {
  lb.addEventListener('click', function(e) {
    if (e.target === this) closeLB(this.id.replace('lb-', ''));
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.lightbox.open').forEach(lb => lb.classList.remove('open'));
});
