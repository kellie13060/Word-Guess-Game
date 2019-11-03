//Array of Pokemon
var thePokemon = ["bulbasaur", "charmander", "squirtle", "pikachu", "oddish", "tangela", "snorlax", "dragonite", "haunter", "lickitung"];
var theBackgrounds = ["bulba.jpg", "char.jpg", "squirt.jpg", "pika.jpg", "odd.jpg", "tang.jpg", "snor.jpg", "dragon.jpg", "haunt.jpg", "lick.jpg"];
//Tracking data
var winsNumber = 0;
var remainingGuesses = 8;
var currentWord;
var lowerCaseWord;
var pokemonIndex;
var answerArray = [];
var wrongAnswerArray = [];
var wordLength;

var guessWord = document.getElementById("guessWord");
var wins = document.getElementById("wins");
var guessesRemaining = document.getElementById("guessesRemaining");
var userIncorrectGuesses = document.getElementById("userIncorrectGuesses");
var pokeBack = document.getElementsByTagName("body")[0];


//I choose you!
function assignWord() {
  clearArray(wrongAnswerArray);
  clearArray(answerArray);
  setTimeout('userIncorrectGuesses.textContent = wrongAnswerArray.join("   ");', 100);
  remainingGuesses = 8;
  guessesRemaining.textContent = remainingGuesses;
  var randomNumber = Math.floor(Math.random() * thePokemon.length);
  currentWord = thePokemon[randomNumber];
  pokemonIndex = randomNumber;
  wordLength = currentWord.length;
  lowerCaseWord = currentWord.toLowerCase();
  //determining how many letters the chosen pokemon is 
  for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_";
  }
  //putting spaces bettwen the letters and removing commas
  guessWord.textContent = answerArray.join("   ");
};

var winner = function () {
  alert("You Win! Hit 'OK' to play again :)")
  pokeBack.style.backgroundImage = "url(assets/images/back2.png)";
  assignWord();
  winsNumber++;
  wins.textContent = winsNumber;
};

var loser = function () {
  alert("You lose! Team Rocket Wins!");
  pokeBack.style.backgroundImage = "url(assets/images/rocket.jpg)";
  assignWord();
}

var clearArray = function (arrayToClear) {
  for (var i = 0; i < arrayToClear.length; i++) {
    arrayToClear.length = 0;
  }
}

document.onkeyup = function (event) {
  var userGuess = event.key;

  //first check to see if the letter is on the page
  if (answerArray.indexOf(userGuess) !== -1 || wrongAnswerArray.indexOf(userGuess) !== -1) {
    alert("Already Guessed That Letter. :)")

  } else {
    //if not on the page we are putting on the page where it goes (in one of the arrays)
    if (lowerCaseWord.indexOf(userGuess) !== -1) {
      for (var i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === userGuess) {
          answerArray[i] = currentWord[i];
          wordLength -= 1;
          guessWord.textContent = answerArray.join("   ");
          if (wordLength <= 0) {
            pokeBack.style.backgroundImage = "url(assets/images/" + theBackgrounds[pokemonIndex] + ")";
            setTimeout('winner();', 200);
          }
        }
      }
    } else {
      wrongAnswerArray.push(userGuess);
      userIncorrectGuesses.textContent = wrongAnswerArray.join("   ");
      remainingGuesses--;
      guessesRemaining.textContent = remainingGuesses;
      if (remainingGuesses <= 0) {
        loser();
      }
    }
  }
};