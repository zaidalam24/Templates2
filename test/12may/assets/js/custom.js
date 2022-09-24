(function($) {
    'use strict';

  	// Prealoader
    $(window).on('load', function(){
      $(".prealoader").delay(2000).fadeOut("slow");
    });

    // ScrollUp
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 200) {
        $('.scrollup').fadeIn(500);
      } else {
        $('.scrollup').fadeOut(500);
      }
    });

    $('.scrollup').on('click', function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
   
    // Sticky Header
    // $(window).on('scroll', function() {
    //   if ($(window).scrollTop() >= 250) {
    //       $('.sticky-nav').addClass('sticky-menu');
    //   }
    //   else {
    //       $('.sticky-nav').removeClass('sticky-menu');
    //   }
    // });

    // Search Popup
    $(document).on('click','.header-search-toggle', function(e){
      $( "body" ).addClass( 'header-search-active' );
      $( "body" ).addClass( "overlay-enabled" );
    });

    $(document).on('click','.header-search-close', function(e){
        $( "body" ).removeClass('header-search-active');
        $( "body" ).removeClass( "overlay-enabled" );
        return this;
    });

    // Menubar Hover Active
    $('.menubar .menu-wrap > li').hover(
    function(){
      $("li.active").addClass('inactive').removeClass('active');
    },
    function(){
      $("li.inactive").addClass('active').removeClass('inactive'); 
    });

    // Add/Remove .focus class for accessibility
    $('.menubar, .widget_nav_menu').find('a').on('focus blur', function() {
      $( this ).parents('ul, li').toggleClass('focus');
    });    

    // Mobile Menu
    $(".menubar .menu-wrap").clone().appendTo(".mobile-menu");
    var $mob_menu = $("body");
    $(".close-menu").on("click", function() {
      $mob_menu.removeClass("header-menu-active");
      $mob_menu.removeClass( "overlay-enabled" );
    });
	
	  $(document).on('keyup', function(e){
      if (e.keyCode == 27) {
        $mob_menu.removeClass("header-menu-active");
        $mob_menu.removeClass( "overlay-enabled" );
        $( ".header-search-popup" ).removeClass('header-search-active');
      }
    });

    $(".menu-toggle").on("click", function() {
      $mob_menu.addClass("header-menu-active");
      $mob_menu.addClass( "overlay-enabled" );
    });
    $(".mobi_drop").on("click", function(e) {
        e.preventDefault();
        $(this).parent().toggleClass("current");
        $(this).next().slideToggle();
    });

    // Header Widget
    if( !$('.header-widget').children().length > 0 ) {
      $(".header-widget").hide();
      $(".headtop-mobi").hide();
    }
    else {
      $(".headtop-mobi").show();
      $(".header-widget").clone().appendTo(".mobi-head-top");
        var $mob_h_top = $("#mob-h-top");
        $('.header-sidebar-toggle').on('click', function(e) {
          $mob_h_top.toggleClass("active");
          $('.header-sidebar-toggle').toggleClass("active");      
          e.preventDefault();
        });
    }

    // Main Slider
    var owlMainSlider = $('.main-slider');
    owlMainSlider.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        navText: ['<i class="icofont-arrow-left"></i>', '<i class="icofont-arrow-right"></i>'],
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            },
            992: {
                nav: true
            }
        }
    });
    // Header Slide items with animate.css    
    owlMainSlider.owlCarousel();
    owlMainSlider.on('translate.owl.carousel', function (event) {
        var data_anim = $("[data-animation]");
        data_anim.each(function() {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        });
    });
    $("[data-delay]").each(function() {
        var anim_del = $(this).data('delay');
        $(this).css('animation-delay', anim_del);
    });
    $("[data-duration]").each(function() {
        var anim_dur = $(this).data('duration');
        $(this).css('animation-duration', anim_dur);
    });
    owlMainSlider.on('translated.owl.carousel', function() {
        var data_anim = owlMainSlider.find('.owl-item.active').find("[data-animation]");
        data_anim.each(function() {
            var anim_name = $(this).data('animation');
            $(this).addClass('animated ' + anim_name).css('opacity', '1');
        });
    });

    // Services Carousel
    var owlServices = $(".services-carousel");
    owlServices.owlCarousel({
        items : 3,
        center: true,
        loop: true,
        dots: false,
        nav: true,            
        navText: ['<i class="icofont-arrow-left"></i>', '<i class="icofont-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });

    // Testimonial Carousel
    var owlTestimonial = $(".testimonial-carousel");
    owlTestimonial.owlCarousel({
        items : 3,
        center: true,
        loop: true,
        dots: false,
        nav: true,            
        navText: ['<i class="icofont-arrow-left"></i>', '<i class="icofont-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });

    // Blog Images Carousel
    var blogImgCarousel = $(".blog-img-carousel");
    blogImgCarousel.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        navText: ['<i class="icofont-simple-left"></i>', '<i class="icofont-simple-right"></i>'],
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true
            },
            992: {
                nav: true
            }
        }
    });

    // MagnificPopup
    $('.mgf-popup').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      callbacks: {
        elementParse: function(item) {
          console.log(item.el[0].className);
          if(item.el[0].className == 'video') {
            item.type = 'iframe',
            item.iframe = {
               patterns: {
                 youtube: {
                   index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                   id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; } 

                   src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
                 },
                 vimeo: {
                   index: 'vimeo.com/',
                   id: '/',
                   src: '//player.vimeo.com/video/%id%?autoplay=1'
                 },
                 gmaps: {
                   index: '//maps.google.',
                   src: '%id%&output=embed'
                 }
               }
            }
          } else {
             item.type = 'image',
             item.tLoading = 'Loading image #%curr%...',
             item.mainClass = 'mfp-img-mobile',
             item.image = {
               tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
             }
          }

        }
      }
    });

    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //AV Filter Tab
    activePostFilter();
    function activePostFilter(){
        var postFilter = $('.av-filter-init');
        $.each(postFilter,function (index,value) {
            var el = $(this);
            var parentClass = $(this).parent().attr('class');
            var $selector = $('#'+el.attr('id'));
            $($selector).imagesLoaded(function () {
                var festivarMasonry = $($selector).isotope({
                    itemSelector: '.av-filter-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 0,
                        gutter:0
                    }
                });
                $(document).on('click', '.'+parentClass+' .av-tab-filter a', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
        });
    }
    $(document).on('click', '.av-tab-filter a', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // Load Button Filter
    $(".av-load-3").slice(0, 6).show();
    $(".av-load-4").slice(0, 8).show();
    $(".av-load-btn").on('click', function (e) {
        e.preventDefault();
        $(".av-load-btn").addClass("loadspinner");
        $(".av-load-btn").animate({
                display: "block"
            }, 2000,
            function () {
                // Animation complete.                
                // $(".load-2:hidden").slice(0, 2).slideDown()
                // .each(function() {
                //   $('#grid').shuffle('appended', $(this));
                // });
                $(".av-load-3:hidden").slice(0, 3).slideDown();
                $(".av-load-4:hidden").slice(0, 4).slideDown();
                if ($(".av-load-item:hidden").length === 0) {
                    $(".av-load-btn").text("No more");
                }
                $(".av-load-btn").removeClass("loadspinner");
            }
        );
    });

    // var page = 1,
    // moving = false;
    // var animationIteration = "animationiteration webkitAnimationIteration mozAnimationIteration oAnimationIteration oanimationiteration",
    //   transitionEnd      = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd";
    // $(".av-load-btn").on("click", function() {
    //   if ( moving == false ) {
    //     moving = true;
    //     $(".av-load-btn").addClass("loadspinner");
    //     setTimeout(function() {
    //       $(".av-load-btn").one(animationIteration, function() {
    //         $(".av-load-btn").removeClass("loadspinner");
    //         $(".av-load-btn").one(transitionEnd, function() {
    //           page++;
    //           moving = false;
    //         });
    //       });
    //     }, 2000);
    //   }
    // });

    // Toggle-Comments
    $('#avril-toggle-comments').on('click', function () {
      $(".avril-is-toggle-comments").toggleClass('comments-visible');    
      if($('body').hasClass('comments-visible'))
         {
        $('.toggle-comment').text('Hide');
         }
          else {
        $('.toggle-comment').text('Show');
      }
    });

})(jQuery);