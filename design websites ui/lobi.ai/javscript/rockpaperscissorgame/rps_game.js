const playerDivyanshu = document.getElementById("player");
const computerRandomer = document.getElementById("computer");
const resultGame = document.getElementById("result");
const rockBtn = document.getElementById("rockbtn");
const paperBtn = document.getElementById("paperbtn");
const scissiorBtn = document.getElementById("Scissiorbtn");
const randomBtn = document.getElementById('randomBtn');
const randomNumber = document.getElementById('randomnumber');

let playerChoice = "";
let computerChoice = "";


// build a function for random choice
// function computerChoose(){
//     let randomchoice = Math.floor(Math.random()*3)+1;
//     alert(randomchoice);
// }
// button functioning

rockBtn.addEventListener('click',()=>{
      playerChoice = "Rock";
      playerDivyanshu.innerText = `Player : ${playerChoice}`;
})
scissiorBtn.addEventListener('click',()=>{
      playerChoice = "Scissior";
      playerDivyanshu.innerText = `Player : ${playerChoice}`;
})
paperBtn.addEventListener('click',()=>{
      playerChoice = "Paper";
      playerDivyanshu.innerText = `Player : ${playerChoice}`;
})

randomBtn.addEventListener('click',()=>{
    let randomchoice = Math.floor(Math.random()*3)+1;
    computerChoice = randomchoice;
    randomNumber.innerText = `Genrated Computer Number : ${computerChoice}`
    // alert(randomchoice);
})
