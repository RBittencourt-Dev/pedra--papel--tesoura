const result = document.querySelector('.result');
const resultPc = document.querySelector('.result-pc')
const yourScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

//playHuman (resultMachineScreen())

const playHuman = (HumanChoice) => {
    console.log(HumanChoice);

    playTheGame(HumanChoice, playMachine())

    resultMachineScreen()
}


const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices [randomNumber]
}

function resultMachineScreen() {
    resultPc.innerHTML = 'Computador escolheu: ' + playMachine();

}


const playTheGame = (Human, Machine) => {
    console.log('Você:' + Human + 'Máquina:' + Machine);

    if(Human === Machine) {
        result.innerHTML = 'Empate!'
    }

    else if((Human === GAME_OPTIONS.ROCK && Machine === GAME_OPTIONS.SCISSORS)
         || (Human === GAME_OPTIONS.PAPER && Machine === GAME_OPTIONS.ROCK)
         || (Human === GAME_OPTIONS.SCISSORS && Machine === GAME_OPTIONS.PAPER)) {

            humanScoreNumber++;
            yourScore.innerHTML = humanScoreNumber;
        result.innerHTML = 'Você ganhou!'
    }

    else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = 'Você perdeu!'
    }
}