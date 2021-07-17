const sideMenu = document.querySelector(".side-navigation");
const toggleDisplay = document.querySelectorAll(".toggle");

sideMenu.addEventListener("mouseenter", (e) => {
    if (sideMenu.style.width != "260px") {
        setTimeout(() => {
            toggleDisplay.forEach((element) => {
                element.classList.remove("toggle-visibility");
            });
        }, 200);
    }
});
sideMenu.addEventListener("mouseleave", (e) => {
    if (document.documentElement.clientWidth <= 780) {
        toggleDisplay.forEach((element) => {
            element.classList.add("toggle-visibility");
        });
    }
});
