// Navbar scroll effect
window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 50
      ? '0 2px 20px rgba(201, 168, 76, 0.2)'
      : 'none';
  }
});

// Typing animation
const typedEl = document.getElementById('typed-text');
if (typedEl) {
  const texts = [
    'Associate Data Engineer',
    'Web Developer',
    'Mobile Developer'
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = texts[textIndex];

    if (isDeleting) {
      typedEl.textContent = current.substring(0, charIndex--);
    } else {
      typedEl.textContent = current.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === current.length + 1) {
      isDeleting = true;
      setTimeout(type, 1500);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 60 : 100);
  }

  type();
}