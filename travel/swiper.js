new Swiper('.image-slider',{

 pagination: {
 el: '.circle1',
 clickable: true,
 
 dinamicBullets:true,

},
slideToClickedSlide:true,

autoHeight:true,
slidesPerView: 1,
centerSlides:true,
initialSlide:1,
loop:true,
spaceBetween:10,
//autoplay:{
   // delay:1000,
  //  stopOnLastSlide:true,
   // disableOnInteraction:false
//},
//speed:800,

});