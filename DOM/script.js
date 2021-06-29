'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
const message = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const scoreSpan = document.querySelector('.score');
const number = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        message.textContent = 'No Number';
    } else if (guess === secretNumber) {
        message.textContent = 'Congrats You win';
        document.querySelector('body').style.background = "#60b347";
        number.style.width = "30rem";


    } else if (guess > secretNumber) {
        if (score > 1) {
            message.textContent = 'Your number is too high';
            score--;
            scoreSpan.textContent = score;
        } else {
            message.textContent = 'You lost the Game';
            score--;
            scoreSpan.textContent = 0;
        }
    } else if (guess < secretNumber) {

        if (score > 1) {
            message.textContent = 'Your number is too low';
            score--;
            scoreSpan.textContent = score;
        } else {
            message.textContent = 'You lost the Game';
            score--;
            scoreSpan.textContent = 0;
        }
    }
});
againBtn.addEventListener('click', function() {
    scoreSpan.textContent = 20;
    message.textContent = 'Start guessing...';
    const guess = Number(document.querySelector('.guess').value = '');
    document.querySelector('body').style.background = "#222";
    score = 20;
})
