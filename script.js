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
    btn.textContent = `Protocolo iniciado, ${nome}.`;
    btn.style.background = 'var(--sapphire-glow)';
    btn.style.color = 'var(--preto)';
    btn.style.cursor = 'default';
    btn.disabled = true;
  });
}

// ── NUMBERS: Count-Up Animation ──────────────────────────
const animateNumbers = () => {
  const nums = document.querySelectorAll('.number-val');
  nums.forEach(num => {
    const target = parseInt(num.textContent.replace(/\D/g, ''));
    if (!isNaN(target) && target > 0) {
      let count = 0;
      const speed = target / 50;
      const update = () => {
        count += speed;
        if (count < target) {
          num.firstChild.textContent = Math.ceil(count);
          setTimeout(update, 30);
        } else {
          num.firstChild.textContent = target;
        }
      };
      update();
    }
  });
};

// Trigger count-up when section is visible
const numSection = document.querySelector('.section-portfolio');
if (numSection) {
  const observerNum = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateNumbers();
      observerNum.unobserve(numSection);
    }
  }, { threshold: 0.5 });
  observerNum.observe(numSection);
}

// ── CURSOR SUBTLE GLOW (Sapphire Edition) ───────
const cursor = document.createElement('div');
cursor.style.cssText = `
  position:fixed; pointer-events:none; z-index:9999;
  width:12px; height:12px; border-radius:50%;
  background:var(--sapphire-glow);
  transform:translate(-50%,-50%);
  transition:transform 0.1s, opacity 0.3s;
  mix-blend-mode: screen;
  box-shadow: 0 0 20px var(--sapphire-glow);
  opacity: 0;
`;
document.body.appendChild(cursor);

window.addEventListener('mousemove', e => {
  cursor.style.opacity = '0.4';
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
