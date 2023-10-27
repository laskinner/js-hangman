document.getElementById("welcome").textContent = "Welcome to hangman!";
document.getElementById("instructions").textContent = "To play the game, just follow these simple instructions: ";

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submit").addEventListener("click", function() {
    checkAnswer();
  });

  document.getElementById("guess-box").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });
});

// A bank of words from which to randomly select for play
const wordsArray = [
  "apple", "banana", "cherry", "date", "elder", "fig", "grape",
  "honey", "kiwi", "lemon", "mango", "nut", "olive", "pear",
  "quince", "rose", "sage", "thyme", "ume", "vine", "walnut",
  "yam", "zest", "berry", "clove", "dill", "earth", "fruit",
  "grain", "herb", "ink", "juice", "kale", "leaf", "mint",
  "oak", "peach", "quail", "root", "salt", "tree", "urn",
  "violet", "wheat", "xmas", "yew", "zinc", "bark", "clay",
  "duck", "eel", "fern", "goose", "hare", "iris", "jade",
  "kelp", "lily", "moss", "newt", "oats", "pine", "quartz",
  "reed", "sand", "tulip", "vine", "willow", "yarn", "zebra",
  "bat", "cat", "dog", "eel", "frog", "goat", "hare",
  "ibex", "jay", "koala", "lion", "mule", "newt", "owl",
  "pig", "quokka", "rat", "snail", "toad", "urchin", "vole",
  "wolf", "yak", "zebu"
];

// Initialize variables for the game
let letters;
let letterStatus;
let remainingGuesses;

// Initialize game
function startGame() {

  // Generates a random word from the words array
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
  }

  const word = getRandomWord();
  document.getElementById("word").textContent = `The randomly chosen word is ${word}`;

  // Splits the randomly generated word into an array of characters that the user can guess
  letters = word.split('');

  // Log out letters for testing
  console.log(letters);

  // Initializez an object to track each letter as having been guessed or not, and sets each to default not guessed
  letterStatus = {};

  letters.forEach(letter => {
    letterStatus[letter] = false;
  });

  // Logs out guessed status for testing
  console.log(letterStatus);

  remainingGuesses = 7;

}

startGame();

function checkAnswer() {

  // Gets user guess and converts it to lowercase if its provided in uppercase 
  let userAnswer = document.getElementById("guess-box").value.toLowerCase();

  // Loops through letters to see if the guessed letter is in the word
  letters.forEach(letter => {
    if (userAnswer === letter) {

      // Update the status of the guessed letter to true
      letterStatus[letter] = true;
      wrongGuess = false;
    }
  });

  // Checks to see if there are remaining guesse left, and if not, initiates loss mechanism and restarts game
  if (remainingGuesses === 0) {
    alert("Hang man!");
    startGame();
  }

  // Clears the input box after checking
  document.getElementById("guess-box").value = "";

  console.log(letterStatus);  // Logs updated letter status
}
