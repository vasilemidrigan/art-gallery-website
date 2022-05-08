"use strict";

// Variables
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const socialsFb = document.querySelector(".footer--socials--facebook");
const buttonLink = document.querySelector(".header--button--link");
const buttonTextContent = document.querySelector(".button--left_side");
// --- MAIN SCRIPTS

// Change main styles if the location page is opened:
if (location.pathname === "/location.html") {
  main.classList.add("location--main");
  footer.classList.add("location--footer");
  buttonLink.classList.add("header--button--link--reverse");
  buttonLink.href = "./index.html";
  buttonTextContent.innerHTML = "Back to home";
}
console.log(buttonLink);
