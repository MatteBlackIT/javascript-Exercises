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
   AstronautID: 1,
   move: randomSelection(baseSteps),
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   AstronautID: 2,
   move: randomSelection(baseSteps),
};

let spaceChimp = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: randomSelection(baseSteps),

};

let dog = {
   name: "Leroy",
   species: "Beagal",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: randomSelection(baseSteps),
};

   thing = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: randomSelection(baseSteps)
};


let contestantArray = [];
contestantArray.push(salamander, spaceChimp, superChimpOne, thing, dog);

contestantArray.forEach(animal => {
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.\n`);
});

function fitnessTest(contestants){
   let results = [], numSteps, turns;
   for (let i = 0; i < contestants.length; i++){
       numSteps = 0;
       turns = 0;
       while(numSteps < 20){
       numSteps += contestants[i].move();
       turns++;
       }
       results.push(`${contestants[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
  }

  console.log(fitnessTest(results));

// After you have created the other object literals, add the astronautID property to each one.

// Create an contestantArray to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!