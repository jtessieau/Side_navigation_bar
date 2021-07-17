const sideMenu = document.querySelector(".side-navigation");
const toggleDisplay = document.querySelectorAll(".toggle-visibility");

sideMenu.addEventListener("mouseenter", (e) => {
    if (sideMenu.style.width != "260px") {
        sideMenu.style.width = "260px";
        setTimeout(() => {
            toggleDisplay.forEach((element) => {
                element.style.display = "block";
            });
        }, 200);
    }
});
sideMenu.addEventListener("mouseleave", (e) => {
    if (document.documentElement.clientWidth <= 780) {
        sideMenu.style.width = "70px";
        toggleDisplay.forEach((element) => {
            element.style.display = "none";
        });
    }
});
