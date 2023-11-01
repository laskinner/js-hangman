# Hangman
Description: A web-based implementation of the fun game, Hangman, using HTML, CSS, and Javascript.

Some foundational development techniques used include:
- Conditional statements to determine guess correctness
- For loops to iterate through word arrays
- Random number generator to select word
- Parsing strings to Arrays
- Converting arrays to objects
- Assigning boolean values to objects to set guessed status
- Decrement counters to track remaining guesses

Author: Luke Skinner

![image](https://github.com/laskinner/js-hangman/assets/1858258/02647fe5-ddfe-48eb-9ad1-aa0f852898e0)

Link: https://laskinner.github.io/js-hangman/

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

### Guess a character
- Guess input
  - charactor validation
  - no more than one charactor

### Word bank
  - Generated a word bank of 100 words ranging in length from 5 to 15 characeters using [ChatGPT]([url](https://openai.com/))
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

## Future featers
- Multiplayer mode
- Categories
  - This would include things like geographies, science, etc.
- Easy, Medium, hard
- Score counter
- Reset scores

# Technologies Used
- Git
- Javascript
- CSS
- HTML
- ChaptGPT

# Development and Deployment

# Checkers and validators used
- JSHint JavaScript Validator
![image](https://github.com/laskinner/js-hangman/assets/1858258/d7bf4a86-810d-4385-9f85-12e4c8d664da)

- W3C HTML Validator
The only warings shown in the HTML validator we related to empty headings due to content being injected with javascript:
![image](https://github.com/laskinner/js-hangman/assets/1858258/2a1bb926-9e0c-43bc-b6b1-4501de406a72)

- W3C CSS Validator (Jigsaw)
![image](https://github.com/laskinner/js-hangman/assets/1858258/496ffcdb-8876-475c-bccb-8344f3bef7eb)

- Lighthouse
![image](https://github.com/laskinner/js-hangman/assets/1858258/48410075-e6e2-43b9-89a3-50e908aef033)


# Notes

## Words array
It was first attempted to import a file containing the array of words to keep the code cleaner, but the import was causing problems, so to simplify the decision was made to just include the array directly in the made script.js file.

# Attribution
[Favicon](https://www.favicon.cc/?action=icon&file_id=39774)
Used chatgpt to help with the ASCII hangman states
