const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const footerInner = document.querySelector(".footer__inner");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("menu__btn-active");
  menuList.classList.toggle("menu__list-active");
});

footerInner.addEventListener("click", function (event) {
  const target = event.target;
  target.classList.toggle("footer__title-active");
  target.nextElementSibling.classList.toggle("footer__list-active");
});
