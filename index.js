const nav_header = document.querySelector(".header");
const mobile_nav_button = document.querySelector(".mobile-navbar-button");
const nav_button = document.querySelectorAll(".navbar-link");

const togglenavbar = () => {
    nav_header.classList.toggle("active");

}

const classRemove = () => {
    nav_header.classList.remove("active");
}

mobile_nav_button.addEventListener("click", () => {
    togglenavbar()
})


