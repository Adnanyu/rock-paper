const playerText = document.querySelector('#player-text')
const computerText = document.querySelector('#computer-text')
const result = document.querySelector('#result')
const playerChoice = document.querySelectorAll('.player')
const winpoint = document.querySelector('#playto')
const reset1 = document.querySelector('#reset')
const p1display = document.querySelector('#playersco')
const compdisplay = document.querySelector('#compsscore')
const final = document.querySelector('.final-result')
const plrImg = document.querySelector('.plyImg')
const compImg = document.querySelector('.compImg')

let playerSelection 
let computerSelection
let plScore = 0;
let computerScore = 0;
let winningscore = 3;
let gameResult;

winpoint.addEventListener('change', () => {
    reset();
    winNumber = parseInt(winpoint.options[winpoint.selectedIndex].value)
    winningscore = winNumber;
})

reset1.addEventListener('click', reset)
gameResult = playRound(playerSelection, computerSelection)

playerChoice.forEach(button => button.addEventListener ('click' , () => {
    playerSelection = button.value 
    computerSelection = getComputerChoice()
    playerText.innerHTML = `PLAYER: ${playerSelection.toUpperCase()}`
    plrImg.src = `photos/${playerSelection}.png`
    computerText.innerHTML = `COMPUTER: ${computerSelection.toUpperCase()}`
    compImg.src = `photos/${computerSelection}1.png`
    result.innerHTML = ` round  result: ${gameResult = playRound(playerSelection, computerSelection)}`
    if( gameResult === 'PLAYER WINS!' ){
        plScore++
        p1display.textContent = plScore
        if (plScore > winningscore / 2){
            final.innerHTML = `MATCH RESULT: PLAYER WINS THIS MATCH!`
            for(let i = 0; i < playerChoice.length ; i++){
                playerChoice[i].disabled = true;
            }
        }
    }else if (gameResult === 'COMPUTER WINS!'){
        computerScore++
        compdisplay.textContent = computerScore
        if (computerScore > winningscore / 2){
            final.innerHTML = `MATCH RESULT: COMPUTER WINS THIS MATCH!`
            for(let i = 0; i < playerChoice.length ; i++){
                playerChoice[i].disabled = true;
            }
        }
    }
}))


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)
    if(choice === 0){
        return 'rock'
    }else if(choice === 1){
        return 'paper'
    }else{
        return 'scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        return 'draw'
    }else if (computerSelection === 'rock' ){
        return (playerSelection === 'paper') ? 'PLAYER WINS!' : 'COMPUTER WINS!'
    }else if(computerSelection === 'paper' ){
        return (playerSelection === 'scissors') ? 'PLAYER WINS!' : 'COMPUTER WINS!'
    }else if(computerSelection === 'scissors' ){
     return (playerSelection === 'rock') ? 'PLAYER WINS!' : 'COMPUTER WINS!'
}
}


function reset(){
    plScore = 0;
    computerScore = 0;
    playerText.innerHTML = `PLAYER:`
    computerText.innerHTML = `COMPUTER:`
    result.innerHTML = ` ROUND RESULT:`
    playerSelection = ''
    computerSelection = ''
    compdisplay.textContent = 0
    p1display.textContent = 0
    final.innerHTML = ''
    for(let i = 0; i < playerChoice.length ; i++){
        playerChoice[i].disabled = false;
    }
    plrImg.src = `photos/finger.png`
    compImg.src = `photos/robot.png`
}