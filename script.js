// // Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");
// Your formSubmission function (assuming it's defined elsewhere)
// const formSubmission = (document, list, pilot, copilot, fuelLevel, cargoMass) => {
//     // Your existing logic for form submission
//     // ...
// };

// Load event listener
window.addEventListener('load', () => {
    // Retrieve form element (adjust the selector as needed)
    // const myForm = document.querySelector('form[name=myForm]');

    // Attach formSubmission to form submission
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let pilotNameInput = document.querySelector("input[name=pilotName]").value;
        let copilotNameInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = parseFloat(document.querySelector("input[name=fuelLevel]").value);
        let cargoMassInput = parseFloat(document.querySelector("input[name=cargoMass]").value);
console.log("form listener triggered");
        // let faultyItems =
        // let list = parseFloat(document.querySelector("input[name=faultyItems]").value);
        const faultyItemsElement = document.getElementById("faultyItems");
        const launchStatusElement = document.getElementById("launchStatus");
        const parsedFaultyItems = JSON.parse(faultyItemsString);

        const faultyListElement = document.querySelector(".faulty-list");
        faultyListElement.classList.add("visible"); // Show the list
        faultyListElement.innerHTML = ""; // Clear existing content
        if (faultyItems.length > 0) {
            faultyItemsElement.style.visibility = "visible";
            launchStatusElement.innerHTML = "Shuttle not ready for launch";
            launchStatusElement.style.color = "red";
        } else {
            faultyItemsElement.style.visibility = "hidden";
            launchStatusElement.innerHTML = "Shuttle is ready for launch";
            launchStatusElement.style.color = "green";
        }

// Populate the list
// parsedFaultyItems.forEach((item) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = item;
//     faultyListElement.appendChild(listItem);
// });


// Prevent default form submission behavior
        // Retrieve input values (pilot, copilot, fuelLevel, cargoMass)
        // ...
        // Call your formSubmission function
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    });
});

// window.addEventListener("load", function() {

//     try {
//         // fetch planet data
//         const listedPlanets = myFetch(); 
//         // pick random planet
//         const selctedPlanet = pickPlanet(listedPlanets);
//         // add destination info to document
// addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    // catch (error) {
    //     // handle errorif fetch data fails
    //     console.error("Error fetching planets data:", error);
    // }

//     // TASK 3 Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
    });

//         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     // })
//         // add event listener for the button clicked
//     // button.addEventListener("click", function() {
//     //     let input = document.getElementById("language");
//     //     console.log(input.value);
    
    // formSubmit is button
    // let form = document.querySelector("form");
    // form.addEventListener("submit", function(event) {
    // let usernameInput = document.querySelector("input[name=username]");
    // let teamName = document.querySelector("input[name=team]");
    // if (usernameInput.value === "" || teamName.value === "") {
    //     alert("All fields are required!");
    // }
    // });

//     // **document.getElementById("testForm").addEventListener("FormSubmit", handleSubmit);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         let pilotNameInput = document.querySelector("input[name=pilotName]").value;
//         let copilotNameInput = document.querySelector("input[name=copilotName]").value;
//         let fuelLevelInput = parseFloat(document.querySelector("input[name=fuelLevel]").value);
//         let cargoMassInput = parseFloat(document.querySelector("input[name=cargoMass]").value);

//         // handling form submission
//         // Ensure that the formSubmission function is called when the form is submitted
//     formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass);
    
//     // const lauchStatus = document.getElementById("lauchStatus");
//     // const faultyItems = document.getElementById("faultyItems")
//     //     if (launchStatus.textContent !== "Shuttle is Ready for Launch") {
//     //     faultyItems.style.visibility = "visible";
//     //     } else {
//     //     faultyItems.style.visibility = "hidden";
//     //     }
//     // };
    
//         // updating launch status and faulty items visibility

//         const launchStatus = document.getElementById("launchStatus");
//         const faultyItems = document.getElementById("faultyItems");
      
//         if (launchStatus.textContent === "Shuttle is Ready for Launch") {
//           faultyItems.style.visibility = "hidden";
//         } else {
//           faultyItems.style.visibility = "visible";
//         }
//     };
      
//     // Adding event listener to the form
//     let form = document.querySelector("form");
//     form.addEventListener("submit", handleSubmit);
// });   

// Call other required helper functions here
    myFetch().then((planets) => {
    const randomPlanet = pickPlanet(planets);

});