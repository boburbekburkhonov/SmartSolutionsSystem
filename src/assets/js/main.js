let elHamburger = document.querySelector(".header-hamburger");
let elHeader = document.querySelector(".header");

elHamburger.addEventListener("click", () => {
  elHeader.classList.toggle("header--open");
});

const elHeaderBg = document.querySelector(".header__bg");

elHeaderBg.addEventListener("click", () => {
  elHeader.classList.toggle("header--open");
});
