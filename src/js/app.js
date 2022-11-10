import * as flsFunctions from "./modules/function.js";
import $ from "jquery";
flsFunctions.isWebp();

import Swiper from 'swiper/bundle';

 new Swiper('.kunden__container',{
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  mousewheel: true,
  keyboard: true,
  loop:true,
    //slidesPerView: '3',       
    breakpoints: {
      // when window width is >= 320px
      1190: {
       // slidesPerView: 3,
        slidesPerView: "auto",
        centeredSlides: true,
        cssMode: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
      },
      // when window width is >= 480px
      320: {
        slidesPerView: "auto",
        centeredSlides: true,
        mousewheel: true,
        keyboard: true,
        cssMode: false,
       // slidesPerView: 1,
        loop:true,
        navigation: {
          nextEl: "",
          prevEl: "",
        },
        pagination: {
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        },
       
      },
    
    }
    
 });
 new Swiper('.product-bottom__container',{
  
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 1,
      cssMode: true,
      loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    },
    // when window width is >= 480px
    320: {
     slidesPerView: "auto",
     centeredSlides: true,
      mousewheel: true,
      keyboard: true,
      cssMode: false,
     // slidesPerView: 1,
      loop:true,
      navigation: {
        nextEl: "",
        prevEl: "",
      },
      pagination: {
        
          el: ".swiper-pagination",
          clickable: true,
        
      },
     
    },
    // when window width is >= 640px
    // 310: {
    //   cssMode: false,
    //   slidesPerView: 1,
    //   navigation: {
    //     nextEl: "",
    //     prevEl: "",
    //   },
    //   pagination: {
    //     el: "",
    //     type: "",
    //   },
    // },
  },
  mousewheel: true,
  keyboard: true,
  
    slidesPerView: '1',       

 });
 new Swiper(".career-wrapper__right", {
  grabCursor: true,
  effect: "creative",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      origin: "left center",
      translate: ["-5%", 0, -200],
      rotate: [0, 100, 0],
    },
    next: {
      origin: "right center",
      translate: ["5%", 0, -200],
      rotate: [0, -100, 0],
    },
  },
});

//accordion
const accordionBtns = document.querySelectorAll(".faq-wrapper__accordion-item");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("faq-wrapper__accordion-item--active");

    let content = this.nextElementSibling;
   // console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight =  "100%";
    //  console.log(content.style.maxHeight);
    }
  };
});
//accordion drop-menu
const accordionHead = document.querySelectorAll(".header-menu__list-accordeon");

accordionHead.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("header-menu__list-accordeon--active");

    let content = this.nextElementSibling;
   // console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight =  "100%";
    //  console.log(content.style.maxHeight);
    }
  };
});
$(function () {

  $('.header-menu__btn').on('click',function(){
  //  $('.body').toggleClass('main--active');
      $('.header-menu__list').toggleClass('header-menu__list--active');
      $('.header-menu__btn').toggleClass('header-menu__btn--active');     
      $('.header').toggleClass('header--active');
      
      });
    });