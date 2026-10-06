const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('solid', window.scrollY > 40);
  document.getElementById('stop').classList.toggle('on', window.scrollY > 400);
}, {passive: true});

document.getElementById('ham').addEventListener('click', () =>
  document.getElementById('mob').classList.add('open')
);

function toggleMobAcc(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

const io = new IntersectionObserver(
  entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
  {threshold: .08}
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

async function handleFormSubmit(formId, btnId, successId, e) {
  e.preventDefault();
  const btn = document.getElementById(btnId);
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  const turnstile = form.querySelector('[name="cf-turnstile-response"]');
  if (turnstile && !turnstile.value) {
    alert('Por favor completá la verificación de seguridad.');
    return;
  }
  const origText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Enviando...';
  try {
    const res = await fetch(form.action, {method: 'POST', body: new FormData(form)});
    if (res.ok) {
      form.style.display = 'none';
      success.style.display = 'block';
    } else throw new Error();
  } catch {
    btn.disabled = false;
    btn.textContent = origText;
    alert('Hubo un error. Por favor intentá de nuevo.');
  }
}

function handleAlianzaSubmit(e) {
  handleFormSubmit('alianzaForm', 'alianzaBtn', 'alianzaSuccess', e);
}
function handleVolSubmit(e) {
  handleFormSubmit('volForm', 'volBtn', 'volSuccess', e);
}
