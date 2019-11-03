//Array of Pokemon
var thePokemon = ["bulbasaur", "charmander", "squirtle", "pikachu", "oddish", "tangela", "snorlax", "dragonite", "haunter", "lickitung"];
var theBackgrounds = ["bulba.jpg", "char.jpg", "squirt.jpg", "pika.jpg", "odd.jpg", "tang.jpg", "snor.jpg", "dragon.jpg", "haunt.jpg", "lick.jpg"];
//Tracking data
var wins = 0;
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
console.log(pokeBack);


//I choose you!
function assignWord() {
  var randomNumber = Math.floor(Math.random() * thePokemon.length);
  currentWord = thePokemon[randomNumber];
  console.log(pokemonIndex);
  pokemonIndex = randomNumber;
  console.log(pokemonIndex);
  wordLength = currentWord.length;
  console.log(wordLength);
  console.log(currentWord);
  lowerCaseWord = currentWord.toLowerCase();
  console.log(lowerCaseWord);
  //determining how many letters the chosen pokemon is 
  for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_";
  }
  //putting spaces bettwen the letters and removing commas
 guessWord.textContent = answerArray.join("   ");

};

document.onkeyup = function (event) {
  var userGuess = event.key;

    //first check to see if the letter is on the page
  if (answerArray.indexOf(userGuess) !== -1 || wrongAnswerArray.indexOf(userGuess) !== -1 ){
    console.log("hit1");

  } else {
    //if not on the page we are putting on the page where it goes (in one of the arrays)
    console.log("hit2");
    if (lowerCaseWord.indexOf(userGuess) !== -1) {
      for (var i=0; i < currentWord.length; i++) {
        if(currentWord[i] === userGuess) {
          answerArray[i] = currentWord[i];
          wordLength -= 1;
          console.log(wordLength);
          
        }
      }
      answerArray[lowerCaseWord.indexOf(userGuess)] = currentWord[lowerCaseWord.indexOf(userGuess)];
      guessWord.textContent = answerArray.join("   ");
      console.log("letter")
    }
  }
};
  

  //track how many wins
//   if (wordLength > 0 && remainingGuesses > 0) {
//     if (lowerCaseWord.indexOf(event.key) !== -1 && lowerCaseWord.indexOf(event.key) && wrongAnswerArray.indexOf(event.key)) {
//       console.log(!lowerCaseWord.indexOf(event.key));
//       for (var i = 0; i <= currentWord.length; i++) {
//         if (lowerCaseWord[i] === event.key) {
//           answerArray[i] = currentWord[i];
//           guessWord.textContent = answerArray.join("   ");
//           wordLength -= 1;
//           console.log(wordLength);
//         };
//       }; 
//     } else if (wrongAnswerArray.indexOf(event.key) === -1) {
//       wrongAnswerArray.push(event.key.toLowerCase());
//       userIncorrectGuesses.textContent = wrongAnswerArray.join("   ");
//       console.log(wrongAnswerArray);
//       remainingGuesses -= 1;
//       guessesRemaining.textContent = remainingGuesses;
//       console.log(remainingGuesses);
//     } else {};
//   } else if (wordLength <= 1 && remainingGuesses > 0) {
//     pokeBack.style.backgroundImage = "url(assets/images/" + theBackgrounds[pokemonIndex] + ")";
//     setTimeout("location.reload(true);", 3000);

//   } else {
//     alert("You lose! Wait 1 second to start again.");
//     setTimeout("location.reload(true);", 1000);
//   };
// };