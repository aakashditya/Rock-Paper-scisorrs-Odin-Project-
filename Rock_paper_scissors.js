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

let playerScore = 0;
let compScore = 0;
let resultDisplay = document.querySelector('#result');
let playerScoreDisplay = document.querySelector('#playerScore');
let computerScoreDisplay = document.querySelector('#computerScore');
let gameResult = document.querySelector('#game');
let gameOver = false;

let reset = document.createElement('button');
    reset.addEventListener('click',()=>{
        playerScore =0;
        compScore = 0;
        document.querySelector('#playerScore').textContent = playerScore;
        document.querySelector('#computerScore').textContent = compScore;
        resultDisplay.textContent = '';
        gameOver =false;
        gameResult.textContent = '';
    });
reset.textContent = 'Reset';

function playRound(playerSelection) {
    //Okay here i will compare and then declare the logic of wins and loses and ties 

    if (gameOver){
        return ;  // so that there won't be a overflow if the game ends and the socre keeps on increasing
    }
    p1 = playerSelection.toLowerCase();
    p2 = getComputerChoice().toLowerCase();
    console.log(p1,p2);
    let results = {
        'rockrock': 'tie',
        'rockpaper': 'lose',
        'rockscissors': 'win',
        'paperrock': 'win',
        'paperpaper': 'tie',
        'paperscissors': 'lose',
        'scissorsrock': 'lose',
        'scissorspaper': 'win',
        'scissorsscissors': 'tie'
    
    };

    let result = results[p1 +p2];
    if(result =='win'){
        console.log((`You Win ${playerSelection} beats ${p2}`));
        gameResult.textContent = `You Win ${playerSelection.toUpperCase()} beats ${p2.toUpperCase()}`;
        playerScore+=1;
    }
    else if (result =='lose'){
        console.log(`You Lose ${p2.toUpperCase()} beats ${p1.toUpperCase()}`);
        compScore++;
        gameResult.textContent = `You Lose ${p2.toUpperCase()} beats ${p1.toUpperCase()}`;

    }
    else{
        console.log(`its a tie both have ${p1}`);
        gameResult.textContent=`It's a Tie both played ${p1.toUpperCase()}`;
    }

}

    
    let choices = ['Rock','Paper','Scissors'];
    for (choice of choices){

        let button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click',(event) =>{
            playRound(event.target.textContent);//event target helps for that specific click , i was sttruggling with this , as i just kept 'choice as a variable'
            console.log(playerScore,compScore);
            playerScoreDisplay.textContent= playerScore;
            computerScoreDisplay.textContent = compScore;

            if(playerScore >= 5 || compScore >= 5){
                if(compScore >= 5 ){
                    console.log('The Computer Wins the Game');
                    resultDisplay.textContent= 'The Computer Wins the Game ,Better Luck Next time , press Reset';
                    compScore = 0;
                    playerScore = 0;
                    gameOver = true;
                    gameResult.textContent= '';
                    
                
                    
                }
                else if(playerScore >= 5 ){
                    console.log('Congrats you win the Game');
                    resultDisplay.textContent ='Congrats You Win the Game, Press Reset to play again ';
                    playerScore = 0;
                    compScore = 0;
                    gameOver = true;
                    gameResult.textContent =''
                   
            
                
                }
                
            }

            
        });
        
        document.body.appendChild(button);


    }
    document.body.appendChild(reset);
   
    
    






    /*if (playerSelection.toLowerCase() == "rock" && p2 == "scissors" || playerSelection.toLowerCase() == "paper" && p2 == "rock" || playerSelection.toLowerCase() == "scissors" && p2 == "paper"){
        
         console.log((`YOU Win ${playerSelection} beats ${p2}`));
         playerScore+=1;
        
    }
    else if (playerSelection.toLowerCase() == "rock" && p2 == "paper" || playerSelection.toLowerCase() == "paper" && p2 == "scissors" || playerSelection.toLowerCase() == "scissors" && p2 == "rock"){
        
        console.log((`YOU LOSE ${p2} beats ${playerSelection} `));

        compScore+= 1;
        
    }
    else if (playerSelection.toLowerCase() == "rock" && p2 == "rock" || playerSelection.toLowerCase() == "paper" && p2 == "paper" || playerSelection.toLowerCase() == "scissors" && p2 == "scissors"){
         console.log(" Ohh Its the Same ,Tied");
         
    }
    else {
        console.log("there might be some error in your input or code");
    }
   

}*/

   /* for(let i = 0; i <5 ; i++){
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

    } //hehe removing the logic which is playing the 5 rounds , its for addding a UI

    const rockButton = document.createElement('button');
    const paperButton = document.createElement('button');
    const sciButton = document.createElement('button');

    const buttons = document.querySelectorAll('button');
    rockButton.textContent = 'Rock';
    paperButton.textContent = 'Paper';
    sciButton.innerText ='Scissors';
   
    buttons.forEach(elem => {
        elem.addEventListener('click' ,() => {
            playRound(elem.textContent))
        })
    
 
    document.body.appendChild(rockButton);
    document.body.appendChild(paperButton);
    document.body.appendChild(sciButton);
   if(counter1 >counter2){
        console.log(`YOU Win The Game!by ${counter2 - counter1} points`);

    }
    else if(counter2 >counter1){
        console.log(`The Computer wins the Game by ${counter2 -counter1} points`);
    }
    else{
        alert("The Game is Tied. Play Again");
    }
*/