function batTatDarkTheme() {
  var list = [
    "header .navbar",
    "#switchButton",
    "#switchButton .fa-moon",
    "#switchButton .fa-sun",
    ".header_top",
    "header .navbar .navbar-nav .nav-item .nav-link",
    "header .navbar .navbar-brand span",
    "header .navbar .navbar-collapse form input",
    "header form button i",
    "header .nav-item.dropdown .dropdown-menu",
    ".category__service",
    ".feature__container",
    ".course__container",
    ".number",
    ".testimonials__container",
    ".world-class_section",
    ".contact-us",
    "footer .top-side",
  ];
  var listOfCss = "";
  for (var i = 0; i < list.length; i++) {
    listOfCss = list[i];
    document.querySelector(listOfCss).classList.toggle("dark");
  }

  // add .dark class to service_item
  var listOfCssServiceItem = document.querySelectorAll(
    ".services__container .service__item"
  );
  for (i = 0; i < listOfCssServiceItem.length; i++) {
    listOfCssServiceItem[i].classList.toggle("dark");
  }
  // add .dark class to testimonials__grid
  var listOfCssTestimonialsGrid = document.querySelectorAll(
    ".testimonials__grid"
  );
  for (i = 0; i < listOfCssTestimonialsGrid.length; i++) {
    listOfCssTestimonialsGrid[i].classList.toggle("dark");
  }
  // add .dark class to card-single
  var listOfCssCardSingle = document.querySelectorAll(".card-single");
  for (i = 0; i < listOfCssCardSingle.length; i++) {
    listOfCssCardSingle[i].classList.toggle("dark");
  }
  // add .dark class to content-main-top
  var listOfCssContentMainTop = document.querySelectorAll(".content-main-top");
  for (i = 0; i < listOfCssContentMainTop.length; i++) {
    listOfCssContentMainTop[i].classList.toggle("dark");
  }
  var element = document.body;
  element.classList.toggle("dark");
  var aElement = document.querySelectorAll("a");
  for (i = 0; i < aElement.length; i++) {
    aElement[i].classList.toggle("dark");
  }
  var pElement = document.querySelectorAll("p");
  for (i = 0; i < pElement.length; i++) {
    pElement[i].classList.toggle("dark");
  }
}
// owl carousel for banner section
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 1,
  nav: false,
  dots: true,
  autoplay: 2000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
//sticky nav menu
const nav = document.querySelector("#site-header");
let navTop = nav.offsetTop;
function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.style.backgroundColor = "white";
  } else {
    nav.style.backgroundColor = "transparent";
  }
}
window.addEventListener("scroll", fixedNav);
