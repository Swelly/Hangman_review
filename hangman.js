var guess = "";
var SECRET_WORD = "ruby".split('');
var word = [];

var incorrect = [];
var correct = [];

function DashifyWord() {
  for (var i = 0; i < SECRET_WORD.length; i++) {
    word.push("_");
  }
}

var controls = {
  newGameButton: document.getElementById('new_game'),
  guessBox: document.getElementById('guess_box'),
  guessButton: document.getElementById('guess_button')
};

var scoreBoard = {
  guess: document.getElementById('guess'),
  word: document.getElementById('word'),
  incorrect: document.getElementById('incorrect')
};

controls.newGameButton.onclick = function () {
  console.log("Start a New Game");
  DashifyWord();
  scoreBoard.word.innerText = word.join(' ');
};

controls.guessButton.onclick = function () {
  guess = controls.guessBox.value;
  var letterIndex = SECRET_WORD.indexOf(guess);
if (SECRET_WORD.indexOf(guess) >= 0) {
  console.log("guess is in secret word");
  word[letterIndex] = guess;
} else {
  incorrect.push(guess);
}
 UpdateScoreboard();
};

function UpdateScoreboard () {
  scoreBoard.incorrect.innerText = incorrect.join(', ');
  scoreBoard.guess.innerText = guess;
  scoreBoard.word.innerText = word.join(' ');
}
