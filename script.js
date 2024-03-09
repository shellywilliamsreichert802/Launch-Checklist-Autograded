// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // TASK 3 Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
        // add event listener for the button clicked
    // button.addEventListener("click", function() {
    //     let input = document.getElementById("language");
    //     console.log(input.value);
    
    // formSubmit is button
    // let form = document.querySelector("form");
    // form.addEventListener("submit", function(event) {
    // let usernameInput = document.querySelector("input[name=username]");
    // let teamName = document.querySelector("input[name=team]");
    // if (usernameInput.value === "" || teamName.value === "") {
    //     alert("All fields are required!");
    // }
    // });
    document.getElementById("testForm").addEventListener("FormSubmit", handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();
        let pilotNameInput = document.querySelector("input[name=pilotName]").value;
        let copilotNameInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = parseFloat(document.querySelector("input[name=fuelLevel]").value);
        let cargoMassInput = parseFloat(document.querySelector("input[name=cargoMass]").value);
        
        const launchStatus = document.getElementById("launchStatus");
        const faultyItems = document.getElementById("faultyItems");
      
        if (launchStatus.textContent === "Shuttle is Ready for Launch") {
          faultyItems.style.visibility = "hidden";
        } else {
          faultyItems.style.visibility = "visible";
        }
      
      // Ensure that the formSubmission function is called when the form is submitted
        const form = document.querySelector("form");
        form.addEventListener("submit", handleSubmit);

// Call other required helper functions here
        myFetch().then((planets) => {
        const randomPlanet = pickPlanet(planets);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    });
});