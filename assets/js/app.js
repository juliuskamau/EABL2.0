$(document).foundation();
$(document).ready(function(){
    $('.thumbnailcarousel .owl-carousel').owlCarousel(
        {
           

            loop:true,
            margin:0,
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
    $('.owl-carousel.carousel-people,.owl-carousel.owl-inner-carousel').owlCarousel(
        {
            loop:true,
            margin:40,
            nav:true,
            dots:false,
            autoplay: true,
            animateOut: 'slideOutLeft',
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


    $('.owl-carousel.carousel-people-inner').owlCarousel(
        {
            loop:true,
            margin:40,
            nav:true,
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


  $(document).ready(function(){
    $('.owl-carousel.banner').owlCarousel(
        {
            loop:true,
            margin:0,
            nav:false,
            dots:true,
            autoplay: true,
            animateOut: 'slideOutUp',
           // animateIn: 'slideInUp',
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
    $('.stock-wrapper .owl-carousel').owlCarousel(
        {
            loop:true,
            margin:10,
            dots:false,
            nav:false,
            mouseDrag:false,
            autoplay:true,
            animateOut: 'slideOutLeft',
            autoplayTimeout:4000,
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
    $('.owl-carousel.boardthumb').owlCarousel(
        {
            loop:true,
            margin:0,
            nav:true,
            dots:false,
            autoplay: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:3
                }
            }
        }
    );
  });

  $(document).ready(function(){
    $('.owl-carousel.boardthumb-bio').owlCarousel(
        {
            loop:true,
            margin:0,
            nav:false,
            dots:false,
            autoplay: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
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

        $('.jarallax-keep-img').jarallax({
            keepImg: true,
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


            (function($) {
    
               var allPanels = $('.accordioncontent').hide();
                  
                $('.accordionheader,.closebutton').click(function() {

                    $('.accordionheader.active').removeClass('active');
                    $(this).addClass('active')

                  allPanels.slideUp();
                  $(this).parent().next().slideDown();
                  return false;
                });
              
              })(jQuery);

   