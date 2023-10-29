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

// Array to store the hangman states
const hangmanStates = [
  "|========|",
  "  |||\n  |||\n  |||\n  |||\n  |||\n|========|",
  "  ==============\n  |||\n  |||\n  |||\n  |||\n  |||\n|========|",
  "  ==============\n  |||       O\n  |||\n  |||\n  |||\n  |||\n|========|",
  "  ==============\n  |||       O\n  |||       |\n  |||\n  |||\n  |||\n|========|",
  "  ==============\n  |||       O\n  |||      /|\\ \n  |||\n  |||\n  |||\n|========|",
  "  ==============\n  |||       O\n  |||      /|\\ \n  |||      / \\ \n  |||\n  |||\n|========|"
];

// Initialize variables for the game
let letters;
let letterStatus;
let remainingGuesses;
let displayWord;
let wrongGuesses = [];

// Initialize game
function startGame() {

  // Generates a random word from the words array
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
  }

  const word = getRandomWord();

  // Splits the randomly generated word into an array of characters that the user can guess
  letters = word.split("");

  // Log out letters for testing
  console.log(letters);

  // Initializez an object to track each letter as having been guessed or not, and sets each to default not guessed
  letterStatus = {};

  letters.forEach(letter => {
    letterStatus[letter] = false;
  });

  // Logs out guessed status for testing
  console.log(letterStatus);

  // Sets the number of guesses at the start of the game
  remainingGuesses = 7;
  document.getElementById("remaining-guesses").textContent = `Remaining guesses: ${remainingGuesses}`;

  // Displays the length of the word, using underscores in place of letters not yet guessed
  displayWord = "_ ".repeat(letters.length);
  document.getElementById("display-word").textContent = displayWord;
  document.getElementById("hangman-display").textContent = "";
}

document.getElementById("start-button").addEventListener("click", function() {
  // Call the startGame function to initialize the game
  startGame();

  // Scroll down to the game section
  const game = document.getElementById("game");
  game.scrollIntoView({ behavior: 'smooth' });
});

// Game won logic
function gameWon() {
  for (const letter of letters) {
    if (!letterStatus[letter]) {
      return false;
    }
  }
  return true;
}

function checkAnswer() {

  // Gets user guess and converts it to lowercase if its provided in uppercase 
  let userAnswer = document.getElementById("guess-box").value.toLowerCase();
  let wrongGuess = true;
  let newDisplayWord = '';

  // Replaces the underscores with correctly guessed letters
  for (let letter of letters) {
    if (userAnswer === letter) {
      newDisplayWord += letter;
      wrongGuess = false;
      letterStatus[letter] = true;
    } else {
      newDisplayWord += letterStatus[letter] ? letter : '_ ';
    }
  }

  displayWord = newDisplayWord;
  document.getElementById("display-word").textContent = displayWord;

  // Renders the hangman with each wrongly guessed letter
  if (wrongGuess) {
    remainingGuesses--;
    let index = 7 - remainingGuesses;
    if (index < hangmanStates.length) {
      document.getElementById("hangman-display").textContent = hangmanStates[index];
    }
    wrongGuesses.push(userAnswer);
    document.getElementById("wrong-guesses").textContent = "Guessed letters: " + wrongGuesses.join(", ");
  }


  if (remainingGuesses === 0) {
    // Game Lost logic
    document.getElementById("game-result").textContent = "Hang man!";
    document.getElementById("final-word").textContent = "The word was " + word;
    const results = document.getElementById("results");
    results.scrollIntoView({ behavior: 'smooth' });
  } else if (gameWon()) {
    // Renders game won 
    document.getElementById("game-result").textContent = "Congratulations! You won!";
    document.getElementById("final-word").textContent = "The word was " + word;
    const results = document.getElementById("results");
    results.scrollIntoView({ behavior: 'smooth' });
  }


  // Update UI with remaining guesses
  document.getElementById("remaining-guesses").textContent = `Remaining guesses: ${remainingGuesses}`;
  document.getElementById("guess-box").value = "";

  // Logging for testing purposes
  console.log(remainingGuesses);
  console.log(letterStatus);  // Logs updated letter status
}

document.getElementById("play-again").addEventListener("click", function() {
  // Nuke everything and reset the game
  startGame();

  // Scroll back to the top of the page
  window.scrollTo(0, 0);
});
