const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const btn = document.getElementById('btn');

let results = document.getElementById('results');
let currentScore = document.getElementById('current-score')
let finalresult = document.getElementById('finalresult');

let score = {
    comment: "", playerPoints: [], computerPoints: []
}

rock.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
  results.innerHTML = `${score.comment}`;
  currentScore.innerHTML = `${score.playerPoints.length} - ${score.computerPoints.length}`;
  game();
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
    results.innerHTML = `${score.comment}`
    currentScore.innerHTML = `${score.playerPoints.length} - ${score.computerPoints.length}`;
    game();
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
    results.innerHTML = `${score.comment}`;
    currentScore.innerHTML = `${score.playerPoints.length} - ${score.computerPoints.length}`;
    game();
});





function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    let compChoice;
    if (randomNum === 1) {
        compChoice = "rock";
    } else if (randomNum === 2) {
        compChoice = "paper";
    } else {
        compChoice = "scissors"
    }
    return compChoice;
    
}; 

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        score.comment = "You won! Rock beats Scissors.";
        score.playerPoints.push(1);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        score.comment = "You lose! Paper beats Rock.";
        score.computerPoints.push(1);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        score.comment = "You won! Scissors beats Paper.";
        score.playerPoints.push(1);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        score.comment = "You lose! Rock beats Scissors.";
        score.computerPoints.push(1);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        score.comment = "You won! Paper beats rock.";
        score.playerPoints.push(1);
    } else if (playerSelection === "paper" & computerSelection === "scissors") {
        score.comment = "You lose! Scissors beats Paper.";
        score.computerPoints.push(1);
    } else if (playerSelection === computerSelection) {
        score.comment = "It's a tie! Try one more time."
    } else {
        score.comment = "Incorrect input. Please choose Rock, Paper or Scissors."
    }
    return score;          
}; 


function game() {
    // for (let i = 0; (score.playerPoints.length < 5) && (score.computerPoints.length < 5); i++)
        if (score.playerPoints.length === 5 ) {
            finalresult.innerHTML = "You won the game!";
            btn.style.display = "block";
            btn.addEventListener('click', () => {
                resetGame();
            });
           
            
        }
        else if (score.computerPoints.length === 5) {
            finalresult.innerHTML = "You loose the game!"
            btn.style.display = "block";
            btn.addEventListener('click', () => {
                resetGame();
            });
        };
};

function resetGame() {
    score = {
        comment: "", playerPoints: [], computerPoints: []
    };
    results.innerHTML = "";
    currentScore.innerHTML = "";
    finalresult.innerHTML = "";
    console.log(score);
    btn.style.display = "none";
}