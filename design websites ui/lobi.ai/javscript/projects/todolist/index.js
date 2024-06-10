const inputTask = document.getElementById("input-task");
const addTaskbtn = document.getElementById("addTaskbtn");
const taskListElement = document.getElementById("taskItem");
const deleteTaskbtn =document.getElementById("deleteTaskbtn")

let taskList = [];

// renderlist

function randerList (){
    taskListElement.innerHTML = "";
    for(let i = 0; i <= taskList.length-1; i++){
    const newTask =document.createElement('li');
    newTask.innerText = taskList[i]
    taskListElement.appendChild(newTask);}
}

function addTask (){
    taskList.push(inputTask.value);
   randerList();
}

function deleteTask (){
    taskList.pop(inputTask.value);
   randerList();
}


addTaskbtn.addEventListener('click',addTask);
deleteTaskbtn.addEventListener('click',deleteTask);