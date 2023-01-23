//console.log("hello0"); testing Purposes ..
/* Okay this is my First micro project in js of odin project , now i want to first use the problem solving principlkes
Main Aim: To create a Rockpaper sicsors game against computer for five turns and decide the winner
Plan: ts already instructed in the odin project , onlyy thing is the actual syntaxt and part
PSeudocode:
Actual Code: 
*/

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    randomChoice = choice[Math.floor(Math.random() * choice.length)] ; //What this line does is Math random only returns value between 0-1 and then so we need to multiply witrh length , here it is 3 
    console.log(randomChoice);

}//yahoo first part completed succesfully



function playRound(playerSelection,computerSelection) {
    //Okay here i will compare and then declare the logic of wins and loses and ties 
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        
         console.log((`YOU Win ${playerSelection} beats ${computerSelection}`));
        return 0;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        
        console.log((`YOU lOSE ${computerSelection} beats ${playerSelection} `));
        return 1;
    }
    else {
         console.log("Tied");
         return 2;
    }
   

}
function game() {
    let counter1 = 0;
    let counter2 = 0;
    for(let i = 0; i <5 ; i++){
        playerSelection = prompt("Enter Rock Or Paper or Scissors");
        console.log(playRound(playerSelection,getComputerChoice()));
        if(playRound(playerSelection,getComputerChoice )== 0){
            counter1++;
        }
        else if(playRound(playerSelection,getComputerChoice())== 1){
            counter2++;
        }
        else {
            counter1++;
            counter2++;
        }

    }
    if(counter1 >counter2){
        console.log('YOU Win The Game!');

    }
    else if(counter2 >counter1){
        console.log('Computer wins the Game');
    }
    else{
        console.log("game is Tied");
    }

}

console.log(playRound());
