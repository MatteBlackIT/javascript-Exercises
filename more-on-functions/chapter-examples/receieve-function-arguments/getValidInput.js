const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

let isValidPassword = function(password) {
  // Password should start with the letter 'a'
  if (password[0] !== 'a','A' && password < 8) {
    return false;
  }
    return true;
};

console.log(getValidInput("Create password: ", isValidPassword));
// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
