"use strict";
AOS.init();
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
var h1 = document.querySelector(".container_Reach h1");
var text1 = document.querySelector(".container_Reach .dis1");


new Typewriter(h1,{
    
})
.typeString('We are an aspiring')
.start()

