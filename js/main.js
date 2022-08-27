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
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});
$(function () {
  $(".col-md-4").slice(0, 3).show();
  $("body").on('click touchstart', '.load-more', function (e) {
    e.preventDefault();
    $(".col-md-4:hidden").slice(0, 3).slideDown();
    if ($(".col-md-4:hidden").length == 0) {
      $(".load-more").css('visibility', 'hidden');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
});
