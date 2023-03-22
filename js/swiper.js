
  // init Swiper:
  let swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   loop: true,
   navigation: {
     nextEl: ".swiper__btn-next",
     prevEl: ".swiper__btn-prev",
    },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
     type: 'fraction',
     
   },
   mousewheel: true,
   keyboard: true,
 });