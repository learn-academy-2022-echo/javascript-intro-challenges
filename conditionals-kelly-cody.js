// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 78
if(item <= 100){
    console.log("in budget");
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = true
if(hungry){
    console.log("eat food");
} else {
    console.log("keep coding");
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "green"
if(trafficLight === "green"){
    console.log("go");
} else if(trafficLight === "yellow"){
    console.log("slow down");
} else if(trafficLight === "red"){
    console.log("stop");
} else {
    console.log("it's broken");
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var number1 = 555
var number2 = 20

if(number1 < number2){
    console.log(number2);
}else if (number1 > number2){
    console.log(number1);
}else if (number1 === number2){
    console.log("the numbers are the same");
} else {
    console.log("you broke it");
}
// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var number = 12

if (number === 0){
    console.log("zero");
}else if(number % 2 === 1){
    console.log("odd");
}else if (number % 2 === 0){
    console.log("even");
} else {
    console.log("stop breaking things");
}

//Stretch Challenges
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var grade = 89.5
if(grade === 100){
    console.log("perfect score");
} else if ( grade === 99 || grade >= 90 ){
    console.log("A");
} else if (grade === 89 || grade >= 80){
    console.log("B");
} else if (grade === 79 || grade >= 70){
    console.log("C");
} else if (grade === 69 || grade >= 60){
    console.log("D");
} else if (grade === 59 || grade >= 50){
    console.log("F");
} else if (grade === 0){
    console.log("no grade available");
} else {
    console.log("how do you keep breaking things?!");
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
// console.log(typeof "apple");
var data = 1007
if (typeof data === "number"){
    console.log(typeof data);
} else if (typeof data === "string"){
    console.log(typeof data);
} else if (typeof data === "boolean"){
    console.log(typeof data);
} else {
    console.log("i'm completely broken now");
}

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
var password = "mountain5!"
if (password.length >= 12 && password.includes("!")