 'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
const message = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const scoreSpan = document.querySelector('.score');
const number = document.querySelector('.number');
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('No Number');
    } else if (guess === secretNumber) {
        displayMessage('Congrats You win');
        number.textContent = guess;
        document.querySelector('body').style.background = "#60b347";
        number.style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            displayMessage('Your number is too high');
            score--;
            scoreSpan.textContent = score;
        } else {
            displayMessage('You lost the Game');
            score--;
            scoreSpan.textContent = 0;
        }
    } else if (guess < secretNumber) {

        if (score > 1) {
            displayMessage('Your number is too low');
            score--;
            scoreSpan.textContent = score;
        } else {
            displayMessage('You lost the Game');
            score--;
            scoreSpan.textContent = 0;
        }
    }
});
againBtn.addEventListener('click', function() {
    score = 20;
    scoreSpan.textContent = 20;
    displayMessage('Start guessing...');
    number.textContent = '';
    const guess = Number(document.querySelector('.guess').value = '');
    document.querySelector('body').style.background = "#222";
    number.style.width = "15rem";

});
