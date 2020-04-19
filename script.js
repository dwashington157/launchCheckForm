window.addEventListener("load", function() {
   let form = document.querySelector("form");
   

   form.addEventListener("submit", function(event) {
      event.preventDefault();
   let usernameInput = document.querySelector("input[name=pilotName]");
   let cargo = document.querySelector("input[name=cargoMass]");
   let fuel = document.querySelector("input[name=fuelLevel]");
   let coPilot = document.querySelector("input[name=copilotName]");
   let faultyItems = document.getElementById("faultyItems");
   let launch = document.getElementById("launchStatus");
   
      document.getElementById("pilotStatus").innerHTML = `Pilot ${usernameInput.value}`;
      document.getElementById("copilotStatus").innerHTML = `Co pilot ${coPilot.value}`;
      if (usernameInput.value === "" ||cargo.value === "" || fuel.value === "" ||coPilot.value === "" ) {
                 
         alert("All input is Required!");
      }else if(Number(usernameInput.value) || Number(coPilot.value)){
         alert("Pilot and Co-Pilot must be names. no numbers or special")
         
      } else if ( isNaN(Number(cargo.value))||  isNaN(Number(fuel.value))) {
         alert("Feild input requires numerical entry.");
         
      } else if ( fuel.value < 10000 || cargo.value > 10000){
         faultyItems.style.visibility = "Visible" ;
         launch.innerHTML = "Shuttle not ready for launch";
         launch.style.color = "red";
         if (fuel.value < 10000) {
             document.getElementById("fuelStatus").innerHTML = "Fuel too low for launch";
         }
         if (cargo.value > 10000) { 
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
         }        
      
      } else {
         launch.innerHTML = "Shuttle is ready for launch";
         launch.style.color = "green";
      }
      

      
   });

  




});

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
       return response.json();
   }).then(function(json) {
       let div = document.getElementById("missionTarget");
       div.innerHTML = `
           <h2>Mission Destination </h2>
           <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
           </ol>
        <img src="https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg" />
       `;
   });
});



