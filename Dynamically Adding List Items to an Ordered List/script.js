const items = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Version Control and Git",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  "Making Projects using HTML, CSS and JavaScript",
  "Understanding Fundamental of Computer Science",
  "Getting Started with Database",
  "Understanding the Database",
  "Starting with NodeJS and Express",
  "Understanding React and its Fundamentals",
  "Understanding Hooks and Routers",
  "Starting and Completing Full Fledge Projects",
];
let currentIndex = 0;

const list = document.getElementById("list");
const addItemButton = document.getElementById("addItemButton");
const removeItemButton = document.getElementById("removeItemButton");
const message = document.getElementById("message");

addItemButton.addEventListener("click", () => {
  if (currentIndex < items.length) {
    const newItem = document.createElement("li");
    newItem.textContent = items[currentIndex];
    list.appendChild(newItem);
    currentIndex++;
    message.textContent = "";

    if (currentIndex === items.length) {
      message.textContent = "All items have been added.";
      addItemButton.style.display = "none";
      removeItemButton.style.display = "block";
    }
  }
});

removeItemButton.addEventListener("click", () => {
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
    message.textContent = "";

    if (list.children.length === 0) {
      message.textContent = "All items have been removed.";
      addItemButton.style.display = "block";
      removeItemButton.style.display = "none";
    }
  } else {
    message.textContent = "No items to remove.";
  }
});
