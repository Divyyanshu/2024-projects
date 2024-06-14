const count = document.getElementById("count");
const add = document.getElementById("addbtn");
const subtract = document.getElementById("subbtn");

let counter = 0;

function adds (){
    counter = counter + 1;
    count.innerText = `Counter Value is : ${counter}`
}
function subs (){
    counter = counter - 1;
    count.innerText = `Counter Value is : ${counter}`
}

add.addEventListener("click", adds);
subtract.addEventListener("click", subs);           