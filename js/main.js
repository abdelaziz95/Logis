$(function () {
  "use strict";

  var winH = $(window).height(),
    wordHi = $(".word").height();

  $(".header").height(winH);
  $(".word").css("paddingTop", (winH - wordHi) / 2);

  $(".navbar-nav .nav-item .nav-link").on("click", function () {
    $(".navbar ul li a").removeClass("active");
    $(this).addClass("active");
  });

  $(window).scroll(function () {
    $(".navbar-section").toggleClass("scrolled", $(this).scrollTop() > 100);
    $(".block").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 100) {
        var blockID = $(this).attr("id");
        $(".navbar a").removeClass("active");
        $('ul li a[data-scroll="' + blockID + '"]').addClass("active");
      }
    });
  });

  $("ul li a").click(function (e) {
    e.preventDefault();
    $("html , body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 80,
      },
      1500
    );
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  $(".carousel").carousel({ interval: 2500 });
  window.sr = ScrollReveal();

  sr.reveal('.navbar',{
    duration: 2000,
    origin: 'bottom',
  })

  sr.reveal('.header-first-div',{
    duration: 2000,
    origin: 'top',
    distance:'300px'
    
  })

  sr.reveal('.about-left-side',{
      duration: 2000,
      origin: 'bottom',
      distance:'300px',
      delay: 200,
      viewFactor: 0.2
  })

  sr.reveal('.about-right-side',{
      duration: 2000,
      origin: 'bottom',
      distance:'300px',
      viewFactor : 0.2
  })

  sr.reveal('.one',{
      duration: 2000,
      origin: 'left',
      distance:'300px',
      viewFactor : 0.2
  })
  sr.reveal('.two',{
      duration: 2000,
      origin: 'top',
      distance:'600px',
      viewFactor: 0.2
  })
  sr.reveal('.three',{
      duration: 2000,
      origin: 'right',
      distance:'900px',
      viewFactor: 0.2,
      
  })
  sr.reveal('.s-row',{
      duration: 2000,
      origin: 'bottom',
      distance:'300px',
      viewFactor: 0.2
      
  })

});
