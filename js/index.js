$(function(){



$('#dowebok').simplerSidebar({
    opener: '#menu',
    sidebar: {
        align: 'right',
        width: 200
    }
});



$('.search_btn').on('click', function(){
    $('.search_form').fadeToggle();
});



// $('.gotop').on('click', function(){
//   $('html,body').animate({scrollTop : 0}, 500);
//   return false;
// });

var hdbtn = $('.type_btn .hd');
hdbtn.each(function(index, element){
  $(element).on('click', function(){
    $(element).parent().siblings().find('.bd').slideUp();
    $(element).siblings('.bd').find('.bd').slideUp();
    $(element).siblings('.bd').slideToggle();
  });
});



var index_pro_swiper = new Swiper('.index_pro_swiper', {
    loop:true,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.sprev',
        prevEl: '.snext',
    }
});





var join3_swiper = new Swiper('.join3_swiper', {
     slidesPerView : 3,
    navigation: {
        nextEl: '.sprev',
        prevEl: '.snext',
    },
    breakpoints: { 
        //当宽度小于等于991
        991: {
          slidesPerView: 1,
    },
   }
});



var ab3_hd = new Swiper('.ab3_hd_swiper', {
  slidesPerView: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var ab3_bd = new Swiper('.ab3_bd_swiper', {
  slidesPerView: 1, 
  navigation: {
    nextEl: '.snext',
    prevEl: '.sprev',
  },
  thumbs: {
    swiper: ab3_hd,
  },
});



var myswiper = new Swiper('.ab4_swiper', {
    slidesPerView: 3,
    breakpoints: { 
        //当宽度小于等于991
        991: {
          slidesPerView: 1,
    }},
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        dragSize: 100,
        draggable: true,
        snapOnRelease: false,
    },
  
});

var ab5_swiper = new Swiper('.ab5_swiper', {
    slidesPerView :1,
    navigation: {
        nextEl: '.sprev',
        prevEl: '.snext',
    },
});



var prov_hd = new Swiper('.prahd_swiper', {
  slidesPerView: 3,
  spaceBetween : 10,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var prov_bd = new Swiper('.prabd_swiper', {
  slidesPerView: 1, 
  navigation: {
    nextEl: '.snext',
    prevEl: '.sprev',
  },
  thumbs: {
    swiper: prov_hd,
  },
});



var prov2_box = new Swiper('.prov2_swiper', {
  slidesPerView: 1, 
  navigation: {
    nextEl: '.prov2_snext',
    prevEl: '.prov2_sprev',
  },
});




});