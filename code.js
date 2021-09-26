"use strict";

// functions

let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);

//dom variables
const menuBars = document.querySelector(".menu");
const dropDownMenu = document.querySelector(".dropDown-menu");
const closeDropDownMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
//events

menuBars.addEventListener("click", () => {
  remove(dropDownMenu, "hidden");
});

closeDropDownMenu.addEventListener("click", () => {
  add(dropDownMenu, "hidden");
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target.parentElement.parentElement === mobileMenu) {
    add(dropDownMenu, "hidden");
  }
});
