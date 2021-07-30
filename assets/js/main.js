(function ($) {
	
	"use strict";

	// Header Type = Fixed
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    /*if (scroll >= box - header) {*/
      if (scroll >= 80) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });

  /*// Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });*/


  $('.owl-our-team').owlCarousel({
    items:3,
    loop:true,
    dots: true,
    nav: false,
    autoplay: true,
    margin:0,
    responsive:{
     0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:3
    },
    1600:{
      items:3
    }
  }
})


	// Menu Dropdown Toggle
  if($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }


  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if(width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);  
        }       
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });

  $(document).ready(function () {
    $(document).on("scroll", onScroll);

      //smoothscroll
      $('.scroll-to-section a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.scroll-to-section a').each(function () {
          $(this).removeClass('active');
        })
        $(this).addClass('active');
        
        var target = this.hash,
        menu = target;
        var target = $(this.hash);
        $('html, body').stop().animate({
          scrollTop: (target.offset().top) + 1
        }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
      });
    });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav ul li a').removeClass("active");
        currLink.addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
    });
  }



	// Page loading animation
  $(window).on('load', function() {

    $('#js-preloader').addClass('loaded');

  });



	// Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if(width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>"):
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  });

  introCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  });





})(window.jQuery);