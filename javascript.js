function getComputerChoice () {
    const option = ['Rock','Paper','Scissors']
    var random = option[Math.floor(Math.random()*option.length)];
    console.log (random)
}
getComputerChoice();
