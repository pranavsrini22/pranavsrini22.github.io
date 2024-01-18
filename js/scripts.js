/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */

let imgID = ["SEDS", "NSF", "BAC", "JHUAPL", "JHUAPL1", "FTC"];
let len = [5, 3, 2, 1, 1, 3];
function buttonClick(i) {
  let img = 1;
  const myImg = document.getElementById(imgID[i]);
  const rightButton = document.getElementById("rightButton" + imgID[i]);
  const leftButton = document.getElementById("leftButton" + imgID[i]);
  
  let imgNum = len[i];
  
  rightButton.addEventListener("click", function() {
    if (img == 1 && i == 1) {
      myImg.src = "assets/img/portfolio/" + imgID[i] + "-" + img.toString() + ".gif";
    } else {
      myImg.src = "assets/img/portfolio/" + imgID[i] + "-" + img.toString() + ".png";
    }
    if (img >= imgNum) {
      img = 1;
    } else {
      img++;
    }
  });

  leftButton.addEventListener("click", function() {
    if (img == 1 && i == 1) {
      myImg.src = "assets/img/portfolio/" + imgID[i] + "-" + img.toString() + ".gif";
    } else {
      myImg.src = "assets/img/portfolio/" + imgID[i] + "-" + img.toString() + ".png";
    }
    if (img <= 1) {
      img = imgNum;
    } else {
      img--;
    }
  });
}
buttonClick(0);
buttonClick(1);
buttonClick(2);
buttonClick(5);

    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  