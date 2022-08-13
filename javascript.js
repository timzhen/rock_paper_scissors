const option = ['rock', 'paper', 'scissors']

function getComputerChoice () { // computer seleciton
    var random = option[Math.floor(Math.random()*option.length)];
    console.log ('Computer chose', random)
}

function playerChoice () { //player selection
 let input = prompt ('Rock, Paper, Scissors')
    input = input.toLowerCase();

 while (input == null) {
    input = prompt ('Rock, Paper, Scissors')
 }
   let check = checkChoice (input)
 while (check == false) {
   input = prompt ('Please choose rock, paper, or scissors (spelling matters)')
 while (input == null) {
   input = prompt ('Rock, Paper, Scissors')
 }
    input = input.toLowerCase()
    check = checkChoice(input); 
    console.log ('You chose', input)
 }

}    
playerChoice()
function playRound (playerSelection, computerSelection) {
    if (playerSelection == option [0] && computerSelection == option [1]) {
        console.log ('You Lose! Paper beats Rock')
    }
    else if (playerSelection == option [0] && computerSelection == option [2]) {
        console.log ('You Win! Rock beats Scissors')
    }
    else if (playerSelection == option [0] && computerSelection == option [0]) { 
        console.log ('No one wins')}
}

function checkChoice (choice) {
    if (option.includes(choice)) {
        return true
    } else {
        return false
    }
}
//playRound ('rock', 'paper')