console.log('JS is sourced!');

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
                <tr>
                    <td>${task.text}</td>
                    <td>${isComplete}</td>
                    <td><button class ="markCompleteBtn" onclick = "markComplete(${task.id}) role = "button" aria-label = "mark task as complete">✅</button></td>
                    <td><button class = "deleteItemBtn" onclick = "deleteItem(${task.id}) role = "button" aria-label = "delete task">❌</button></td>
                </tr>`
        }
    })
    .catch(error => {
        console.error('error fetching todos:', error);
    });
}

getAndRenderTodoList()