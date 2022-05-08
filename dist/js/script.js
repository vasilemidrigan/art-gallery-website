"use strict";

// Variables
// Header
const header = document.querySelector("header");
const headerImg = document.querySelector(".header--image");
const buttonLink = document.querySelector(".header--button--link");
const buttonTextContent = document.querySelector(".button--left_side");
// Main
const main = document.querySelector("main");
// Footer
const footer = document.querySelector("footer");
const socialsFb = document.querySelector(".footer--socials--facebook");

// Change main styles if the location page is opened:
if (location.pathname === "/location.html") {
  main.classList.add("location--main");
  footer.classList.add("location--footer");
  buttonLink.classList.add("header--button--link--reverse");
  buttonLink.href = "./index.html";
  buttonTextContent.innerHTML = "Back to home";
}

// Change Styles (for Tablet Screens):
// window.addEventListener("resize", () => {
if (window.innerWidth > 770 && window.innerWidth < 1400) {
  headerImg.src = "./starter-code/assets/tablet/image-hero@2x.jpg";
}
