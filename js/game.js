//variables that we need

//need an array of letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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

};

var updateLetterToGuess = function(){

};

var updateGuessesSoFar = function(){

};

//reset function for when we start over
var reset = function(){

};

//stuff that happens when the page loads
updateGuessesLeft();
updateGuessesSoFar();

//all this stuff happens when there's a keyboard click
document.onkeyup = function(event){
    guessesleft--;
//check for a match
if (letter === letterToGuess){

}

//if we're out of guesses
if (guessesLeft === 0){
    //here we have a loss
    losses++;
    reset();
}
};