# Projects Releted TO DOM

## Projects link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-4mjvuc?file=index.html)

# Source Code

## Project 1 .

```javascript

const button = document.querySelectorAll('.button');
const  body = document.querySelector('body');

button.forEach(button => {
    button.addEventListener('click',function(e){
      if (e.target.id === "grey"){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === "green"){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === "blue"){
        body.style.backgroundColor = e.target.id
      }
      if (e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id
      }
    });
});


```
## Project 2 .
```javascript
const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
   e.preventDefault();
    // import html height and weight and result

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if(height === "" || height > 0 || isNaN(height)){
        results.innerHTML = `pls give correct height ${height}`
    }else
    if(weight === "" || weight > 0 || isNaN(weight)){
        results.innerHTML = `pls give correct weight ${weight}`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerText = `Result : ${bmi}`
    }
})

```
## Project 3 (to do list) .
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To do list </title>
</head>
<body >
    <style>
        body{
              background-color: #212121;
              color: azure;
              display: flex;
              flex-direction: column;
              align-items: center;
        }
    </style>
    <h1>To do List </h1>
    <div>
        <label for="input-task">Input Task</label>
        <input type="text" id="input-task">
        <button type="submit" id="addTaskbtn">Add-Task</button>
        <button type="submit" id="deleteTaskbtn">Delete-Task</button>
    </div>
        <ol id="taskItem"></ol>
        <script src="index.js">
        </script>
</body>
</html>
```

```javascript
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

```