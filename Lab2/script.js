"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("textField");
    const addButton = document.getElementById("addButton");
    const listSelector = document.getElementById("listSelector")
    const todoLists = {
        today: document.getElementById("todoItemsToday"),
        tomorrow: document.getElementById("todoItemsTomorrow"),
        week: document.getElementById("todoItemsWeek"),
        later: document.getElementById("todoItemsLater")
    };

    const restoreButton = document.getElementById("restoreButton");
    const emptyBinLabel = document.getElementById("emptyBinLabel");
    let lastTask = null;

    addButton.addEventListener("click", () => {
        const taskText = inputField.value.trim();
        if (taskText !== "") {
            const listType = listSelector.value
            const listItem = document.createElement("li");
            listItem.classList.add("todo-item");

            const contentWrapper = document.createElement("div");
            contentWrapper.classList.add("task-content");
            
            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;
            taskSpan.classList.add("task");

            const dateSpan = document.createElement("span");
            dateSpan.classList.add("date");

            contentWrapper.appendChild(taskSpan);
            contentWrapper.append(dateSpan);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "✖";
            deleteBtn.classList.add("delete-btn");

            deleteBtn.addEventListener("click", (e) => {
                document.getElementById("modalText").textContent = `Czy chcesz usunąc "${taskText}" ?`;
                document.getElementById("modal").showModal();
                document.getElementById("yes").addEventListener("click", () =>{
                    e.stopPropagation();
                    lastTask = {text: taskText, item: listItem}
                    listItem.remove();
                    updateEmptyMessage();
                    document.getElementById("modal").close();
                });
                document.getElementById("no").addEventListener("click", () =>{
                    document.getElementById("modal").close();
                });
            });

            // Attach click to the listItem
            taskSpan.addEventListener("click", () => {
                const isDone = taskSpan.classList.toggle("done");

                if (isDone) {
                    const now = new Date();
                    const formatted = now.toLocaleDateString("pl-PL", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                    });
                    dateSpan.textContent = `  Ukończono: ${formatted}`;
                } else{
                    dateSpan.textContent = "";
                }
            });

            listItem.appendChild(contentWrapper);
            listItem.appendChild(deleteBtn);
            todoLists[listType].appendChild(listItem);

            inputField.value = "";
            inputField.focus();
            updateEmptyMessage();
        }
    });

    restoreButton.addEventListener("click", () =>{
        if (lastTask){
            const listType = listSelector.value // Na chwile obecna nie ma zapamietanego w ktorej liscie byl task, wiec przywraca do wybranego z dropdowna
            const restoredItem = lastTask.item;
            todoLists[listType].appendChild(restoredItem);
            lastTask = null;
            updateEmptyMessage();
        }
    });

    inputField.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addButton.click();
        }
    });

    const updateEmptyMessage = () => {
        if (!lastTask){
            emptyBinLabel.style.display = "block";
        }
        else {
            emptyBinLabel.style.display = "none";
        }
    };

    document.querySelectorAll('h2').forEach((header) => {
        header.addEventListener('click', () => {
            const listSection = header.nextElementSibling; 
            listSection.classList.toggle('closed'); 
        });
    });

    document.querySelectorAll('.todo-list').forEach(list => {
        list.classList.remove('closed'); 
    });
});
