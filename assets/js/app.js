$(document).foundation();
$(document).ready(function(){
    $('.thumbnailcarousel .owl-carousel').owlCarousel(
        {
            loop:true,
            margin:40,
            nav:true,
            dots:false,
            autoplay: true,
            responsive:{
                0:{
                    items:6
                },
                600:{
                    items:8
                },
                1000:{
                    items:8
                }
            }
        }
    );
  });

  $(document).ready(function(){
    $('.owl-carousel.carousel-people').owlCarousel(
        {
            loop:true,
            margin:40,
            nav:true,
            dots:false,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        }
    );
  });


  $(document).ready(function(){
    $('.owl-carousel.banner').owlCarousel(
        {
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        }
    );
  });




     jQuery(document).ready(function($) {
        $('.jarallax').jarallax({
            speed: 0.5,
        });  
        $(window).resize(function() {
                $('.jarallax').jarallax('onResize');
                    $('.jarallax').css('width', $(window).width() + 'px');
            });
            $(window).on('orientationchange', function() {
                $('.jarallax').jarallax('onResize');
                $('.jarallax').css('width', $(window).width() + 'px');
                });
    });