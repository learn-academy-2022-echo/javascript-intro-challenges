// // Create a for loop that logs each number from 1 - 20.
// for (let i = 0; i < 21; i++) {
//     console.log(i);
//   }

// // // Create a for loop that logs every other number from 1 - 20.
// var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for(let i = 0; i < number.length; i++){
//     if (number[i] % 2 !== 0) {
//         console.log (number[i])
//     }
// }

// // // OR THIS IS HOW YOU CAN ALSO ANSWER: 
// for(let i =1; i <21; i = i + 2){
//     console.log(i);
// }

// // Create a for loop that logs the result of each number from 1 - 20 tripled.
// // for(let i = 0; i < number.length; i++){
// //     console.log(number[i] * 3)
// // }

// // // Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// // // Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for(let i = 0; i < number.length; i++){
//         if (number[i] % 2 !== 0) {
//             console.log ("ODD")
//         } else if(number[i] % 2 === 0) {
//             console.log(number[i])
//         }
//     }

// Consider this variable:

// const nums = [3, 57, -9, 20, 67];

// Create the code that will log the largest number from the array.
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 67) {
//       console.log(nums[i]);
//     }
//   }
// // Create the code that will log the smallest number from the array.
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === -9) {
//       console.log(nums[i]);
//     }
//   }

// Create the code that will log the remainder of each number when divided by 2.

// for (let i = 0; i < nums.length; i++) {
//     console.log(nums[i] % 2) 
// }

// // Expected output: 1, 1, -1, 0, 1

// // Consider this variable:

// const myString = "learn student"
// // var number = 0
// // Create the code that will log the number of times the letter "e" occurs in the string.
// // console.log(myString.split("e").length - 1)
// for(let i = 0; i < number.length; i++){
//         if (number[i] % 2 !== 0) {
//             console.log ("ODD")
//         } else if(number[i] % 2 === 0) {
//             console.log(number[i])
//         }
//     }
// FOR LOOP way to answer the question

// for(let i = 0; i < myString.length; i++) {
//     // console.log(myString [i].includes("e"))} {
//     if(myString[i].includes("e")) {
//         console.log(myString [i])
//         number = number + 1
//     } 
// }
// console.log(number)

// Create the code that will log every other character in the string.

const myString = "learn student"

for(let i = 0; i< myString.length; i = i + 2){
    console.log(myString[i])
}

// STRETCH Challenges
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc