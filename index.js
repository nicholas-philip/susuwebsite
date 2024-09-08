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


  
// document.addEventListener("DOMContentLoaded", function() {
//   // Get the dropdown toggle link and menu
//   const dropdownToggle = document.getElementById("dropdownToggle");
//   const dropdownMenu = document.getElementById("dropdownMenu");

//   // Add click event listener to the dropdown toggle
//   dropdownToggle.addEventListener("click", function(event) {
//     // Prevent default anchor behavior
//     event.preventDefault();

//     // Toggle the hidden class on the dropdown menu
//     dropdownMenu.classList.toggle("hidden");
//   });

//   // Close the dropdown if clicked outside
//   document.addEventListener("click", function(event) {
//     if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
//       dropdownMenu.classList.add("hidden");
//     }
//   });
// });



const swiper1 = new Swiper(".slider-1", {
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
