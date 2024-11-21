let button = document.querySelector(".menu-burger-button");
let navbar = document.querySelector(".header__list");
let body = document.querySelector("body");
button.onclick = () => {
    button.classList.toggle('active');
    navbar.classList.toggle('active');
    body.classList.toggle('active');
};