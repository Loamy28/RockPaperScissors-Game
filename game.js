const playerText = document.querySelector("#playerText");
const botText = document.querySelector("#botText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let bot;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    botTurn();
    playerText.textContent = `Player: ${player}`;
    botText.textContent = `Bot: ${bot}`;
    resultText.textContent = checkWinner();
}));

function botTurn(){
    

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            bot = "ROCK";
            break;
        case 2:
            bot = "PAPER";
            break;
        case 3:
            bot = "SCISSORS";
            break;
    }
}

function checkWinner(){
    if(player == bot){
        return "Draw!";
    }
    else if(bot == "ROCK"){
        return (player == "PAPER") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(bot == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIN!" : "YOU LOSE!"
    }
    else if(bot == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIN!" : "YOU LOSE!"
    }
}