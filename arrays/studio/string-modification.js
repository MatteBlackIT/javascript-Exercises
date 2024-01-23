const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//console.log(str.slice(0, 3));                 //Lau
    //console.log(str + str.slice(0, 3));
//let newStr = (str + str.slice(0, 3));        //LaunchCodeLau

//console.log(newStr);
 //   console.log(newStr.slice(3, 10) + str.slice(0, 3));

//let finalStr = (newStr.slice(3, 10) + str.slice(0, 3));
    //console.log(finalStr);                               //nchCodeLau
//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`Here is my solution ---> ${finalStr}! <--- The string is ${finalStr.length} characters long.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = input.question("Please select a number of characters to relocate. ")

if (numOfLetters < str.length) {
        str.slice(numOfLetters)
                      //console.log(str.slice(numOfLetters));
let userStr = str + str.slice(0, numOfLetters);
    console.log(userStr.slice(numOfLetters));

 } else if (numOfLetters >= str.length || isNaN) {
    console.log(`Don't be ridiculous. Either there is not that many characters in ${str},\nor you chose a letter you goof. Pick a number 1 - ${str.length -1}!\nDefaulting to 3\n-----------------------------------------------------`);
let defaultNum = 3
  
let userStr = str + str.slice(0, numOfLetters);
    console.log(str.slice(3) + userStr.slice(0, defaultNum));

}

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
