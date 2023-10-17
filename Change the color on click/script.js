const colors = ["#ff0000","#ffa500","#ffff00","#00ff00","#0000ff","#4b0082","#ee82ee"];

const button = document.getElementById("changeColorButton");
const body = document.body;

button.addEventListener("click", () =>
{
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    body.style.backgroundColor = randomColor;
});