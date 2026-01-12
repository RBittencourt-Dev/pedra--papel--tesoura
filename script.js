const result = document.querySelector('.result');
const resultPc = document.querySelector('.result-pc')
const yourScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0;
let machineScoreNumber = 0;

//playHuman (resultMachineScreen())

const playHuman = (HumanChoice) => {
    console.log(HumanChoice);

    playTheGame(HumanChoice, playMachine())

    resultMachineScreen()
}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices [randomNumber]
}

function resultMachineScreen() {
    resultPc.innerHTML = 'Computador escolheu: ' + playMachine();

}



  

//const resultGameScreen = document.createElement('p');
//resultGameScreen.classList.add('.result-pc');
//resultPc.innerHTML = 'Computador escolheu:' + playMachine();



const playTheGame = (Human, Machine) => {
    console.log('Você:' + Human + 'Máquina:' + Machine);

    if(Human === Machine) {
        result.innerHTML = 'Empate!'
    }

    else if((Human === 'rock' && Machine === 'scissors')
         || (Human === 'paper' && Machine === 'rock')
         || (Human === 'scissors' && Machine === 'paper')) {

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