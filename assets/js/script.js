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

// Generates a random word from the wordsArray
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[randomIndex];
}

const word = getRandomWord();
document.getElementById("word").textContent = `The randomly chosen word is ${word}`;

// Splits the randomly generated word into an array of characters that the user can guess
const letters = word.split('');

console.log(letters);

// Creates an object to track each letter as having been guessed or not
const letterStatus = {};

// Sets each letter to default not guessed
letters.forEach(letter => {
  letterStatus[letter] = false;
});

console.log(letterStatus);

function checkAnswer() {

  let userAnswer = document.getElementById("guess-box").value;

  // Converts user answer to lowercase if the words are provided in uppercase 
  userAnswer = userAnswer.toLowerCase();

  // Loops through letters to see if the guessed letter is in the word
  letters.forEach(letter => {
    if (userAnswer === letter) {
      // Update the status of the guessed letter to true
      letterStatus[letter] = true;
    }
  });

  // Clears the input box after checking
  document.getElementById("guess-box").value = "";

  console.log(letterStatus);  // Logs updated letter status
}



