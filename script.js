const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== "") {
        addTodoItem(todoText);
        input.value = "";
    }
});

function addTodoItem(todoText) {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", toggleTodoItem);
    li.appendChild(checkbox);
    const label = document.createElement("label");
    label.textContent = todoText;
    li.appendChild(label);
    todoList.appendChild(li);
}

function toggleTodoItem(event) {
    const checkbox = event.target;
    const listItem = checkbox.parentNode;
    listItem.classList.toggle("completed");
}
