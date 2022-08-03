//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 100;
if(item <=100){
    console.log("in budget");
}
node conditionals-joseph-namier.js
//Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false;
if (hungry === true){
    console.log("eat food");
} else {
    console.log("keep coding");
}
//Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = green;
var green = true;
var red = false;
if (trafficLight === green) {
    console.log("go");
} else if (trafficLight === red) {
    console.log("stop");
} else {
    console.log("slow down");
}
//Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var number1 = 50
var number2 = 25
console.log(`${number2} is less than ${number1}`);
//Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var two = even;
var even = true;
var one = odd;
var odd = false;
var zero = zero;

if (two === true){
console.log("even");
} else if (one === false){
console.log("odd");
} else {
    console.log("zero");
}
//Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
var GradeA = 100;
var GradeA = true;
var GradeF = 0;
var GradeF = false;

if(GradeA === true){
    console.log("perfect score")
} else if (GradeF === false){
    console.log("no grade available")
}
//Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

//Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.