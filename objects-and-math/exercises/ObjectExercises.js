function randomSelection(baseSteps){
   let steps = Math.floor(Math.random()*baseSteps.length);
   return baseSteps[steps];
 }

let baseSteps = [1,2,3,4,5,6,7,8,9,10];
   for (let i = 0; i<10; i++) {}

//Contestants

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function(){return Math.floor(Math.random()*11)},
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function(){return Math.floor(Math.random()*11)},
};

let spaceChimp = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function(){return Math.floor(Math.random()*11)},

};

let dog = {
   name: "Leroy",
   species: "Beagal",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function(){return Math.floor(Math.random()*11)},
};

   thing = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function(){return Math.floor(Math.random()*11)}
};


let spaceChallengers = [];
spaceChallengers.push(salamander, spaceChimp, superChimpOne, thing, dog);

spaceChallengers.forEach(animal => {
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.\n`);
});



// After you have created the other object literals, add the astronautID property to each one.

// Create an contestantArray to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

function fitnessTest(arr) {
   let results = [], numSteps, turns;
      for (let i=0; i<arr.length; i++) {
          numSteps = 0
          turns = 0
      while (numSteps < 20) {
         numSteps += arr[i].move();
         turns++
      }
      
       
    results.push((`${arr[i].name} took ${turns} turn(s) to take 20 steps.`));
   }
return results
};

console.log(fitnessTest(spaceChallengers));

