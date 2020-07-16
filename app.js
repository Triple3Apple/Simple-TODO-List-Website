// Selectors---------------------------
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners---------------------

// When clicked, addTodo func is called
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


// Functions---------------------------
function addTodo(event) {
    // Below line prevents form from submitting/refreshing page
    event.preventDefault();

    // check if user entered a value
    if (todoInput.value) {
        
        // todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        // create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);   // appended to todoDiv

        //Checkmark button (for marking task as complete)
        const completedButton = document.createElement('button');
        // we are adding to the button html code (i tag [check icon])
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);   // appended to todoDiv

        //Trash button (for deleting task)
        const trashButton = document.createElement('button');
        // we are adding to the button html code (i tag [check icon])
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);   // appended to todoDiv

        // Append to List
        todoList.appendChild(todoDiv);

        //clear todoinput value
        todoInput.value = "";
    }

}

function deleteCheck(event) {
    // to see what I am clicking on!
    console.log(event.target);

    const item = event.target;
    // Delete todo
    // ===    <-- means equal value and type
    if (item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement
        // Animation ---
        todo.classList.add("fall");
        // once transition ends it will do the function below
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
        // -------------
    }
    // Checkmark
    if (item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(event) {
    const todos = todoList.childNodes;

    // for each todo..
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";    // display
                } else todo.style.display = "none"; // else hide it
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";    // display
                } else todo.style.display = "none"; // else hide it
                break;
        }
    });

    // vvv checking if it works
    console.log(todos);


}