// Navigation toogle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const themeToggler = document.querySelector('#theme-toggle1');

// Toggle the menu and the theme toggle visibility
hamburger.addEventListener('click', () => {
  navList.classList.toggle('open');
  themeToggler.classList.toggle('visible'); // Toggle visibility class for the theme toggle
});


// Dark mode toggle
// const themeToggle = document.getElementById('theme-toggle','theme-toggle1');
// const themeIcon = document.getElementById('theme-icon');
// const body = document.body;

// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');

//   // Toggle icon
//   if (body.classList.contains('dark-mode')) {
//     themeIcon.classList.replace('bx-moon', 'bx-sun');
//   } else {
//     themeIcon.classList.replace('bx-sun', 'bx-moon');
//   }
// });