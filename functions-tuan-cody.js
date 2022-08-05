// Write a function named marco that returns "polo".

// // create a function called marco and have it return polo
// const marco = () =>{
//     return "polo"
// }
// console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

//create a functon named greeting that takes in your name and returns "Welcome, <person's name here>!"

// const greeting = (yourName) => {
// return `Welcome, ${yourName}`
// }
// console.log(greeting("cody"));

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// create a function named oddOrEven that takes in a number called number
// const oddOrEven = (number) =>{
//     //if number is even, want it to return "this number is even"
//     if(number % 2 === 0){
//         return `${number} is even`
//     }
//     //if number is odd, want it to return "this number is odd"
//     else if(number % 2 !== 0){
//         return `${number} is odd`
//     }
// }
// console.log(oddOrEven(567891));

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

//create a function with the name triple that takes in a number and triples it
// const triple = (num1) => {
//     return (num1 * 3)
// }
// console.log(triple(3));
  
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

//create a function named multiply, takes 2 numbers as arguments and outputs them multiplied togehter

// const multiply = (num1, num2) =>{
//     return (num1 * num2)
// }
// console.log(multiply(5, 8));

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// create a function named divisibleBy to take a 2 numbers and see if they are evenly divisible by each other.
//const divisibleBy = (num1, num2) =>{
//if num1 is divisible by num2 output "num1 is divisible by num2"   
//     if (num1 % num2 === 0){
//         return `${num1} is evenly divisible by ${num2}`
// // if num1 is not divisible by num2 out put "num1 is not divisible by num2"
//     } else if (num1 % num2 !== 0){
//         return `${num1} is not divisible by ${num2}`
//     }
// }
// console.log(divisibleBy(33, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
//create a function named assignGrade to tell you what your grade is depending on your score.
// const assignGrade = (grade) =>{
// //if grade is 90 and above return with an A
//     if(grade >= 90){
//     return "A"
// //if grade is 80 and above return with B
// } else if (grade >= 80){
//     return "B"

// //if grade is 70 and above return with 
// } else if (grade >= 70){
//     return "C"
// //if grade is below 70 return "Do better!"
// } else{
//     return "Do better!"
// }
// }
// console.log(assignGrade(50))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
//create function name is longer to putput the longer string

// const isLonger = (string1, string2) => {
// // if first string > second string output first string
//     if(string1.length > string2.length){
//     return `${string1}`
// // if first string < second string output second string
// } else if (string1.length < string2.length){
//     return `${string2}`
// }}
// console.log(isLonger("stratosphere", "apple"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
//same as the one above but with numbers!
// const greaterNum = (num1, num2) => {

//         if(num1 > num2){
//         return `${num1}`

//     } else if (num1 < num2){
//         return `${num2}`
//     }}
//     console.log(greaterNum(34, 21))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
//create a function that outputs the input in all caps.
// const yelling = (string) => {
//     return(string.toUpperCase())
// }
// console.log(yelling("get on the ground!"))
