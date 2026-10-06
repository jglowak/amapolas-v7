// NAV
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

// REVEAL
const revealIO = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  {threshold: 0.08}
);
document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));

// CONTADOR DE CAMPAÑA
// Lee los valores desde los atributos data- del elemento #campaign-counter
// Para actualizar: cambiar data-raised, data-goal, data-donors en el HTML
// Para activar/desactivar: agregar/quitar la clase "active" al div#campaign-counter
(function() {
  const el = document.getElementById('campaign-counter');
  if (!el || !el.classList.contains('active')) return;

  const raised  = parseFloat(el.dataset.raised)  || 0;
  const goal    = parseFloat(el.dataset.goal)     || 1;
  const donors  = parseInt(el.dataset.donors)     || 0;
  const pct     = Math.min(100, Math.round((raised / goal) * 100));
  const remaining = Math.max(0, goal - raised);

  function fmtUSD(n) {
    return 'USD ' + n.toLocaleString('es-AR');
  }

  document.getElementById('cc-raised').textContent    = fmtUSD(raised);
  document.getElementById('cc-remaining').textContent = fmtUSD(remaining);
  document.getElementById('cc-donors').textContent    = donors;
  document.getElementById('cc-goal-label').textContent = fmtUSD(goal);
  document.getElementById('cc-pct').textContent       = pct + '%';

  // Animar barra
  setTimeout(() => {
    document.getElementById('cc-bar').style.width = pct + '%';
  }, 300);
})();
