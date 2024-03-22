'use strict';

const calcNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = calcNumber();
let score = 20;
let highScore = 0;

const displayMessage = (message) =>
  (document.querySelector('.message').textContent = message);
const displayScore = (score) =>
  (document.querySelector('.score').textContent = score);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = calcNumber();

  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
