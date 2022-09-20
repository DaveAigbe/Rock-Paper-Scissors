const choices = ['rock', 'paper', 'scissors']

const getComputerChoice = function (choices) {
    const randomIndex = Math.round(Math.random() * 2)
    return choices[randomIndex]
}

const getUserChoice = function () {
    return prompt('Enter your choice: Rock, Paper, or Scissors').toLowerCase()
}

const decideWinner = function (userScore, computerScore) {
    let score = document.getElementById('score')
    let winner = document.getElementById('winner')

    score.innerHTML = `User- ${userScore} : ${computerScore} -Computer`

    if (userScore === computerScore) {
        winner.innerHTML  = `Tie!`
    } else if (userScore > computerScore) {
        winner.innerHTML  = `You win!`
    } else {
        winner.innerHTML  = `You lose...`
    }
}

const playRound = function () {
    const playerSelection = getUserChoice();
    const computerSelection = getComputerChoice(choices);

    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'rock'){
                window.alert('Tie!')
                return 'tie'
            } else if (computerSelection === 'paper') {
                window.alert('You lose. Paper beats rock...')
                return 'computer'
            } else {
                window.alert('You win! Rock beats scissors!')
                return 'player'
            }
        case 'paper':
            if (computerSelection === 'rock'){
                window.alert('You win! Paper beats rock!')
                return 'player'
            } else if (computerSelection === 'paper') {
                window.alert('Tie!')
                return 'tie'
            } else {
                window.alert('You lose. Scissors beats paper...')
                return 'computer'
            }
        case 'scissors':
            if (computerSelection === 'rock'){
                window.alert('You lose. Rock beats scissors...')
                return 'computer'
            } else if (computerSelection === 'paper') {
                window.alert('You win! Scissors beats paper!')
                return 'player'
            } else {
                window.alert('Tie!')
                return 'tie'
            }
        default:
            window.alert('Please enter a valid choice')
    }
}


const play = function () {
    let counter = 0
    let player = 0
    let computer = 0
    while (counter !== 5) {
            const winner = playRound()

            if (winner ==='player') {
                player++
            } else if (winner === 'computer') {
                computer++
            }
            counter++;
        }

        decideWinner(player, computer)
}

play()
