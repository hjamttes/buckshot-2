let chamberStatus = '';
let dealerStatus = '';
let playerStatus = '';
let resultMessage = '';
let gameLevel = 1;
let blankRounds = 5;
let liveRounds = 1;

document.getElementById('play-button').addEventListener('click', playRound);
document.getElementById('examine-button').addEventListener('click', examineChamber);
document.getElementById('skip-button').addEventListener('click', skipTurn);

function playRound() {
    chamberStatus = getChamberStatus();
    document.getElementById('chamber-status').innerText = chamberStatus;
    if (chamberStatus === 'LIVE') {
        resultMessage = 'You died!';
        endGame();
    } else {
        dealerTurn();
    }
}

function examineChamber() {
    chamberStatus = getChamberStatus();
    document.getElementById('chamber-status').innerText = chamberStatus;
}

function skipTurn() {
    dealerTurn();
}

function dealerTurn() {
    dealerStatus = getChamberStatus();
    document.getElementById('dealer-status').innerText = dealerStatus;
    if (dealerStatus === 'LIVE') {
        resultMessage = 'Dealer died!';
        endGame();
    } else {
        playerTurn();
    }
}

function playerTurn() {
    playerStatus = getChamberStatus();
    document.getElementById('player-status').innerText = playerStatus;
    if (playerStatus === 'LIVE') {
        resultMessage = 'You died!';
        endGame();
    } else {
        gameLevel++;
        if (gameLevel > 3) {
            resultMessage = 'You won!';
            endGame();
        } else {
            resetGame();
        }
    }
}

function getChamberStatus() {
    const randomIndex = Math.floor(Math.random() * (blankRounds + liveRounds));
    if (randomIndex < blankRounds) {
        return 'BLANK';
    } else {
        return 'LIVE';
    }
}

function endGame() {
    document.getElementById('result-message').innerText = resultMessage;
    document.getElementById('play-button').disabled = true;
    document
