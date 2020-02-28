
$(document).ready(function() {
  (function (window, $) {
  'use strict';

  // Cache document for fast access.
  //var document = window.document;

  /* bxslider */
  function mainSlider() {
    $('.bxslider').bxSlider({
		auto: true,
      pagerCustom: '#bx-pager',
      mode: 'fade',
      nextText: '',
      prevText: ''
    });
  }

  mainSlider();

  var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
  $links.click(function(){
     $(".slider-caption").removeClass('animated fadeInLeft');
     $(".slider-caption").addClass('animated fadeInLeft');
  });

  $(".bx-controls").addClass('container');
  $(".bx-next").addClass('fa fa-angle-right');
  $(".bx-prev").addClass('fa fa-angle-left');


  })(window, jQuery);


  /* Parallax */
  function initParallax() {
	$('beachHeader').parallax("100%", 0.3)
    $('#about').parallax("100%", 0.2);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();

  });
