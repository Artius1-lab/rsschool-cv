
const swiper = new Swiper('.swiper', {
  spaceBetween:10,  
  slidesPerView: 3,

  grid: {
    rows: 2,
    fill:"row",
  },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        320: {
          slidesPerView:1,
          spaceBetween: 0,

        },
        640: {
          
          spaceBetween: 0,
        },
        1600: {

          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 0,
        },

      }
  });
