//Array of Pokemon
var thePokemon = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Oddish", "Tangela", "Snorlax", "Dragonite", "Haunter", "Lickitung"];

//Tracking data
var wins = 0;
var bodyParts = 0;
var ties = 0;
var currentWord;
var answerArray = [];

//letters guessed by users 
var storedGuesses= [];

var guessWord = document.getElementById("guessWord");
var wins = document.getElementById("wins");
var guessesRemaining = document.getElementById("guessesRemaining");
var userGuesses = document.getElementById("userGuesses");


//I choose you!
function assignWord() {
  currentWord = thePokemon[Math.floor(Math.random() * thePokemon.length)];
  
  //determining how many letters the chosen pokemon is 
  for (var i = 0; i < currentWord.length; i++){
    answerArray[i] = "_";
  }
  //putting spaces bettwen the letters and removing commas
  guessWord.textContent = answerArray.join("   ");

};

document.onkeyup = function(event){
 var curWrdExist = currentWord.indexOf(event.key);
 var alreadyGuessed = answerArray.indexOf(event.key);
 console.log(curWrdExist);
    //what key was pressed
 var userGuess = event.key;




//check to see if key pushed is in word and check to see if already been guessed (if already pressed doesn't use a turn)


//show letter in word or log in array

//pushing letter pressed to array
storedGuesses.push(userGuess);

};
    











//track how many wins

        //display the word like this _ _ _ _ _ _ _ 

        //Revel the words as the user guess them

        //Number of guesses remaining

        //letters already guessed

        //auto restart with a new word