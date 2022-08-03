//1. write a statement that takes a variable of item and logs the string in budget if a price is $100 or less
var money = 200 

if(money <= 100){
    console.log("In Budget!")
} else {
    console.log("To Much Money!!")
}

//2. write a statement that takes a variable of "hungry", and logs "eat food" if you're hungry, or "keep coding" if you are not hungry

var hungry = "No" 

if (hungry === "Yes"){
    console.log("eat food")
}else {
    console.log ("keep coding")
}

//3. write a statement that takes a varible of "traffic light", and logs "go", if its green. "slow" if its yellow. "stop" if its red.

var trafficLight = "green"
// // var trafficLight = "red"
// // var trafficLight = "yellow"

// if(trafficLight === "green"){
//     console.log("Go!")
// }else if(trafficLight === "yellow"){
//     console.log("Slow!")
// }else{
//     console.log("Stop!!!")
// }

if (trafficLight === "green"){
    console.log("Go!")
} else if (trafficLight === "yellow"){
    console.log("Slow!")
} else if (trafficLight === "red"){
    console.log("Stop!")
} else {
    console.log("Doesnt work here!")
}

//4. write a statement that takes two variables that are numbers and outputs a larger number. If the numbers are equal, then have the console say "the numbers are the same"

var numberOne = 2
var numberTwo = 4

// if((numberOne+numberTwo) == numberOne || numberTwo){
//     console.log("The numbers are the same")
// }else {
//     console.log("They are not the same")
// }

// console.log(numberOne+numberTwo)

if (numberOne * numberTwo === numberOne ){
    console.log("The same")
}else if (numberOne * numberTwo === numberTwo){
    console.log("The same")
}else {
    console.log("Not the same")
}

//5. write a statement that takes a varible of a number, and logs if its even, odd, or zero.

var one = 3

if(one % 2 === 0){
    console.log("Even Number")
}else if(one === 0){
    console.log("Zero")
}else{
    console.log("Odd Numer")
}

//6. write a statement that takes a varible of a grade percentage and log the letter grade for the percentage. if its 100% the console should say "perfect score", and if its zero percent the console should say "no grade available".

var grade = 0

if (grade === 100){
    console.log("Perfect Score!!");
} else if( grade >= 90 ){
    console.log("A!");
} else if (grade >= 80){
    console.log("B!");
} else if (grade >= 70){
    console.log("C!");
} else if (grade >= 60){
    console.log("D!");
} else if (grade >= 59){
    console.log("F!");
} else if(grade === 0){
    console.log ("No Grade Available")
}else{
    console.log("This grade does not exist")
}
