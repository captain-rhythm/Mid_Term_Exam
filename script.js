/* ── Task 1: Hamburger Menu ─────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked (mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── Task 4: Visitor Counter (setInterval) ──────────── */
let count = 0;
const counterEl = document.getElementById('counterValue');

setInterval(() => {
  count++;
  counterEl.textContent = count;
}, 1000);

/* ── Task 5: Live Textarea Character Counter ─────────── */
const textarea  = document.getElementById('fmessage');
const charCount = document.getElementById('charCount');
const MAX_CHARS = 1000;

textarea.addEventListener('input', () => {
  const len = textarea.value.length;
  charCount.textContent = `${len} / ${MAX_CHARS} characters`;
  if (len > MAX_CHARS) {
    charCount.classList.add('over');
  } else {
    charCount.classList.remove('over');
  }
});

/* ── Task 5: Form Validation (no default validation) ─── */
function showError(id, show) {
  document.getElementById(id).style.display = show ? 'block' : 'none';
}

function validateForm() {
  const name    = document.getElementById('fname').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const age     = document.getElementById('fage').value.trim();
  const message = document.getElementById('fmessage').value.trim();
  const success = document.getElementById('formSuccess');

  let valid = true;

  // Name: cannot be empty
  if (name === '') {
    showError('nameError', true);
    valid = false;
  } else {
    showError('nameError', false);
  }

  // Email: cannot be empty + must contain @
  if (email === '' || !email.includes('@')) {
    showError('emailError', true);
    valid = false;
  } else {
    showError('emailError', false);
  }

  // Age: cannot be empty + must be numeric
  if (age === '' || isNaN(Number(age)) || Number(age) <= 0) {
    showError('ageError', true);
    valid = false;
  } else {
    showError('ageError', false);
  }

  // Message: cannot be empty + max 1000 characters
  if (message === '' || message.length > MAX_CHARS) {
    showError('msgError', true);
    valid = false;
  } else {
    showError('msgError', false);
  }

  if (valid) {
    success.style.display = 'block';
    // Reset form
    document.getElementById('fname').value    = '';
    document.getElementById('femail').value   = '';
    document.getElementById('fage').value     = '';
    document.getElementById('fmessage').value = '';
    charCount.textContent = `0 / ${MAX_CHARS} characters`;
    charCount.classList.remove('over');
  } else {
    success.style.display = 'none';
  }
}
