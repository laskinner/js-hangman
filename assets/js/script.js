document.getElementById("welcome").textContent = "Welcome to hangman!";
document.getElementById("instructions").textContent = "To play the game, just follow these simple instructions: ";

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

// Set each letter to default not guessed
letters.forEach(letter => {
  letterStatus[letter] = false;
});

console.log(letterStatus);




