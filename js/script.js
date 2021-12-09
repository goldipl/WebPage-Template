const burger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileMenu");
const mobileMenuA = document.querySelector(".mobileMenu_li");
const html = document.querySelector("html");
const bodyNews = document.querySelector("body.news");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});