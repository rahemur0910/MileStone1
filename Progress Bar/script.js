let indicator = document.querySelector(".indicator");
let documentHeight = document.documentElement.scrollHeight;
let viewportHeight = document.documentElement.clientHeight;

window.onscroll = function() {
    let percentageScrolled = (scrollY / (documentHeight - viewportHeight)) * 100;
    indicator.style.width = percentageScrolled + "%";
}