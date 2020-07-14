// Selectors---------------------------
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners---------------------

// When clicked, addTodo func is called
todoButton.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteCheck);


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

}