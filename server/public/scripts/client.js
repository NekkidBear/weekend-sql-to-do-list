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
        tableLocation.innerHTML = ""
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
                    <td><button data-testid="completeButton" class ="markCompleteBtn" onclick = "markComplete(${task.id})" role = "button" aria-label = "mark task as complete">✅</button></td>
                    <td><button data-testid="deleteButton" class = "deleteItemBtn" onclick = "deleteItem(${task.id})" role = "button" aria-label = "delete task">❌</button></td>
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
    event.preventDefault();
    //Get Data from DOM and make an object
    let taskText = document.getElementById("taskTextInput");
    let isComplete = document.getElementById("isCompleteInput");
    let newTodo = {
        text: taskText.value, 
        isComplete: isComplete.value
    }
    console.log ("New ToDo: ", newTodo); //confirm the object has the proper info.
    
    //axios call to POST the new item
    axios ({
        method: "POST",
        url: "/todos",
        data: newTodo
    })
    .then(response => {
        console.log("New Todo added: ", response.data);
        //update the DOM with the new data
        getAndRenderTodoList();
    })
    .catch(error => {
        console.log('Error adding new ToDo item: ', error);
    });
}
/** END addNewTask() */

/** This function will update the completion status of a task and refresh the DOM. 
 * The completed task will have a css class applied to visually indicate the item is complete */
function markComplete(id){
    //todo implement PUT call to update the task by ID
    //todo DON'T FORGET TO ADD THE CSS CLASS!
}
/** END markComplete */

/**This function will delete the selected task */
function deleteItem(id){
    //todo implement delete call 
}

getAndRenderTodoList()