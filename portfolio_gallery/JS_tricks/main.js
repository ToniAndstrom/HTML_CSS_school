const header = document.querySelector("header");
const backToTopButton = document.querySelector("#backToTop");
const hamburger = document.querySelector(".mobile");
const modalButton = document.querySelector(".modalButton")
const overlay = document.querySelector(".overlay")
const closeButton = document.querySelector(".closeButton")

const toggleModal = () => {
    overlay.classList.toggle("visible");
};






//Other way to write to same thing //
/*document.querySelector("#backToTop").addEventListener("click", () => {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
header.style.backgroundColor = "orange"*/
/*header.classList.toggle("bg")*/
/*});*/

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTop.style.display = "block";
    header.classList.add("bg");
  } else {
    backToTop.style.display = "none";
    header.classList.remove("bg");
  }
});

const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");

const toggleMenu = () => {
    nav.classList.toggle("responsive")
  console.log("mobile menu button clicked");
};

const getToTop = () => {
    document.body.scrollTop = 0; //for macs//
    document.documentElement.scrollTop = 0; //for windows//
  };
  backToTopButton.addEventListener("click", getToTop);

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach(item => item.addEventListener("click", toggleMenu))

modalButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
overlay.addEventListener ("click",toggleModal);
