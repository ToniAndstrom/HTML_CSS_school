const header = document.querySelector("header");
const backToTopButton = document.querySelector("#backToTop");
const hamburger = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 1200 ||
    document.documentElement.scrollTop > 1200
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 470 ||
    document.documentElement.scrollTop > 470
  ) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
});
/*
window.addEventListener("scroll", () => {
if (document.body.max-width > 600){
  header.classList.remove("bg")
}
});*/

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
const toggleMenu = () => {
  nav.classList.toggle("responsive")
};

backToTopButton.addEventListener("click", getToTop);
hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(item => item.addEventListener("click", toggleMenu));
