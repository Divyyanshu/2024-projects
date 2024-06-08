const playerDivyanshu = document.getElementById("player");
const computerRandomer = document.getElementById("computer");
const resultGame = document.getElementById("result");
const rockBtn = document.getElementById("rockbtn");
const paperBtn = document.getElementById("paperbtn");
const scissiorBtn = document.getElementById("Scissiorbtn");
// const randomBtn = document.getElementById('randomBtn');
// const randomNumber = document.getElementById('randomnumber');
const drawPoint = document.getElementById("draw");
const playerPoint = document.getElementById('playerPoint');
const computerPoint = document.getElementById('computerPoint');


let playerChoice = "";
let computerChoice = "";
let gameResult = "";
let draw = "";
let playerWins = "";
let computerWins = "";

// build a function for random choice
function computerChoose() {
      let randomchoice = Math.floor(Math.random() * 3) + 1;

      switch (randomchoice) {
            case 1:
                  computerChoice = "Rock"
                  break;
            case 2:
                  computerChoice = "Paper"
                  break;
            case 3:
                  computerChoice = "Scissior"
                  break;
      }
         computerRandomer.innerText = `Computer : ${computerChoice}`
}
// button functioning

// check result fumction

function checkResult(){
     if(playerChoice === computerChoice){
      gameResult = "Draw !"
     }
     else if (playerChoice === "Rock" && computerChoice === "Paper"){
       gameResult = "Computer Win"
     }
     else if (playerChoice === "Paper" && computerChoice === "Rock"){
       gameResult = "Player Win"
     }
     else if (playerChoice === "Scissior" && computerChoice === "Paper"){
       gameResult = "Player Win"
     }
     else if (playerChoice === "Paper" && computerChoice === "Scissior"){
       gameResult = "Computer Win"
     }
     else if (playerChoice === "Rock" && computerChoice === "Scissior"){
       gameResult = "Player Win"
     }
     else if (playerChoice === "Paper" && computerChoice === "Rock"){
       gameResult = "Computer Win"
     }
     else if(playerChoice === "Scissior" && computerChoice === "Rock"){
      gameResult = "Computer Win"
     }
     else{
      gameResult = "Error Result not found";
     }

     resultGame.innerText = `Game Result : ${gameResult}`
   
        if(gameResult === "Draw !"){
            draw++;
        }else if (gameResult === "Player Win" ){
            playerWins++;
        }else if (gameResult === "Computer Win" ){
            computerWins++;
        }
        else{
            alert('result points error')
        }
   
        drawPoint.innerText = `Draw points :${draw}`;
        playerPoint.innerText = `Player points :${playerWins}`;
        computerPoint.innerText = `Computer points :${computerWins}`
}

rockBtn.addEventListener('click', () => {
      playerChoice = "Rock";
      playerDivyanshu.innerText = `Player : ${playerChoice}`;
      computerChoose();
      checkResult();
})
scissiorBtn.addEventListener('click', () => {
      playerChoice = "Scissior";
      playerDivyanshu.innerText = `Player : ${playerChoice}`;
      computerChoose();
      checkResult();
})
paperBtn.addEventListener('click', () => {
      playerChoice = "Paper";
      playerDivyanshu.innerText = `Player : ${playerChoice}`;
      computerChoose();
      checkResult();
})

// randomBtn.addEventListener('click', () => {
//       let randomchoice = Math.floor(Math.random() * 3) + 1;
//       computerChoice = randomchoice;
//       randomNumber.innerText = `Genrated Computer Number : ${computerChoice}`
//       // alert(randomchoice);
// })
