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
var nav = document.getElementById("nav"),
  i = document.getElementById("i"),
  c1 = document.getElementsByTagName("div")[2],
  c2 = document.getElementsByTagName("div")[3],
  c3 = document.getElementsByTagName("div")[4];
i.addEventListener("click", function () {
  if (nav.className.match(/\bopen\b/)) {
    nav.classList.remove("open");
    c1.classList.remove("close-c1");
    c2.classList.remove("close-c2");
    c3.classList.remove("close-c3");
  } else {
    nav.classList.add("open");
    c1.classList.add("close-c1");
    c2.classList.add("close-c2");
    c3.classList.add("close-c3");
  }
});
nav.addEventListener("click", function () {
  nav.classList.remove("open");
  c1.classList.remove("close-c1");
  c2.classList.remove("close-c2");
  c3.classList.remove("close-c3");
});
