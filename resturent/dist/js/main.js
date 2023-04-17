"use strict";
var icon_link = document.querySelector(".icon_link");
var links = document.querySelector(".container_header .link");
var icon_close = document.querySelector(".header .close ");
icon_link.addEventListener("click",()=>{
    links.classList.add("active")
})
icon_close.addEventListener("click",()=>{
    links.classList.remove("active");
})


// var show = document.querySelector(".Show_img");
// var images = document.querySelectorAll(".container_pro img");
// images.forEach((e)=>{
//     e.addEventListener("click",(img)=>{
//         let imglink = img.currentTarget.src;
//             show.style.display = 'block';
//         return showimage(imglink)
//     })
// })

// var placeImage = document.querySelector(".containershowimg");
// var close_img = document.querySelector(".Show_img .close_img");
// function showimage(surce) {
//         let img = document.createElement("img");
//         placeImage.innerHTML = "";
//          placeImage.append(img);
//         return img.src = surce;
// }
// text animation 
// var h1 = document.querySelector(".container_Reach h1");

// var text1 = document.querySelector(".container_Reach .dis1");

// new Typewriter(h1,{
    
// })
// .typeString('We are an aspiring')
// .start()

// show accordion

var arrow = document.querySelectorAll(".acordion .title_acordion");
// var pargraph = document.querySelector(".info_accordion");
arrow.forEach(e =>{
    e.addEventListener("click",()=>{
        e.classList.toggle("active");
    })
});
// swipeer page projects
var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 100,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // swipeer page services
  var swiper = new Swiper(".MySwipers", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 100,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  var but = document.querySelectorAll(".wrapper_card");
        but.forEach(e => {
            e.addEventListener("click",()=>{
                e.classList.toggle("active")
              })
        });