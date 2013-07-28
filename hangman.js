var guess = "",
  SECRET_WORDS = ["ruby", "HTML", "css", "rails", "javascript"],
  SECRET_WORD,
  word = [],
  incorrect = [],
  guesses = 0,
  MAX_GUESS = 6;

function pickSecret () {
  word = [];
  var pick = Math.floor(Math.random() * SECRET_WORDS.length);
  SECRET_WORD = SECRET_WORDS[pick];
}

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

controls.guessButton.style.display = "none";
controls.guessBox.style.display = "none";

var scoreBoard = {
  guess: document.getElementById('guess'),
  word: document.getElementById('word'),
  incorrect: document.getElementById('incorrect')
};

controls.newGameButton.onclick = function () {
  console.log("Start a New Game");
  pickSecret();
  DashifyWord();
  scoreBoard.word.innerText = word.join(' ');
  controls.guessButton.style.display = "inline";
  controls.guessBox.style.display = "inline";
};

controls.guessButton.onclick = function () {
  guess = controls.guessBox.value;
  var letterIndex = SECRET_WORD.indexOf(guess);
  if (letterIndex >= 0) {
    for (var i = 0; i < SECRET_WORD.length; i++) {
      if (SECRET_WORD[i] === guess) {
        word[i] = guess;
      }
    }
  } else {
    incorrect.push(guess);
  }
  updateScoreBoard();
  gameCheck();
};

function updateScoreBoard () {
  scoreBoard.incorrect.innerText = incorrect.join(', ');
  scoreBoard.guess.innerText = guess;
  scoreBoard.word.innerText = word.join(' ');
}

function gameCheck () {
 if (incorrect.length === MAX_GUESS) {
    alert("GAME OVER");
    gameReset();
  } else if (word.indexOf("_") === -1){
    alert("YOU WIN");
    gameReset();
  } else {
    console.log("Keep guessing");
  }
}

function gameReset () {
  controls.guessButton.style.display = "none";
  controls.guessBox.style.display = "none";
  scoreBoard.guess.innerText = "";
  scoreBoard.word.innerText = "";
  scoreBoard.incorrect.innerText = "";
}

window.onload = function () {
  gameReset();
};
