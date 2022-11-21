const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".navbar")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});