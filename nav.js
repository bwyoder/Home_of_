const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
});