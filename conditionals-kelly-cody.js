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
