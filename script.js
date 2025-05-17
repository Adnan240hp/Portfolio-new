// Sticky Navigation
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
let val;

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.classList.add("active");
  } else {
    nav.classList.remove("sticky");
    scrollBtn.classList.remove("active");
  }
};

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu');
const body = document.body;

menuBtn.addEventListener('click', function() {
  menu.classList.add('active');
  body.classList.add('menu-open');
});

closeBtn.addEventListener('click', function() {
  menu.classList.remove('active');
  body.classList.remove('menu-open');
});

// Close menu when clicking on links
const navLinks = document.querySelectorAll('.menu li a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    menu.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && event.target !== menuBtn) {
    menu.classList.remove('active');
    body.classList.remove('menu-open');
  }
});

// Preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
  setTimeout(function() {
    loader.style.opacity = "0";
    setTimeout(function() {
      loader.style.display = "none";
    }, 500);
  }, 1000);
});

// Scroll Reveal Animation
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize scroll reveal on page load
document.addEventListener("DOMContentLoaded", function() {
  reveal();
});
