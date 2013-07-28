var guess;
var SECRET_WORD = "ruby";
var word = "";

function DashifyWord () {
  for (var i = 0; i < SECRET_WORD.length; i++) {
    word = word + "_ ";
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

};

controls.guessButton.onclick = function () {
  console.log("Made a Guess");
  guess = controls.guessBox.value;
  scoreBoard.guess.innerText = guess;
};
