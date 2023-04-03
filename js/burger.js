const burgerMenu = document.querySelector(".header__menu");
const burgerIcon = document.querySelector(".header__burger");
const menuLinks = document.querySelectorAll(".menu__link");

burgerIcon.addEventListener("click", function() {
  burgerMenu.classList.toggle("active");
  burgerIcon.classList.toggle("active");

  if (burgerMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
});

menuLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    burgerMenu.classList.remove("active");
    burgerIcon.classList.remove("active");
    document.body.style.overflow = "initial";
  });
});

