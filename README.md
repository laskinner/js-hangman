# Hangman
Description: A web-based implementation of the fun game, Hangman, using HTML, CSS, and Javascript.

Some foundational development techniques used include:
- Random number generator to select word
- Parsing selected word as a strings to into an array of letters
- Converting the letters array into into objects
- Assigning boolean values to the object to set guessed letters as true or false status
- For loops to iterate through word arrays
- Conditional statements to determine guess correctness and display the corect game result
- Decrement counters to track remaining guesses

Author: Luke Skinner

![image](https://github.com/laskinner/js-hangman/assets/1858258/5c005689-24e1-468e-8bc0-9400a84ff903)


Link to live site: https://laskinner.github.io/js-hangman/

# Features
## Required
Create a user input for the character guess.
Compare that guess to the letter and set it to true if the guess is correct
Display correctly guessed letters
Render the hang man with each incorrectly guessed letter
After 7 incorrec guesses, user loses.

### Welcome screen
- Welcome to hangman
- Instructions on how to play
- Ability provdie username
- A "Let's Play" button to redirect user to play screen

![image](https://github.com/laskinner/js-hangman/assets/1858258/9c553f39-d4db-45d2-9dc3-787b7fa5cba6)



### Game Screen
- Ability to guess input with charactor validation
- Users can see how many remaining guesses they have
- Users can see which letters they've already guessed
- Users cas see the hangman being rendered with each wrong guess
- Users can see the correctly guessed charecters being rendered

![image](https://github.com/laskinner/js-hangman/assets/1858258/a304bd6b-75eb-4892-a68e-7e0cfbda0940)

![image](https://github.com/laskinner/js-hangman/assets/1858258/5687cc84-2695-4e6d-b4c5-11985bc63912)



### Results Screen
- User is informed whether they won or lost
- User has the ability to start over with a button

![image](https://github.com/laskinner/js-hangman/assets/1858258/3ac1171d-857c-4910-9b4b-c0d931e2da09)



## Future features
- Two player mode
  - Each user has the opportunity to provide a word in the UI for their opponent to guess
  - Score tracking would be a requirement
- Categories
  - This would include things like geographies, science, etc.
- Easy, Medium, hard
- Score counter
- Reset scores

# Bugs

One remaining bug which persists is that the previously guessed letters don't disappear from one game to the next:

![image](https://github.com/laskinner/js-hangman/assets/1858258/72cce94c-f67c-4b9b-b603-d44beed4a5ba)

This is not a show-stopper, as when the user begins guesses letters in the new game, those previously guessed letters disappear:

![image](https://github.com/laskinner/js-hangman/assets/1858258/feeb3418-fc74-461d-9b70-23c62ccb8c71)

However, as this is a fairly severe bug, it should be prioritized accordingly.

# Technologies Used
- Github
- Github pages
- Javascript
- CSS
- HTML
- ChaptGPT for word array generation

# Development and Deployment
To deploy, simply merge changes to Master and Github pages will automatically redploy with the new changes.

# Checkers and validators used
## JSHint JavaScript Validator

![image](https://github.com/laskinner/js-hangman/assets/1858258/d7bf4a86-810d-4385-9f85-12e4c8d664da)

## W3C HTML Validator

The only warings shown in the HTML validator we related to empty headings due to content being injected with javascript:
![image](https://github.com/laskinner/js-hangman/assets/1858258/2a1bb926-9e0c-43bc-b6b1-4501de406a72)

## W3C CSS Validator (Jigsaw)
![image](https://github.com/laskinner/js-hangman/assets/1858258/496ffcdb-8876-475c-bccb-8344f3bef7eb)

## Lighthouse
![image](https://github.com/laskinner/js-hangman/assets/1858258/48410075-e6e2-43b9-89a3-50e908aef033)

# Notes
### Words Array
It was first attempted to import a file containing the array of words to keep the code cleaner, but the import was causing problems, so to simplify the decision was made to just include the array directly in the script.js file. In the future, it would be worth the effort to separete the word bank out into a words.js file, rather than hard-coding the array(s) into the script.js itself. This would make future developments toward features like two-player mode, requiring user-provided words, and categories and difficultly level, cleaner and less prone to error.

### Issue tracking
Several issues and bugs were tracked using the Github isseu tracker for this project, which can be used and viewed. Outstanding, open issues include the above-mentioned bug regarding the clearing of the previously guessed letters, as well as future features.

# Attribution
- [Favicon used from Favicon.cc](https://www.favicon.cc/?action=icon&file_id=39774)
- Used [chatgpt]([url](https://openai.com/)) to help with the ASCII hangman states and to generate an array of 100 words with 5 - 15 characters
