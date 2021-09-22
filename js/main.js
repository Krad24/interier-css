$(function(){

    $('.slick').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick__arrow slick__arrowprev"><img src="images/arrow-prev.svg" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="slick__arrow slick__arrownext"><img src="images/arrow-next.svg" alt="arrow-next"></button>',
  
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: false,
              arrows: false,
              autoplay: true,
              fade: true,
            }
          }
        ],
      });


});