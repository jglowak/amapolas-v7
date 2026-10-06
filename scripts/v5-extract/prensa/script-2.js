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

async function handlePresaSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('prensaBtn');
  const form = document.getElementById('prensaForm');
  const success = document.getElementById('prensaSuccess');
  const turnstile = document.querySelector('[name="cf-turnstile-response"]');
  if (!turnstile || !turnstile.value) { alert('Por favor completá la verificación.'); return; }
  btn.disabled = true;
  btn.textContent = 'Enviando...';
  try {
    const res = await fetch(form.action, {method:'POST', body:new FormData(form)});
    if (res.ok) { form.style.display = 'none'; success.style.display = 'block'; }
    else throw new Error();
  } catch {
    btn.disabled = false;
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Enviar consulta';
    alert('Hubo un error. Por favor intentá de nuevo.');
  }
}
