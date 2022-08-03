// Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 99

if (item <= 100) {
    console.log("in budget")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true

if (hungry === true) {
    console.log("eat food")
} else {
    console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green" 

if (trafficLight === "green") {
    console.log("go")
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else if (trafficLight === "red") {
    console.log("stop")
} else {
    console.log("The light is broken")
}
    

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var aNumber = 50
var bNumber = 40

if (aNumber === bNumber) {
    console.log("the numbers are the same")
} else {
    console.log("not the same")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
if (aNumber % 2 === 0) {
    console.log("even")
} else if (aNumber % 2 !== 0) {
    console.log("odd")
} else {
    console.log("zero")
}
// STRETCH Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 80

if(grade === 100) {
    console.log("Perfect Score")
} else if(grade === 0) {
    console.log("no grade available")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var typedItem = "Hello"

if(typeof typedItem === 'boolean') {
    console.log("its a boolean")
} else if(typeof typedItem === 'number') {
    console.log("its a number")
} else if(typeof typedItem === 'string') {
    console.log("its a string")
}

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var testPassword = "mycatissocool!"

if(testPassword.length >= 12 && testPassword.includes("!")) {
    console.log("That is a mighty strong password!")
} else if(testPassword.length >= 8 || testPassword.includes("!")) {
    console.log("That password is strong enough.")
} else {
    console.log("That is not a valid password.")
}