const input = require('readline-sync')
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuel = 0
let astronauts = 0
let altitude = 0


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

let uFuel = input.question("Please enter a starting fuel level. "); //Starting Fuel load
  uFuel = Number(uFuel);
  
    while (!(uFuel >= 5000 && uFuel <= 30000)) {
        uFuel = input.question("Starting Fuel not accepted! Please enter a valid fuel level. (min. 5000 | max. 30000) ");
           uFuel = Number(uFuel);
  }


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
let uAstro = input.question("Please insert a number of Astronauts. (max 7) ")
    uAstro = Number(uAstro);
      while (!(uAstro <= 7 && uAstro > 0)) {
         uAstro = input.question ("ERROR! Please insert a valid mission amount. (max. 7) ")
            uAstro = Number(uAstro);
    
}
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (uFuel-100*uAstro >= 0) {
  altitude += 50;
  uFuel -= 100*uAstro;
    
  }
  console.log(altitude + " km");

//Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

let missionProgress = `The shuttle gained an altitude of ${altitude} km. `;

//If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”

if (altitude >= 2000) {
  missionProgress += "Oribit achieved";
    console.log(missionProgress);
}