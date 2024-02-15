//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, fightingStyle){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.fightingStyle = fightingStyle
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';
fox.fightingStyle = 'Boxing';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.