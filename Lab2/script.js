document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("textField");
    const addButton = document.getElementById("addButton");
    const todoList = document.getElementById("todoItems");

    addButton.addEventListener("click", () => {
        const taskText = inputField.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;
            todoList.appendChild(listItem);
            inputField.value = "";
            inputField.focus();
        }
    });

});