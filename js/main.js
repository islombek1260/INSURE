"use strict";

let elHeader = document.querySelector(".site-nav")
let elHamburger = document.querySelector(".burger-menu")

elHamburger.addEventListener("click", function(){
    elHeader.classList.toggle("active")
})
elHamburger.addEventListener("click", function(){
    elHamburger.classList.toggle("active-btn")
})