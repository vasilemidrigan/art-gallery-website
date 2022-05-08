"use strict";

// Variables
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const socialsFb = document.querySelector(".footer--socials--facebook");
// --- MAIN SCRIPTS

// Change main styles if the location page is opened:
if (location.pathname === "/location.html") {
  main.classList.add("location--main");
  footer.classList.add("location--footer");
}
