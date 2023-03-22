
// navbar fixed, scroll top begin
window.onscroll = function () { myFunction() }

const topnav = document.querySelector(".nav-menu");
let sticky = topnav.offsetTop;

function myFunction() {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    topnav.classList.add("sticky");
    document.querySelector(".connect-chevron").style.display = "block";

  } else {

    topnav.classList.remove("sticky");
    document.querySelector(".connect-chevron").style.display = "none";

  }

}

// navbar fixed, scroll top end

// scroll to next begin



// $(() => {
//   if ($('.scroll-down').length > 0) {
//     $(".scroll-down button").click(function () {
//       $('html, body').animate({
//         scrollTop:
//           $(this).closest("section").next().offset().top
//       }, "slow");
//     });
//   }
// })

// scroll to next end



// slider-top begin

$(() => {
  /// manshet slider ///
  let galleryThumbs = new Swiper('div.manshet_appartment .gallery-thumbs', {
    spaceBetween: 16,
    slidesPerView: 4,
    loop: true,
    allowTouchMove: true,
    freeMode: false,
    loopedSlides: 4, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: 'div.manshet_appartment .swiper-button-next',
      prevEl: 'div.manshet_appartment .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
      slideSpeed: 3000,
      disableOnInteraction: false,
    },
  });
  let galleryTop = new Swiper('div.manshet_appartment .gallery-top', {
    spaceBetween: 16,
    loop: true,
    loopedSlides: 4, //looped slides should be the same 
    thumbs: {
      swiper: galleryThumbs,
    },
    effect: 'fade',
  });
  $('div.manshet_appartment .swiper-slide').on('click', function (e) {
    e.preventDefault();
    galleryTop.slideTo($(this).index());
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
  /// end manshet slider ///

  //reference-slide begin
  $(".reference-card").owlCarousel({  // for second slider( add some class(shop-slider) into 'owl-carousel')
    items: 1,
    margin: 10,
    loop: true,
    autoplayHoverPause: true, // stop loop during hovering mouse
    responsiveClass: true,
    autoplay: true,
    // loopedSlides 4,
    autoplayTimeout: 2500,
    navigation: true,
    navigationText: ["<img src='img/left-vector.png'>", "<img src='img/right-vector.png'>"],
    responsive: {
      0: {
        items: 1,
      },
      410: {
        items: 2,
      },
      680: {
        items: 3,  // amount of items
      },
      1000: {
        items: 4,
      },
    },
  });
  //reference-slide end
});

// slider-top end

