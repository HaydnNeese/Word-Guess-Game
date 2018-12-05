
var winDiv = document.getElementById("totalWins");
var guessDiv = document.getElementById("lettersGuessed");
var remainingDiv = document.getElementById("remainingGuesses");
var hintDiv = document.getElementById("hint")
var wordDiv = document.getElementById("guessArea")
var wordBank= [
    "Arya", 
    "Daenerys", 
    "The Hound", 
    "Cersei", 
    "Jon Snow",
    "Casterly Rock",
    "Kings Landing", 
    "Castle Black", 
    "The Wall", 
    "Winterfell",
    "Stark",
    "Lannister",
    "Baratheon",
    "Tully",
    "Greyjoy",
]
var randomWord = wordBank[Math.floor(Math.random() * (wordBank.length))];
randomWord = document.getElementById("guessArea").innerText;