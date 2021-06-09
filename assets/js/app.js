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