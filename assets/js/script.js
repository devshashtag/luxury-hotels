const navList = document.getElementById('nav__list');
const navToggle = document.getElementById('nav__toggle');

// navbar toggle
navToggle.addEventListener('click', () => {
  // switch nav toggle and show menu
  navToggle.classList.toggle('active');
  navList.classList.toggle('active');
});
