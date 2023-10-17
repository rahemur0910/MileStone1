let heading = document.getElementById("heading");
let button = document.getElementById("toggleButton");

let textValues = ["The most affordable learning platfrom", "PW Skills"];

let currentTextIndex = 0;

function toggleText()
{
    heading.textContent = textValues[currentTextIndex];
    currentTextIndex = (currentTextIndex + 1) % textValues.length;
}

button.addEventListener("click",toggleText)