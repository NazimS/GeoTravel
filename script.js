
// navbar fixed, scroll top begin
window.onscroll = function (){myFunction()} 

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


// slider begin

$(document).ready(function () {
  /// manshet slider ///
  var galleryThumbs = new Swiper('div.manshet_appartment .gallery-thumbs', {
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
  var galleryTop = new Swiper('div.manshet_appartment .gallery-top', {
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
});

// slider end

  // let mainImage = document.getElementById("mainImage");
  // let smallImage = document.getElementsByClassName("thumb_img");

  // smallImage[0].onclick = () => {
  //   mainImage.src = smallImage[0].src;
  // }
  // smallImage[1].onclick = () => {
  //   mainImage.src = smallImage[1].src;
  // }
  // smallImage[2].onclick = () => {
  //   mainImage.src = smallImage[2].src;
  // }
  // smallImage[3].onclick = () => {
  //   mainImage.src = smallImage[3].src;
  // }
  // smallImage[4].onclick = () => {
  //   mainImage.src = smallImage[4].src;
  // }
  // smallImage[5].onclick = () => {
  //   mainImage.src = smallImage[5].src;
  // }
  // smallImage[6].onclick = () => {
  //   mainImage.src = smallImage[6].src;
  // }
  // smallImage[7].onclick = () => {
  //   mainImage.src = smallImage[7].src;
  // }
