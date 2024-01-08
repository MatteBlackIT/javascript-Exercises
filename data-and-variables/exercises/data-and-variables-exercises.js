// Declare and assign the variables below
let shuttlename = 'Determination';
let shuttlespeed = 17500;
let distanceMars = 225000000;
let distanceMoon = 384400;
let Mpk = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof 'Determination');
console.log(typeof 17500);
console.log(typeof 225000000);
console.log(typeof 384400);
console.log(typeof 0.621);
// Calculate a space mission below
console.log(distanceMars * Mpk);
let milesToMars = distanceMars * Mpk;

console.log(distanceMars/shuttlespeed);
let hoursToMars = distanceMars / shuttlespeed;

console.log(hoursToMars/24);
let days = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(shuttlename + " will take " +  days + " days to reach Mars.")
// Calculate a trip to the moon below
console.log(distanceMoon * Mpk);
let milestoMoon = distanceMoon * Mpk;

console.log(distanceMoon / shuttlespeed);
let hoursToMoon = distanceMoon / shuttlespeed;

console.log(hoursToMoon / 24);
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below

console.log(shuttlename + " will take " + daysToMoon + " days to reach the Moon.");