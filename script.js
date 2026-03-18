// ══════════════════════════════════════════════════════
//  RIZZ SPECIALIST PRODUCTION — script.js
// ══════════════════════════════════════════════════════

// ── NAV: Scroll Effect ──────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── REVEAL ON SCROLL ────────────────────────────────────
const revealEls = document.querySelectorAll(
  'h2, h3, .area-card, .eco-agent, .number-item, .client-name, .declaration-body, .cta-form'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
revealEls.forEach(el => observer.observe(el));

// ── SMOOTH ANCHOR LINKS ─────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── FORM SUBMISSION ─────────────────────────────────────
const form = document.getElementById('form-contato');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const nome = document.getElementById('nome').value;
    btn.textContent = `Obrigado, ${nome}. Retornaremos em breve.`;
    btn.style.background = '#0B6E4F';
    btn.style.cursor = 'default';
    btn.disabled = true;
  });
}

// ── HOVER: Number Items Color ───────────────────────────
document.querySelectorAll('.number-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.borderTopColor = 'rgba(11,110,79,0.8)';
  });
  item.addEventListener('mouseleave', () => {
    item.style.borderTopColor = 'rgba(11,110,79,0.3)';
  });
});

// ── CURSOR SUBTLE GLOW (optional premium effect) ───────
const cursor = document.createElement('div');
cursor.style.cssText = `
  position:fixed; pointer-events:none; z-index:9999;
  width:8px; height:8px; border-radius:50%;
  background:rgba(11,110,79,0.6);
  transform:translate(-50%,-50%);
  transition:transform 0.1s, opacity 0.3s;
  mix-blend-mode: screen;
`;
document.body.appendChild(cursor);
window.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
