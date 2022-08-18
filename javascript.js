const option = ['rock', 'paper', 'scissors']
const winners = []

function playRound (round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection)
    //console.log (winner)
    winners.push (winner)
    logRound(playerSelection, computerSelection, winner, round)
}

function game () { //plays game rounds, first to 5
    for (let i = 1; i <= 5; i++ ) {
        playRound(i)
    }
    logWins()
}

function getComputerChoice () { // computer seleciton
    var random = option[Math.floor(Math.random()*option.length)];
    //console.log ('Computer chose', random)
    return random;
}

function playerChoice () { //player selection
 let input = prompt ('Type Rock, Paper, Scissors')
    input = input.toLowerCase();

 while (input == null) {
    input = prompt ('Type Rock, Paper, Scissors')
 }
   let check = checkChoice (input)
 while (check == false) {
   input = prompt ('Please choose rock, paper, or scissors (spelling matters)')
 while (input == null) {
   input = prompt ('Rock, Paper, Scissors')
 }
    input = input.toLowerCase()
    check = checkChoice(input);     
 }
//console.log ('You chose', input)
return input;
}

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return ('You Win')
    } else if (playerSelection === computerSelection) {
        return('tie')
    } else {
        return ('You Lose')
    }
}

function checkChoice (choice) {
    if (option.includes(choice)) {
        return true
    } else {
        return false
    }
}

function logWins () {
    let playerWins = winners.filter ((item) => item == 'You Win').length
    let computerWins = winners.filter ((item) => item == 'You Lose').length
    let ties = winners.filter ((item) => item == 'tie').length
    console.log ('Results:')
    console.log ('Player Wins:', playerWins)
    console.log ('Computer Wins:', computerWins)
    console.log ('Ties', ties)
}

function logRound (playerSelection, computerSelection, winner, round) {
    console.log ('Round',round)
    console.log ('player choses', playerSelection)
    console.log ('computer choses',computerSelection)
    console.log (winner, 'won this round')
    console.log ('---------------------------------------------------------')
}

game()