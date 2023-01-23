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
    return randomChoice;

}//yahoo first part completed succesfully



function playRound(playerSelection,computerSelection) {
    //Okay here i will compare and then declare the logic of wins and loses and ties 
    p1 = playerSelection.toLowerCase();
    p2 = computerSelection.toLowerCase();
    console.log(p1,p2);
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        
         console.log((`YOU Win ${playerSelection} beats ${computerSelection}`));
        return 0;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        
        console.log((`YOU LOSE ${computerSelection} beats ${playerSelection} `));
        return 1;
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock" || playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper" || playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "scissors"){
         console.log(" Ohh Its the Same ,Tied");
         return 2;
    }
    else {
        console.log("there might be some error in your input or code");
    }
   

}
function game() {
    let counter1 = 0;
    let counter2 = 0;
    for(let i = 0; i <5 ; i++){
        if (i == 4) {
            console.log('Last one');
        }
        let playerSelection = window.prompt("Choose --> ROCK PAPER SCISSORS!");
        let compuCho = getComputerChoice();
        let play = playRound(playerSelection,compuCho);
       // console.log(playRound(playerSelection,compuCho));
        if(play == 0){
            counter1++;
        }
        else if(play == 1){
            counter2++;
        }
        else {
            counter1++;
            counter2++;
        }

    }
    if(counter1 >counter2){
        console.log(`YOU Win The Game!by ${counter2 - counter1} points`);

    }
    else if(counter2 >counter1){
        console.log(`The Computer wins the Game by ${counter2 -counter1} points`);
    }
    else{
        alert("The Game is Tied. Play Again");
    }

}


