const layout = document.getElementById('layout');
const toggleBtn = document.getElementById('navToggle');

toggleBtn.addEventListener('click', () => {
  const collapsed = layout.classList.toggle('is-collapsed');
  toggleBtn.setAttribute('aria-expanded', String(!collapsed));
});