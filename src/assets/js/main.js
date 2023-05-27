const elHamburger = document.querySelector(".header-hamburger");
const elHeader = document.querySelector(".header");
const elHeaderNavLink = document.querySelectorAll(".header-nav-link");

elHamburger.addEventListener("click", () => {
  elHeader.classList.toggle("header--open");
});

for (let i = 0; i < elHeaderNavLink.length; i++) {
  elHeaderNavLink[i].addEventListener("click", () => {
    elHeader.classList.remove("header--open");
  });
}

const elHeaderBg = document.querySelector(".header__bg");

elHeaderBg.addEventListener("click", () => {
  elHeader.classList.toggle("header--open");
});
