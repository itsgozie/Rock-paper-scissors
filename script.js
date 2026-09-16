console.log('Hello Javascript');
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return 'Rock'
    } else if (choice === 1) {
        return 'Paper'
    } else return 'Scissors';
}

getHumanChoice = function () {
    humanChoice = prompt('')
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}


function playround(humanChoice, computerChoice) {
    if (humanChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore += 1
        return console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        humanScore += 1
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        humanScore += 1
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else if (humanChoice === 'Paper' && computerChoice === 'Scissors') {
        computerScore += 1
        return console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    } else if (humanChoice === 'Scissors' && computerChoice === 'Rock') {
        computerScore += 1
        return console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    } else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore += 1
        return console.log(`You Win! ${humanChoice} beat ${computerChoice}`)
    } else if (humanChoice === '') {
        computerScore += 1
        return console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
    }

    else console.log('It\'s a tie')
}



function playGame() {
    let n = 5;
    while (n > 0){
        playround(getHumanChoice(), getComputerChoice())
    n--;}
}
playGame()


console.log(`Player: ${humanScore}, Computer:${computerScore}`);

