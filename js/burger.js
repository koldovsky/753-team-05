const burgerMenu = document.querySelector(".header__menu");
const burgerIcon = document.querySelector(".header__burger");
const menuLinks = document.querySelectorAll(".menu__link");

burgerIcon.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  burgerIcon.classList.toggle("active");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    burgerIcon.classList.remove("active");
  });
});