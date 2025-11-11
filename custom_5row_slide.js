document.addEventListener('DOMContentLoaded', function() {
var mySwiper = new Swiper('.shampoo_wrap #shampoo_bar', { 
            navigation: {
            nextEl: ".shampoo_wrap #shampoo_bar .swiper-button-next",
            prevEl: ".shampoo_wrap #shampoo_bar .swiper-button-prev",
        },
        scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
      loop:true,
        })});


