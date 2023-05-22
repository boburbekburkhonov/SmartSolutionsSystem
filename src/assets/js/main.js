const elHamburger = document.querySelector(".header-hamburger");
const elHeader = document.querySelector(".header");

elHamburger.addEventListener("click", () => {
  elHeader.classList.toggle("header--open");
});

const elHeaderBg = document.querySelector(".header__bg");

elHeaderBg.addEventListener("click", () => {
  elHeader.classList.toggle("header--open");
});
