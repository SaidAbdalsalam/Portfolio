// ============================================
// LANGUAGE TOGGLE
// ============================================
const langToggle = document.getElementById('langToggle');
const html = document.documentElement;

function setLang(lang) {
  html.setAttribute('data-lang', lang);
  html.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-en][data-ar]').forEach(el => {
    const text = lang === 'ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    if (text !== null) el.textContent = text;
  });

  localStorage.setItem('preferredLang', lang);
}

langToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-lang');
  setLang(current === 'en' ? 'ar' : 'en');
});

// restore preference on load
const savedLang = localStorage.getItem('preferredLang');
if (savedLang) setLang(savedLang);

// ============================================
// TERMINAL TYPING EFFECT
// ============================================
const typedLineEl = document.getElementById('typedLine');
const outputEl = document.getElementById('terminalOutput');

const command = 'git log --oneline -n 3';
const output = [
  { text: 'a3f21c9 ', cls: '' },
  { text: 'harden JWT signing key rotation\n', cls: '' },
  { text: '8e0b7d4 ', cls: '' },
  { text: 'add HybridCache layer for service lookups\n', cls: '' },
  { text: '5c19a02 ', cls: '' },
  { text: 'model WorkOrder aggregate boundaries', cls: '' }
];

let i = 0;
function typeCommand() {
  if (i < command.length) {
    typedLineEl.textContent += command.charAt(i);
    i++;
    setTimeout(typeCommand, 45 + Math.random() * 35);
  } else {
    setTimeout(showOutput, 300);
  }
}

function showOutput() {
  const html = output.map(seg => `<span class="${seg.cls}">${seg.text}</span>`).join('');
  outputEl.innerHTML = html;
}

// only run animation if element exists and reduced motion isn't preferred
if (typedLineEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  typeCommand();
} else if (typedLineEl) {
  typedLineEl.textContent = command;
  showOutput();
}
