// DOM is loaded and ready
document.addEventListener("DOMContentLoaded", function (event) {

    // boolean to control while loop
    let yesNo = true;

    // Welcome user to the calculator
    alert("Welcome to the calculator!");

    // Prompt user for name
    const name = prompt("Please enter your name: ");

    // Display a message using the user's name
    document.getElementById("displayName").innerHTML = "Welcome " + name + "!";

    // Instructions on how to use the calculator generate
    document.getElementById("instructions").innerHTML = "Please enter two comma-separated numbers, then click the button to calculate: ";

    // loop will run until the return value of calc() is false
    while (yesNo === true) {
        yesNo = calc();

    }

    // while (inputNums().trim().toLowerCase() === "yes") {
    //     inputNums();
    // }

});

// Use a reducer function to add two numbers together 
function addNums(arr) {
    let sum = arr.reduce(function (num1, num2) {
        return num1 + num2;
    });
    console.log(sum);
    return sum;
}

async function calc() {
    // Dynamically generate user input as well as a submit button
    let numInput = document.createElement("INPUT");
    numInput.type = "text";
    numInput.placeholder = "e.g. 2,2";
    numInput.id = "userInput";
    document.body.appendChild(numInput);
    let addBtn = document.createElement("button");
    addBtn.innerText = "Calculate!";
    document.body.appendChild(addBtn);

    let numSum = 0;
    let yesNo = true;

    // When the button is clicked, we trim the whitespace, split each on comma, and cast to an integer in an array, and add the nums
    addBtn.addEventListener("click", function () {
        let nums = document.getElementById("userInput").value.trim();
        console.log(nums);
        let numsArr = nums.split(",").map(function (num) {
            return parseInt(num);
        });
        console.log(numsArr);
        numSum = addNums(numsArr); // add all the numbers in our array
        yesNo = askAgain(showRes(numSum)); // show result, and ask if user would like to try again

    });

    return yesNo;

}

function showRes(num) {
// Conditional: if the sum is greater than 10, we say that it is a big num, if less than, small num, if equal, equal
    let showResult = document.createElement("P");
    if (num > 10) {
        showResult.innerText = "The sum of your numbers is: " + num + ". That is a large number!";
    }
    else if (num < 10) {
        showResult.innerText = "The sum of your numbers is: " + num + ". That is a small number!";
    }
    else {
        showResult.innerText = "The sum of your numbers is: " + num + ". That is equal to 10";
    }
    document.body.appendChild(showResult);

    const cont = true;

    return cont;


}

function askAgain(cont) {
    // ask the user if they want to play again
    let yesNo = true;

    if (cont == true) {

        let ask = document.createElement("P");
        ask.innerText = "Would you like to try again?";
        document.body.appendChild(ask);
        let yesBtn = document.createElement("button");
        yesBtn.innerText = "Yes";
        document.body.appendChild(yesBtn);
        let noBtn = document.createElement("button");
        noBtn.innerText = "No";
        document.body.appendChild(noBtn);
        yesBtn.addEventListener("click", function () { // clicking on the yes button will tell the loop to go again
            yesNo = true;
            let newTry = document.createElement("P");
            newTry.innerText = "Enter two more numbers!";
            document.body.appendChild(newTry);
        });
        noBtn.addEventListener("click", function () { // clicking  on the no button will stop the program
            yesNo = false;
            let stop = document.createElement("P");
            stop.innerText = "Thank you for using the JavaScript calculator.";
            document.body.appendChild(stop);
        });
    }
    return yesNo;
}