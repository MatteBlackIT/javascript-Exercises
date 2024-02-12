// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
const input = require('readline-sync');

function divide(numerator, denominator){
        if (denominator === 0){
       throw Error("divide by Zero(0) error.");
        } else {
    return numerator/denominator;
        }
};


const numerator = input.question("Enter a Numerator. ");
const denominator = input.question("Enter a Denominator. ");



try {
    const result = divide(numerator, denominator);
    console.log("Result:", result);
} catch (error) {
    // Handle the error if division by zero occurs
    console.log("Error:", error.message);
}