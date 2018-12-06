
    
 

    //create a list of words to be randomly chosen in game
var wordBank = [
    "Arya", 
    "Daenerys",  
    "Cersei",  
    "Winterfell",
    "Stark",
    "Lannister",
    "Baratheon",
    "Tully",
    "Greyjoy",
    "Drogo",
    "Whitewalker",
    "Hodor",
    "Dragon",
    "Dorne",
    
];
    
    //create variables with values that correspond to the divs in the HTML
    
var guessedLetterDiv = document.getElementById("guesses");

var wordDiv = document.getElementById("hiddenWord");
var maxTries = 7;
var userGuess = [];
var wrongGuess = [];
var answerArray = [];
var wins = 0;
var losses = 0;
var wordIndex;
var word;
var winsDiv = document.getElementById("wins"); 
var remainingDiv = document.getElementById("remaining");
var lossesDiv = document.getElementById("losses");

var guessedLetters = {};


document.onkeydown = function (event) {
    if (!word) {
        startGame();
        document.getElementById('getStarted').setAttribute('style', 'display: none;');
        document.getElementById('mainGame').setAttribute('style', 'display: block;');
        return;
    }
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toLowerCase())
    }
};

function startGame () {
    remainingTries = maxTries;
    guessedLetters = {};
    wordIndex = Math.floor(Math.random() * (wordBank.length));
    word = wordBank[wordIndex].toLowerCase();
    remainingDiv.innerText = remainingTries;
    console.log(wordIndex, word);
    wordDiv.innerText = getDisplayWord();
    console.log(wordDiv);
    guessedLetterDiv.innerText = ' ';
    winsDiv.innerText = wins;
    lossesDiv.innerText = losses;
}

function getDisplayWord() {
    var displayWord = '';
    for(i=0; i < word.length; i++) {
        var letter = word[i];
        if (guessedLetters[letter]) {
            displayWord = displayWord + letter + ' ';
        } else {
            displayWord = displayWord + '_ ';
        }
    }
    return displayWord;
}

function makeGuess(letter)    {
    // do nothing if the game has not started.
    if (!word) {
        return;
    }
    //if the letter has already been guessed do nothing
    if (guessedLetters[letter]) {
        return;
    }
    //record that the letter as been guessed, must be defined as true because an empty array is undefined which is also false
    guessedLetters[letter] = true;
    //if the letter is not in the word reduce remaining tries
    if (!word.includes(letter)) {
        remainingTries--;
        remainingDiv.innerText = remainingTries;
        //if remaining tries is zero go to gameover(show alert and restart the game), increase losses  
        if (remainingTries === 0) {
            alert("Their is a virtue in losing, but I'm sure you wouldn't understand it. Good luck next time! ");
            losses++;
            startGame();
            return;
        }
    }
    
    //update the display word
    wordDiv.innerText = getDisplayWord();

    //show guessed letters
    guessedLetterDiv.innerText = Object.keys(guessedLetters);

    //if the players guessed all the letters alert that they won and restart game and increase win
    if (!wordDiv.innerText.includes('_')) {
        alert("I see I've met my match, you shall be rewarded... a Lannister always pays his debts.");
        wins++;
        startGame();
    }

}


