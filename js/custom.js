$(function () {
  $(window).scroll(function () {
    $(window).scrollTop() < 50
      ? $("body").removeClass("sticky-header")
      : $("body").addClass("sticky-header");
  });
  if(is_touch_enabled()){
    $('body').addClass("touch_screens");
  }
  setTimeout(() => {
    $('.slick-active .slide-num').addClass('active_bg');
  }, 100);
  function is_touch_enabled() {
		return ('ontouchstart' in window) ||
			(navigator.maxTouchPoints > 0) ||
			(navigator.msMaxTouchPoints > 0);
	}
  $(".hamburg").on("click", function () {
    $(this).siblings(".menu-list").toggleClass("open-menu");
    $(".overlay-menu").addClass("open-shadow");
    $('body').toggleClass("no-scroll");
  });
  $(".close-menu").on("click", function () {
    $(".menu-list").removeClass("open-menu");
    $(".overlay-menu").removeClass("open-shadow");
    $('body').removeClass("no-scroll");
  });
  $(".overlay-menu").on("click", function () {
    $(".menu-list").removeClass("open-menu");
    $(this).removeClass("open-shadow");
    $('body').toggleClass("no-scroll");
  });
  $(".notice-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    appendArrows: $(".arrow-wrap"),
    variableWidth: true,
  });
  $(".video-slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    if( $('.video-slider .slick-current').find('video').length !== 0) {
      $(".video-slider .slick-current video").get(0).play();
    }
  });
  $('.video-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('video').each(function() {
      $(this).get(0).pause();
    });
  });
  
  $(".milestone_slider").slick({
    dots: false,
    arrows: true,
    speed: 1000,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.milestone_pagination_slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".milestone_pagination_slider").slick({
    dots: false,
    arrows: false,
    speed: 1000,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true, 
    focusOnSelect: true,
    asNavFor: '.milestone_slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }); 

  $(".Employment_slider").slick({
    dots: false,
    arrows: true,
    speed: 1000,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.Employment_pagination_slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".Employment_pagination_slider").slick({
    dots: false,
    arrows: false,
    speed: 1000,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true, 
    focusOnSelect: true,
    asNavFor: '.Employment_slider',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }); 

  $(".related-event-slider").slick({
    dots: true,
    arrows: false,
    speed: 1000,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        },
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }              
      }
    ]
  });  

  $(".down-arrow a").click(function (e) {
    e.preventDefault();
    let space = 0;
    if($(window).width()<500){
       space = 60;
    }
    else{
      space = 76;
    }
    var aid = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(aid).offset().top - space }, "slow");
  });

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() - 400;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  $(window).scroll(function () {
    // spark section
    $('.about-content-box').each(function(){
      if($(this).isInViewport()){
        let act_id = $(this).attr('dataid');
        $('.shaped-img svg image').removeClass('active');
        $('#'+ act_id).addClass('active');
        $('.slide-dots .slick-dots li').removeClass('slick-active');
        $('.slick-dots [dataid = '+ act_id + ']').addClass('slick-active');
      }
    });
    if($(window).width() >= 768){
      $('.slide-num span').html($('.shaped-img svg image.active').index() + 1);
    }
  });
  
  $(window).on('resize',function(){
    if(is_touch_enabled()){
      $('body').addClass("touch_screens");
    }
    else{
      $('body').removeClass("touch_screens");
    }
  })
  $('.play-btn').on('click', function () {
    $(this).siblings('video').trigger('play');
    $(this).parents('.video-poster').addClass('vid_play');
  });
  $('.management-desc .btn').on('click',function(){
    $(this).siblings('.managemnet-content').toggleClass('open');
    if($(this).siblings('.managemnet-content').hasClass('open')){

      $(this).text('Leer menos')
    }
    else{
      $(this).text('LEE MAS');
    }
  });
  $('.management-desc .managemnet-content').each(function(){
    if($(this).find('p').innerHeight() <= 140){
      $(this).siblings('.btn').hide();
    }
  })
});

AOS.init(); 
jQuery(window).on('load', function() {          
  AOS.refreshHard();
});
