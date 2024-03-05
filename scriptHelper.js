// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 ///validation logic to check testInputs meets criteria return true if valid otherwise false
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}
 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    ///validate strings are not empty and numbers are valid using isNaN()
    if (!validateInput(pilot) || !validateInput(copilot) || !validateInput(fuelLevel) || !validateInput(cargoLevel)) {
        // If any input is invalid, display an error message to the user.
        alert("All fields are required. Please fill in valid information.");
        return;
    }
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch.`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch.`;

    if (fuel < 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
        document.getElementById("launchStatus").style.color = "red";
    } else if (cargo > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch.";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
        document.getElementById("launchStatus").style.color = "red";
    } else {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!";
        document.getElementById("launchStatus").style.color = "green";
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;