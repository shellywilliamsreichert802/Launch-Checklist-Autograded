// Write your helper functions here!

// require('cross-fetch/polyfill');

//  TASK 3
 /**
 * Fetches planetary data from the provided URL.
 * /@ returns {Promise} - The promise containing the fetched JSON data.
 */
 async function myFetch() {
    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    
    if (!response.ok) {
        console.error("Failed to fetch planets data");
    return [];
    }
    const planetsReturned = await response.json();
    return planetsReturned;
  };

// function pickPlanet(planets) {
const pickPlanet = (planets) => {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
};

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
const addDestinationInfo = (document, name, diameter, star, distance, moons, imageUrl) => {

// TASK 3 Here is the HTML formatting for our mission target div.
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
     // Here is the HTML formatting for our mission target div.
  const missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">`;

}
 
// function validateInput(testInput) {
const validateInput = (testInput) => {
    if (testInput === "") {
        return "Empty";
      } else if (!isNaN(testInput)) {
        return "Is a Number";
      } else {
        return "Not a Number";
      }
 };
 
// function formSubmission
const formSubmission = (document, list, pilot, copilot, fuelLevel, cargoMass) => {
if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
    alert("All fields are required!");
    return;
}
    
if (isNaN(fuelLevel) || isNaN(cargoMass)) {
    alert("Please enter valid information for all fields!");
    return;
}
    // formSubmit is button
    // let form = document.querySelector("form");
    // form.addEventListener("submit", function(event) {
    // let usernameInput = document.querySelector("input[name=username]");
    // let teamName = document.querySelector("input[name=team]");
    // if (usernameInput.value === "" || teamName.value === "") {
    //     alert("All fields are required!");
    // }
    // });

    const pilotValidation = validateInput(pilot);
    console.log(pilotValidation);
    const copilotValidation = validateInput(copilot);
    const fuelLevelValidation = validateInput(fuelLevel);
    const cargoMassValidation = validateInput(cargoMass);
//   if (!validateInput(pilot) || !validateInput(copilot) || !validateInput(fuelLevel) || !validateInput(cargoLevel)) {
//     // If any input is invalid, display an error message to the user.
//     alert("All fields are required. Please fill in valid information.");
//     return;
    // if (fuelLevelValidation !== "Is a Number" || cargoMassValidation !== "Is a Number") {
    //     throw new Error("Please enter valid information for all fields!");
    // }
    // if (pilotValidation === "Empty" || copilotValidation === "Empty" || fuelLevelValidation === "Empty" || cargoMassValidation === "Empty") {
    //     alert("All fields are required!");
    //     return;
    // } else if (pilotValidation === "Not a Number" || copilotValidation === "Not a Number" || fuelLevelValidation === "Not a Number" || cargoMassValidation === "Not a Number") {
    //     alert("Please enter valid information for all fields!");
    //     return;
    // }
    
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = 'red';
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }

    if (cargoMass > 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = 'red';
    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }
    // Shuttle should be ready for launch, enough fuel and cargo
    if (fuelLevel >= 10000 && cargoMass <= 10000) {
        document.getElementById("faultyItems").style.visibility.push = "hidden";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = 'green';
    } else {
        // At least one condition is not met, so show the faulty items
        document.getElementById("faultyItems").style.visibility.push = "visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = 'red';
      }
    };
    
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;