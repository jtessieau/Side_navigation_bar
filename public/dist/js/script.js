const btnToggleMenu = document.querySelector(".toggle-menu");
const sideMenu = document.querySelector(".side-navigation");
const toggleDisplay = document.querySelectorAll(".side-navigation .d-none");
const searchIcon = document.querySelector(".side-navigation .search-icon");

btnToggleMenu.addEventListener("click", toggleMenu);

searchIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
    btnToggleMenu.classList.toggle("menu-active");
    sideMenu.classList.toggle("menu-w");
    toggleDisplay.forEach((element) => {
        element.classList.toggle("d-block");
        element.classList.toggle("d-none");
    });
}
