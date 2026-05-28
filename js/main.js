// Navbar scroll effect
window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 2px 20px rgba(201, 168, 76, 0.2)';
  } else {
    nav.style.boxShadow = 'none';
  }
});