console.log('JS is sourced!');

function getAndRenderTodoList(){
    axios({
        method: "GET",
        url: "/todos"
    })
    .then(response =>{
        let taskList = response.data;
        let tableLocation = document.getElementById("taskListBody")
        for (let task of taskList){
            tableLocation.innerHTML = `
                <tr>
                    <td>${task.text}</td>
                    <td>${task.isComplete}</td>
                    <td><button class ="markCompleteBtn" onclick = "markComplete(${task.id}) role = "button" aria-label = "mark task as complete">✅</button></td>
                    <td><button class = "deleteItemBtn" conclick = "deleteItem(${task.id}) role = "button" aria-label = "delete task">❌</button></td>
                </tr>`
        }
    })
    .catch(error => {
        console.error('error fetching todos:', error);
    });
}

getAndRenderTodoList()