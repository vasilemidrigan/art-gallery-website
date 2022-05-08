"use strict";
// ------------------------
// Variables

// Header
const header = document.querySelector("header");
const headerImg = document.querySelector(".header--image");
const buttonLink = document.querySelector(".header--button--link");
const buttonTextContent = document.querySelector(".button--left_side");

// Main
const main = document.querySelector("main");

const mainUpperImage = document.querySelector(".main--upper--image");
const mainUpperContent = document.querySelector(".main--upper--content");

const mainMiddleImage = document.querySelector(".main--middle--image");
const mainBottomImage = document.querySelector(".main--bottom--image");
const mainBottomContent = document.querySelector(".main--bottom--content");

const mainUpperContentWrapper = document.createElement("div");
mainUpperContentWrapper.className = "main--upper--content--wrapper";

const mainBottomContentWrapper = document.createElement("div");
mainBottomContentWrapper.className = "main--bottom--content--wrapper";

const mainBottomRightContentWrapper = document.createElement("div");
mainBottomRightContentWrapper.className =
  "main--bottom--right--content--wrapper";

// Footer
const footer = document.querySelector("footer");
const socialsFb = document.querySelector(".footer--socials--facebook");

// Variables for './location.html' page
const mapImage = document.querySelector(".header--map");
mapImage.src = "./starter-code/assets/tablet/map-tablet.png";

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
  // Changing Images src
  headerImg.src = "./starter-code/assets/tablet/image-hero@2x.jpg";
  mainUpperImage.src = "./starter-code/assets/tablet/image-grid-1@2x.jpg";
  mainMiddleImage.src = "./starter-code/assets/tablet/image-grid-2@2x.jpg";
  mainBottomImage.src = "./starter-code/assets/tablet/image-grid-3@2x.jpg";

  // Main Section events

  // main--upper--content--wrapper
  main.insertBefore(
    mainUpperContentWrapper,
    document.querySelector(".main--middle--image")
  );
  mainUpperContentWrapper.appendChild(mainUpperImage);
  mainUpperContentWrapper.appendChild(mainUpperContent);

  // main--bottom--content--wrapper
  main.appendChild(mainBottomContentWrapper);
  mainBottomContentWrapper.appendChild(mainMiddleImage);
  mainBottomContentWrapper.appendChild(mainBottomRightContentWrapper);
  mainBottomRightContentWrapper.appendChild(mainBottomImage);
  mainBottomRightContentWrapper.appendChild(mainBottomContent);
}
