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
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function() {
  navBar.classList.add("active");
  body.style.overflow = "hidden";
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
};

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
  body.style.overflow = "auto";
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
};

// Close menu when clicking on links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function() {
    navBar.classList.remove("active");
    body.style.overflow = "auto";
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

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