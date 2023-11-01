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

![image](https://github.com/laskinner/js-hangman/assets/1858258/02647fe5-ddfe-48eb-9ad1-aa0f852898e0)

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

![image](https://github.com/laskinner/js-hangman/assets/1858258/b966842d-e88c-4a67-be5a-8f7c15026b8b)


### Game Screen
- Ability to guess input with charactor validation
- Users can see how many remaining guesses they have
- Users can see which letters they've already guessed
- Users cas see the hangman being rendered with each wrong guess
- Users can see the correctly guessed charecters being rendered


![image](https://github.com/laskinner/js-hangman/assets/1858258/986caa45-557c-49b3-865f-2e51d2e7d4a8)
![image](https://github.com/laskinner/js-hangman/assets/1858258/6ad36b90-2902-40d5-b4d3-3f665781b841)


### Results Screen
- User is informed whether they won or lost
- User has the ability to start over with a button

![image](https://github.com/laskinner/js-hangman/assets/1858258/a7710c9a-faa7-4d91-9ca0-2dc8d57a01c2)


## Future features
- Two player mode
  - Each user has the opportunity to provide a word in the UI for their opponent to guess
  - Score tracking would be a requirement
- Categories
  - This would include things like geographies, science, etc.
- Easy, Medium, hard
- Score counter
- Reset scores

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

# Notes about the words array
It was first attempted to import a file containing the array of words to keep the code cleaner, but the import was causing problems, so to simplify the decision was made to just include the array directly in the made script.js file. In the future, it would be worth the effort to separete the word bank out into a words.js file, rather than hard-coding them into the script.js itself. This would provide make future developments cleaner and less prone to error, including things like two-player mode, requiring user-provided words, as well as categories and difficultly levels.

# Attribution
[Favicon used from Favicon.cc](https://www.favicon.cc/?action=icon&file_id=39774)
Used [chatgpt]([url](https://openai.com/)) to help with the ASCII hangman states and to generate an array of 100 words with 5 - 15 characters
