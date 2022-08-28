$(window).load(function () {
  $("#preloader-wrapper").fadeOut("slow");
});

$(document).ready(function () {
  //animated header class
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //console.log(scroll);
    if (scroll > 200) {
      //console.log('a');
      $(".navigation").addClass("animated");
    } else {
      //console.log('a');
      $(".navigation").removeClass("animated");
    }
  });

  $(".gallery-slider").owlCarousel({
    pagination: true,
    autoPlay: 5000,
    itemsDesktop: [1500, 4],
    itemsDesktopSmall: [979, 3],
  });

  // Gallery Popup
  $(".image-popup").magnificPopup({ type: "image" });
});
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}