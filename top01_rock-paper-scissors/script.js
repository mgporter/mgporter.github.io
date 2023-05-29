const selections = document.querySelectorAll('div.selection');
const arrows = document.querySelectorAll('div.arrow');
const roundsContainer = document.getElementById('rounds-container');
const ssContainer = document.getElementById("selection-score-container");
const body = document.querySelector('body');
const textBannerDiv = document.querySelector('div#text-banner');
const textBanner = document.querySelector('div#text-banner > h3');
const userScore = document.getElementById('player-score');
const compScore = document.getElementById('comp-score');
const roundsMessage = document.getElementById('numroundsmessage');

let compWin = 0;
let userWin = 0;
let numRounds = 1;
let curRound = 1;
let userSelection = "";
let compSelection = "";


const decorateSelections = function (e) {
    const id = e.target.id;
    const arrowDiv = document.getElementById(`${id}-arrow`);
    arrowDiv.classList.add('visible');
    e.target.classList.add('awaitingSelection');
};

const undecorateSelections = function (e) {
    const id = e.target.id;
    const arrowDiv = document.getElementById(`${id}-arrow`);
    arrowDiv.classList.remove('visible');
    e.target.classList.remove('awaitingSelection');
}

// Do this when the user clicks on rock, paper, or scissors
const userClicksSelection = function (event) {
    userSelection = event.target.id
    const arrowDiv = document.getElementById(`${userSelection}-arrow`);
    selections.forEach((item) => {
        item.removeEventListener('mouseenter', decorateSelections)
        item.removeEventListener('mouseleave', undecorateSelections)
        item.removeEventListener('click', userClicksSelection)
    });
    this.classList.add('selected');
    arrowDiv.classList.remove('visible');
    arrowDiv.classList.add('lockedonSelection');
    startCompSelection(userSelection);
}

const findWinner = function (compnum, usernum) {
    const winningNum = usernum - compnum;
    if (winningNum === 0) {
        return 0;
    } else if (winningNum === -1 || winningNum === 2) {
        compWin++
        return 1;
    } else if (winningNum === 1 || winningNum -2) {
        userWin++
        return 2;
    };
}

// get the computer's choice and report who won to the user
const startCompSelection = function(userChoiceItem) {
    const compChoiceNum = Math.floor((Math.random() * 3) + 1);
    let compChoiceItem = numToName(compChoiceNum);
    const compChoiceDiv = document.getElementById(compChoiceItem);

    const winningMessage = findWinner(compChoiceNum, nameToNum(userChoiceItem));

    userChoiceItem = userChoiceItem.charAt(0).toUpperCase() + userChoiceItem.slice(1);
    compChoiceItem = compChoiceItem.charAt(0).toUpperCase() + compChoiceItem.slice(1);
    body.classList.remove('winnerFlash'); // We remove the class winnerFlash from the last time the game was run

    selections.forEach((item) => item.classList.add('compThinking'))
    textBanner.textContent = "And the result is..."
    compChoiceDiv.addEventListener('animationend', () => {
        selections.forEach((item) => item.classList.remove('compThinking'))
        compChoiceDiv.classList.add('compChoice')

        switch (winningMessage) {
            case 0:
                body.style.setProperty('--winnerBackgroundColor', 'rgb(255, 225, 0)');
                body.classList.add('winnerFlash');
                textBanner.textContent = `It's a tie! You both picked ${compChoiceItem}!`;
                break;
            case 1:
                body.style.setProperty('--winnerBackgroundColor', 'rgb(233, 13, 13)');
                body.classList.add('winnerFlash');
                textBanner.textContent = `The computer wins! ${compChoiceItem} beats your ${userChoiceItem}` ;
                compScore.textContent = compWin;
                break;
            case 2:
                body.style.setProperty('--winnerBackgroundColor', 'rgb(72, 255, 0)');
                body.classList.add('winnerFlash');
                textBanner.textContent = `The user wins! Your ${userChoiceItem} beats ${compChoiceItem}`;
                userScore.textContent = userWin;
                break;
        }

        if (curRound == numRounds) {
            setTimeout(() => {
                giveFinalResult()
            }, 5000);
        } else {
            curRound += 1;
            setTimeout(() => {
                initializeGame(curRound)
            }, 4000);
        };

    }, {once: true})
    
}


// Starts the selection process when the user enters a number of rounds
const initializeGame = function(roundNumber) { 
    
    if (roundNumber > 1) {
        selections.forEach((item) => item.classList.remove('compChoice', 'selected', 'awaitingSelection'));
        arrows.forEach((item) => item.classList.remove('lockedonSelection'));
        textBanner.textContent = `Round ${roundNumber} of ${numRounds}!`;
    }
 
    numRounds = document.getElementById("numrounds").value;

    if (isNaN(numRounds) || numRounds == null || numRounds == 0) {
        roundsMessage.style.color = 'red';
        roundsMessage.textContent = "Value cannot be 0 or missing!";
        return
    }

    body.style.backgroundColor = 'white';
    roundsContainer.style.display = 'none';
    if (roundNumber == 1) {
        textBanner.textContent = `Starting up a game of Rock, Paper, Scissors. Round ${roundNumber} of ${numRounds}`;
    }
    ssContainer.classList.add('loading');
    ssContainer.style.display = 'inherit';

    selections.forEach((item) => {
        item.addEventListener('mouseenter', decorateSelections);
        item.addEventListener('mouseleave', undecorateSelections);
        item.addEventListener('click', userClicksSelection); // This is the function that moves the game forward
    });
    
    textBannerDiv.style.display = 'block';

    ssContainer.addEventListener('animationend', (e) => {
        ssContainer.classList.remove('loading');
        
        
        
    }, {once: true});

}

const resultsScreen = document.createElement('div');
const resultsText = document.createElement('h1');
const playAgainButton = document.createElement('button');
const resultsOverlay = document.getElementById('overlay');

resultsScreen.classList.add('results-screen');
playAgainButton.setAttribute('onclick', 'javascript:location.reload();');
playAgainButton.textContent = "Play another game?";
resultsScreen.appendChild(resultsText);
resultsScreen.appendChild(playAgainButton);

const giveFinalResult = function () {
    if (userWin === compWin) {
        resultsText.textContent = "It's a tie!"
    } else if (userWin > compWin) {
        resultsText.textContent = "The user wins! Congratulations!"
    } else {
        resultsText.textContent = "The computer won! Better luck next time..."
    }

    resultsOverlay.style.display = 'block';
    body.appendChild(resultsScreen);
    
}



const nameToNum = function (name) {
    switch(name) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
        default:
            return "ERROR";
    }
}

const numToName = function (num) {
    switch(num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "ERROR";
    }
}




