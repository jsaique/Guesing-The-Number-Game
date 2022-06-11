'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number🎊🎉');
    displayNumber(secretNumber);
    displayBody('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'To High 📈' : 'To Low 📉');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game');
      displayScore((textContent = 0));
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing');
  displayScore(score);
  displayNumber('?');
  displayGuess('');
  displayBody('#222');
  document.querySelector('.number').style.width = '15rem';
});
