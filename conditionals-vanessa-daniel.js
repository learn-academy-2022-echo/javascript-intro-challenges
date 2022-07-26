// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

    const apple = 1;

    if (apple <= 100) {
        console.log("in budget")
    }

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
    var hungry = true
    if (hungry) {
        console.log("Eat food")
    } else {
        console.log("Keep Coding")
    }
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
    let trafficLight = "yellow"

    if (trafficLight === "green") {
        console.log("go")
    } else if (trafficLight === "yellow") {
        console.log("slow down")
    } else {
        console.log("stop")
    }

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
    let num1 = 23
    let num2 = 13
    if(num1 > num2) {
        console.log(num1)
    } else if (num1 < num2) {
        console.log(num2) 
    } else if (num1 === num2) {
        console.log("the numbers are the same")
    }
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
    let numResult = 234

    if (numResult % 2 === 0 && numResult !== 0) {
        console.log(numResult + " is even")
    } else if (numResult % 2 !== 0 && numResult !== 0) {
        console.log(numResult + " is odd")
    } else if (numResult === 0) {
        console.log(numResult + " is 0")
    }
// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
    let gradePercent = 0
    if (gradePercent === 100) {
        console.log("PERFECT SCORE. A+++")
    } else if (gradePercent > 89) {
        console.log(gradePercent + "% = A")
    } else if (gradePercent > 79) {
        console.log(gradePercent + "% = B")
    } else if (gradePercent > 69) {
        console.log(gradePercent + "% = C")
    } else if (gradePercent > 59) {
        console.log(gradePercent + "% = D")
    } else if (gradePercent > 49) {
        console.log(gradePercent + "% = F")
    } else if (gradePercent === 0) {
        console.log("no grade available")
    }
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
let resultVar = true;
console.log(typeof(resultVar))

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

function passWordCheck(pass) {
    if (pass.length >= 12 && pass.includes("!")) {
        console.log("That is a mighty strong password!")
    } else if (pass.length >= 8 || pass.includes("!")) {
        console.log("That password is strong enough")
    } else {
        console.log("That is not a valid password")
    }
}

passWordCheck("12345678912")