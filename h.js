const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const toggleInput = document.getElementById("toggleInput");

// Event listener to toggle input field visibility
toggleInput.addEventListener("click", () => {
  todoInput.classList.toggle("show-input");
  todoInput.focus();
});

// Function to create a new list item
function createTodoItem(text) {
  const li = document.createElement("li");
  li.innerText = text;
  li.innerHTML +='<span class="delete-btn">X</span>';
  return li;
}

// Event listener to add item to the list when Enter key is pressed
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && todoInput.value.trim() !== "") {
    const newItem = createTodoItem(todoInput.value.trim());
    todoList.appendChild(newItem);
    todoInput.value = "";
  }
});

// Event listener to mark item as completed when clicked
todoList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "LI") {
    target.classList.toggle("completed");
  }
});

// Event listener to remove item when delete button is clicked
todoList.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("delete-btn")) {
    const listItem = target.parentElement;
    todoList.removeChild(listItem);
  }
});
$(document).ready(function(){
    $("button").click(function(){
        $("input").toggle()
    })
})
