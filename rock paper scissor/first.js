let userScore = 0;
let compScore = 0;

const choices  =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#computer-score");


const genCompChoice = () =>{
   const options = ["stone", "paper" , "scissors"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx];  
}

const drawGame = (userChoice,compChoice) =>{
  console.log("Game was draw");
  msg.innerText = "Round Draw";
  msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win");
    msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

  }else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("Computer Win");
    msg.innerText = `Computer Win.${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) =>{
      console.log("user Choice = ", userChoice);
      const compChoice = genCompChoice();
      console.log("comp choice = ", compChoice)

      if(userChoice===compChoice){
        drawGame();
      }
      else{
        let userWin = true;
        if(userChoice === "stone"){
          userWin = compChoice === "paper" ? false : true;
        } else if(userChoice=== "paper"){
         userWin = compChoice==="scissors" ? false:true;
        } else{
          userWin=compChoice==="stone" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
      }
}

  choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
      const userChoice = choice.getAttribute("id");
     playGame(userChoice);
    });
});
