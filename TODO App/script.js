function addTodo() 
{
  let inputField = document.getElementById("todoInput");
  let todoList = document.getElementById("todoList");
  let todoText = inputField.value;

  if (todoText.trim() !== "") 
  {
    let listItem = document.createElement("li");
    listItem.innerHTML =
      "<span>" +
      todoText +
      "</span>" +
      '<button class="completeButton" onclick="markCompleted(this)">Complete</button>' +
      '<button class="deleteButton" onclick="deleteTodo(this)">Delete</button>';

    todoList.appendChild(listItem);
    inputField.value = "";
  }
}

function deleteTodo(button) 
{
  let listItem = button.parentElement;
  listItem.remove();
}

function markCompleted(button) 
{
  let listItem = button.parentElement;
  listItem.classList.toggle("completed");
  button.textContent = listItem.classList.contains("completed")
    ? "Undo"
    : "Complete";
}

let inputField = document.getElementById("todoInput");
inputField.addEventListener("keyup", function (event) 
{
  if (event.key === "Enter") 
  {
    addTodo();
  }
});
