# Hangman
Description: A web-based implementation of the fun game, Hangman, using HTML, CSS, and Javascript.

Author: Luke Skinner


# Checkers and validators used
- JSHint JavaScript Validator
- W3C HTML Validator
- W3C CSS Validator (Jigsaw)
- Lighthouse

# Features
## Required
Create a user input for the character guess.
Compare that guess to the letter and set it to true if the guess is correct
Display correctly guessed letters
Render the hang man with each incorrectly guessed letter
After 7 incorrec guesses, user loses.

### Welcome screen
- Welcome to hangman
- How to play
- Username (with validation)
- Click here to start!
- ASCII art

### Guess a character
- Guess input
  - charactor validation
  - no more than one charactor

### Word bank
  - 1,0000 words
  - Less than 10 characters

- Play again

- It will need to go into the word bank and select a word to use for that round
- Parse the word into an array of charactors
- Display those charactors with bottom border
- Compare the guessed charocter to the charocters in the array 
  - If right, the character[s] appear
  - If wrong, counter decreases by 1, another piece is drawn
- When the counter reaches 0, you are presented with you lose, and try again, and the last piece of the hangman is done
- If the counter reaches the number of characters in the array as being guess correctly, then you are shown you win, and can try again. 
- Score counter

## Optional
- Single and multiplayer
- Categories
  - This would include things like geographies, science, etc.
- Easy, Medium, hard
- Score counter
- Reset scores


# Notes

## Words array
It was first attempted to import a file containing the array of words to keep the code cleaner, but the import was causing problems, so to simplify the decision was made to just include the array directly in the made script.js file.

# Attribution
[Favicon](https://www.favicon.cc/?action=icon&file_id=39774)
Used chatgpt to help with the ASCII hangman states
