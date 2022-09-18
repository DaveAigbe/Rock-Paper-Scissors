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
    winner.innerHTML  = userScore > computerScore ? `You win!` : `You lose...`
}


const play = function () {
    let counter = 0
    let player = 0
    let computer = 0
    while (counter !== 5) {
            const playerSelection = getUserChoice();
            const computerSelection = getComputerChoice(choices);

            switch(playerSelection) {
                case 'rock':
                    if (computerSelection === 'rock'){
                        console.log('Tie!')
                    } else if (computerSelection === 'paper') {
                        console.log('You lose. Paper beats rock...')
                        computer++
                    } else {
                        console.log('You win! Rock beats scissors!')
                        player++
                    }
                    break
                case 'paper':
                    if (computerSelection === 'rock'){
                        console.log('You win! Paper beats rock!')
                        player++
                    } else if (computerSelection === 'paper') {
                        console.log('Tie!')
                    } else {
                        console.log('You lose. Scissors beats paper...')
                        computer++
                    }
                    break
                case 'scissors':
                    if (computerSelection === 'rock'){
                        console.log('You lose. Rock beats scissors...')
                        computer++
                    } else if (computerSelection === 'paper') {
                        console.log('You win! Scissors beats paper!')
                        player++
                    } else {
                        console.log('Tie!')
                    }
                    break
                default:
                    console.log('Please enter a valid choice')
            }
            counter++;
        }

        // console.log(`User- ${player} : ${computer} -Computer`)
        // player > computer ? console.log(`You win!`) : console.log(`You lose...`)
        decideWinner(player, computer)
}

play()