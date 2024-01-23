//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

console.log(language.replace("JavaScript" , "js").toUpperCase("js"));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

let firstInitial = language[0];
let secondInital = language[4];

    let sentence = "The abbreviation for " + language + " is " + firstInitial + secondInital + ".";

console.log(sentence);


//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet);

    console.log(alphabet.slice(8)

        .replace("jklmnopqrst" , "")

            .toUpperCase(alphabet)

                .replace("VWXYZ" , ""));

alphabet = alphabet.slice(8).toUpperCase().replace("JKLMNOPQRST" , "").replace("VWXYZ" , "");

console.log(alphabet);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
    console.log(notTitleCase);

        console.log(notTitleCase.replace("t" , "T")
            .replace("c" , "C"));

                notTitleCase =  notTitleCase.replace("t" , "T").replace("c" , "C");

                    console.log(notTitleCase);