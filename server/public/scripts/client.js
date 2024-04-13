console.log('JS is sourced!');

/** This function gets the current list of To Do items from the database and renders them on the DOM */
function getAndRenderTodoList(){
    axios({
        method: "GET",
        url: "/todos"
    })
    .then(response =>{
        let taskList = response.data;
        let isComplete = ""
        let tableLocation = document.getElementById("taskListBody")
        for (let task of taskList){
            if (task.isComplete === true){
                isComplete = "Completed"
            } else {
                isComplete = "In Progress"
            }
            tableLocation.innerHTML += `
                <tr data-testid="toDoItem">
                    <td>${task.text}</td>
                    <td>${isComplete}</td>
                    <td><button data-testid="completeButton" class ="markCompleteBtn" onclick = "markComplete(${task.id}) role = "button" aria-label = "mark task as complete">✅</button></td>
                    <td><button data-testid="deleteButton" class = "deleteItemBtn" onclick = "deleteItem(${task.id}) role = "button" aria-label = "delete task">❌</button></td>
                </tr>`
        }
    })
    .catch(error => {
        console.error('error fetching todos:', error);
    });
}
/** END getAndRenderTools */

/** This function will add a new To Do item to the database and trigger a DOM refresh */
function addNewTask(event){
    let taskText = document.getElementById("taskTextInput");
    let isComplete = document.getElementById("isCompleteInput");
    let newTodo = {
        text: taskText, 
        isComplete: isComplete
    }
    console.log ("New ToDo: ", newTodo);
}

getAndRenderTodoList()