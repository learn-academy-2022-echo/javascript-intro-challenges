// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var item = 50 
if (item <=100) {
    console.log("in budget") 
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = "yes"
if (hungry === "yes") {
    console.log("eat food");
    } else {
    console.log("keep coding"); 
}

// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

var trafficLight = "green"
if (trafficLight === "green") {
    console.log("go");
    } else if (trafficLight === "yellow") {
        console.log("slow down"); }
        else if (trafficLight === "red") {
            console.log("stop");
        }
    

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

var number1 = 50
var number2 = 30
 if (number1 > number2) {
    console.log(number1);
  } else if (number1 === number2) {
    console.log("the numbers are the same");
  } else if (number2 > number1) {
    console.log(number2)
  }
 

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var number = 10
if (number === 0) {
        console.log("the number is zero");
    } else if (number % 2 ===1) {
        console.log("odd number");
    } else if (number % 2 === 0) {
        console.log("even number")
}

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

var grade = 100
if (grade === 100) {
    console.log("perfect score");
    } else if (grade === 0) {
        console.log("no grade avaliable");
    } else if (grade >= 90 && grade < 100 ) {
        console.log("A");
    } else if (grade >= 80 && grade < 90) {
        console.log("B");
    } else if (grade >= 70 && grade < 80) {
        console.log("C");
    } else if (grade >= 60 && grade < 70) {
        console.log("D");
     } else {
        console.log("F"); 
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

var statement = undefined
if (typeof statement === "string" ) {
    console.log("string");
    } else if (typeof statement === "number") {
        console.log("number");
    } else if (typeof statement === "boolean") {
        console.log("boolean");
    } else if (typeof statement === "undefined") {
        console.log("undefined variable");
}

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

var password = "asfemwao"
if (password.length >= 12 && password.includes("!")) {
    console.log("That is a mighty strong password!");
    } else if (password.length >= 8 || password.includes("!")) {
        console.log("That password is strong enough");
    } else {
        console.log("That is not a valid password.");
}