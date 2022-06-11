const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};
const displayScore = function (score1) {
  document.querySelector('.score').textContent = score1;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};
