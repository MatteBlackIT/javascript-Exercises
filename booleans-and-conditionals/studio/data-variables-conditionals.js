// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount + averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 1;
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount > 7) preparedForLiftOff = false;
// add logic below to verify all astronauts are ready
if(astronautStatus !== "ready") preparedForLiftOff = false;
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg >= maximumMassLimit) preparedForLiftOff = false;
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) preparedForLiftOff = false;
// add logic below to verify the fuel level is at 100%
if(fuelLevel !== 1) preparedForLiftOff = false;
// add logic below to verify the weather status is clear
if(weatherStatus !== "clear") preparedForLiftOff = false;

// Verify shuttle launch can proceed based on above conditions
console.log(`All systems are a go! Initiating space shuttle launch sequence. 
---------------------------------------------------------------
Date: ${date}
Time: ${time}
Astronaut Count: ${astronautCount}
Crew Mass: ${crewMassKg} kg
Fuel Mass: ${fuelMassKg} kg
Shuttle Mass: ${shuttleMassKg} kg
Total Mass: ${totalMassKg} kg
Fuel Temperature: ${fuelTempCelsius} Â°C
Weather Status: ${weatherStatus}
---------------------------------------------------------------
`);
if(preparedForLiftOff === false){
    console.log("Conditions for launch do not meet requirements.\nMission aborted!");
} else {
    console.log("Have a safe trip astronauts!");
}