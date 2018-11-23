//variables that we need

//need an array of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//array of letters we've guessed
var guessedLetters = [];
//letter to guess based on a random letter assignment
//begins as null because we don't have an initial value
var letterToGuess = null;

//guesses we have remaining
var guessesLeft = 9;

//counters for wins and losses
var wins = 0;
var losses = 0;

//we need three functions
//one to update guesses
//one to calculate remaining guesses
//one for guesses so far

var updateGuessesLeft = function (){
    //get the htmll lement "guesses-left" and set it to the guessesLeft variable
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function(){
    //the app needs to figure out the letter to guess
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];

};

var updateGuessesSoFar = function(){
    //list all the guesses we've already made
    document.querySelector("#your-guesses").innerHTML = guessedLetters.join(", ");

};

//reset function for when we start over
var reset = function(){
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

//stuff that happens when the page loads
updateGuessesLeft();
updateGuessesSoFar();

//all this stuff happens when there's a keyboard click
document.onkeyup = function(event){
    guessesleft--;

    //make the letter lowercase
    var letter = String.fromCharCode(event.which).toLowerCase();

    guessedLetters.push(letter);

    updateGuessesLeft();
    updateGuessesSoFar();

//check for a match
if (letter === letterToGuess){

    //update wins
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();

}

//if we're out of guesses
if (guessesLeft === 0){
    //here we have a loss
    losses++;
    document.querySelector("@losses").innerHTML = losses;
    reset();
}
};