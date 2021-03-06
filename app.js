
// All possible letters that computer can pick from
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// global variables defined 

var wins, losses, guessesLeft, guessesSoFar, userGuess;
wins = 0; 
losses = 0;
guessesLeft = 9;
// guessesSoFar is an array that will hold all the user's guesses in each round
guessesSoFar = [];
// Have computer pick a letter and store it in letterToBeGuessed
var letterToBeGuessed = letterChoices[Math.floor(Math.random() * letterChoices.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// start listening for events
document.onkeyup = function(event) {

    // When user presses a key, it records it and saves to userGuess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    /*
       
      1. make sure no repeated guesses in same game
      2. make sure choice valid or one of the array items in alphabet
      3. Add user's guess to array
      */

    if (guessesSoFar.indexOf(userGuess) < 0 && letterChoices.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length]=userGuess;
        guessesLeft--;
    }

    /* 
        if letterToBeGuessed == userGuess add to global win
        and then reset game
    */

    if (letterToBeGuessed == userGuess) {
        wins++;
        //tried alert here but stopped the function and did not display the last guess and the counter was stuck at 1 remainging guess
        console.log("No doubt about it, you are psychic!");
        guessesLeft = 9;
        guessesSoFar = [];
        letterToBeGuessed = letterChoices[Math.floor(Math.random() * letterChoices.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }

    /*
     1. if guessesLeft gets = 0 display loss to global score
     2. and then reset the game   
    */

    if (guessesLeft == 0) {
        losses++;
        //tried alert here but stopped the function and did not display the last guess and the counter was stuck at 1 remainging guess
        console.log("Your psychic abilities are questionable, play again?");
        guessesLeft = 9;
        guessesSoFar = [];
        letterToBeGuessed = letterChoices[Math.floor(Math.random() * letterChoices.length)];
        console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }

    // Game Play displayed to user
    var html = "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Guesses so far: " + guessesSoFar + "</h4></p>";
    // game ID displays HTML
    document.querySelector("#game").innerHTML = html;

}
