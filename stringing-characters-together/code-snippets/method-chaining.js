//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
console.log(word.slice(4).toUpperCase());

//Experiment with other combinations (chains) of string methods.
console.log(word.replace("JavaScript" , "I have done part 1, 2, and 3 all in one day. I have learned a lot but I really would like to move on now, so this is my answer:) This was fun..."));