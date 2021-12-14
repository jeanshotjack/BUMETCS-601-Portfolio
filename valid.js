// Create constants for all the elements we need to use in validation 
const form  = document.getElementsByTagName("form")[0];
const firstName = document.getElementById("firstName");
const fnError = document.querySelector("#firstName + div.error");
const lastName = document.getElementById("lastName");
const lnError = document.querySelector("#lastName + div.error");
const facil = document.getElementById("facilitator");
const facilError = document.querySelector("#facilitator + div.error");

// DOM is loaded and ready
document.addEventListener("DOMContentLoaded", function () {
    
    // Listen for invalid input in our facilitator field - if valid we remove the erorr and change back to normal CSS, if invalid we show an error
    facil.addEventListener("input", function() {
        if (facil.validity.valid) {
            facilError.innerText = "";
            facilError.className = "error";
        }
        else {
            showFacilError();
        }
    });

    // Listen for invalid input in our firstName field - if valid we remove the erorr and change back to normal CSS, if invalid we show an error
    firstName.addEventListener("input", function() {
        if (firstName.validity.valid) {
            fnError.innerText = "";
            fnError.className = "error";
        }
        else {
            showNameError();
        }
    });

    // Listen for invalid input in our lastName field - if valid we remove the erorr and change back to normal CSS, if invalid we show an error
    lastName.addEventListener("input", function() {
        if (lastName.validity.valid) {
            lnError.innerText = "";
            lnError.className = "error";
        }
        else {
            showNameError();
        }
    });

    // If our inputs are valid, we can submit.
    // If they are not, we show an error and stop the form from submitting by cancelling the event
    form.addEventListener("submit", function(event) {
      
        if(!facil.validity.valid) {
          showFacilError();
          event.preventDefault();
        }
        else if (!firstName.validity.valid || !lastName.validity.valid) {
            showNameError();
            event.preventDefault();
        }
      });

      // Event listeners for radio buttons to change target (new tab or same tab) for form POST method on checked
      document.getElementById("newPage").addEventListener("click", function() {
          form.setAttribute("target", "_blank");
      });
      document.getElementById("samePage").addEventListener("click", function() {
        form.setAttribute("target", "");
    });
});

// A function to display a custom error for invalid facil name input
function showFacilError() {
    if (facil.validity.patternMismatch) {
        facilError.innerText = "The facilitator name thee hath't writ is not one of four on mine list";
    }
    facilError.className = "error active"; // change the classname to use the error active css

}

// A function to display a custom erorr for invalid first or last name input
function showNameError() {
    if (firstName.validity.patternMismatch) {
        fnError.innerText = "Thine input wilt beest at least two letters long and enwheel only letter characters.";
        fnError.className = "error active";
    }
    if (lastName.validity.patternMismatch) {
        lnError.innerText = "Thine input wilt beest at least two letters long and enwheel only letter characters.";
        lnError.className = "error active";
    }
    

}