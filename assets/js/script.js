// Initialize event listeners
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("submit").addEventListener("click", function() {
    checkAnswer();
  });

  document.getElementById("guess-box").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });

  document.getElementById("restart").addEventListener("click", function() {
    startGame();

    // Send user back to welcome section 
    fadeOut("results");
    fadeIn("welcome");
  });
});

// UI Fading functionality
function fadeOut(id) {
  const element = document.getElementById(id);
  element.classList.add("fade-out");
  element.classList.remove("fade-in");
  setTimeout(() => {
    element.classList.add("hidden");
  }, 1000); // Hide after 1s
}

function fadeIn(id) {
  const element = document.getElementById(id);
  element.classList.remove("hidden");
  element.classList.remove("fade-out"); // Remove fade-out first
  setTimeout(() => {
    element.classList.add("fade-in");
  }, 500); // Add fade-in after a brief delay
}

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

// Array to store the hangman states which serve as the graphic
const hangmanStates = [
  "|========|",
  "  |||\n  |||\n  |||\n  |||\n  |||\n |========|",
  "  |==============\n  |||\n  |||\n  |||\n  |||\n  |||\n |========|",
  "  |==============\n  |||       O\n  |||\n  |||\n  |||\n  |||\n |========|",
  "  |==============\n  |||       O\n  |||       |\n  |||\n  |||\n  |||\n |========|",
  "  |==============\n  |||       O\n  |||      /|\\ \n  |||\n  |||\n  |||\n |========|",
  "  |==============\n  |||       O\n  |||      /|\\ \n  |||      / \\ \n  |||\n  |||\n |========|"
];

// Initialize global variables for the game
let letters;
let letterStatus;
let remainingGuesses;
let displayWord;
let wrongGuesses = [];
let word;

// Checks username input field and makes let's play clickable
function checkInput() {
  const username = document.getElementById('username').value;
  const playButton = document.getElementById('start-button');
  playButton.disabled = !username;
  playButton.onclick = function() {
    if (!username) {
      alert("Please enter a username.");
      return;
    }
    startGame(username);
    // Clear the array containing displayed guesses
    wrongGuesses = [];

    // Render the game section
    fadeOut("welcome");
    fadeIn("game");
  };
}

// Initialize game
function startGame(username) {
  //  document.getElementById('introduction').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  document.getElementById('gameText').innerText = `${username}, Guess a letter!`;

  // Generates a random word from the words array
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
  }

  word = getRandomWord();

  // Splits the randomly generated word into an array of characters that the user can guess
  letters = word.split("");

  // Initialize an object to track each letter as having been guessed or not, and sets each to default not guessed
  letterStatus = {};

  letters.forEach(letter => {
    letterStatus[letter] = false;
  });

  // Sets the number of guesses at the start of the game
  remainingGuesses = 7;
  document.getElementById("hangman-display").textContent = "";
  document.getElementById("remaining-guesses").textContent = `Remaining guesses: ${remainingGuesses}`;

  // Displays the length of the word using underscores in place of letters not yet guessed
  displayWord = "_ ".repeat(letters.length);
  document.getElementById("display-word").textContent = displayWord;
  document.getElementById("hangman-display").textContent = "";
}


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

  // Validate the input: only allow single alphabetical characters
  if (!userAnswer.match(/^[a-z]$/)) {
    alert('Please enter a single letter.');
    return;
  }

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

  // Renders the hangman graphic with each wrongly guessed letter using decrements
  if (wrongGuess) {
    remainingGuesses--;
    let index = 6 - remainingGuesses;
    if (index < hangmanStates.length) {
      document.getElementById("hangman-display").textContent = hangmanStates[index];
    }
    wrongGuesses.push(userAnswer);
    document.getElementById("wrong-guesses").textContent = wrongGuesses.join(" - ");
  }

  if (remainingGuesses === 0) {
    // Game Lost logic
    document.getElementById("game-result").textContent = "Hang man!";
    document.getElementById("final-word").textContent = "The word was " + word;
    fadeOut("game");
    fadeIn("results");
  } else if (gameWon()) {
    // Renders game won 
    document.getElementById("game-result").textContent = "Congratulations! You won!";
    document.getElementById("final-word").textContent = "The word was " + word;
    fadeOut("game");
    fadeIn("results");
  }

  // Update UI with remaining guesses
  document.getElementById("remaining-guesses").textContent = `Remaining guesses: ${remainingGuesses}`;
  document.getElementById("guess-box").value = "";
}
