// // Create a for loop that logs each number from 1 - 20.
// for (let i = 1 ; i < 21 ; i++) {
    // console.log(i);
// }
// // Create a for loop that logs every other number from 1 - 20.
// for (let i = 1 ; i < 21 ; i += 2) {
//     console.log(i);
// }
// // Create a for loop that logs the result of each number from 1 - 20 tripled.
// // Create a for loop that logs each number from 1 - 20.
// for (let i = 1 ; i < 21 ; i++) {
//     console.log(i * 3);
// }
// // Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// for (let i = 1; i < 21; i++) {
//     if (i % 2 !== 0){
//         console.log("ODD");
//     } else if (i % 2 === 0) {
//         console.log(i);
//     } else {
//         console.log("you broke it");
//     }
// }
// // Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc


// Consider this variable:

// const nums = [3, 57, -9, 20, 67];
// // Create the code that will log the largest number from the array.
// const max = Math.max(...nums)
// console.log(max);
// // Create the code that will log the smallest number from the array.
// const min = Math.min(...nums)
// console.log(min);
// Create the code that will log the remainder of each number when divided by 2.
// for (let i = 0; i < nums.length; i++ ) {
//     console.log(nums[i] % 2);
// }
// // Expected output: 1, 1, -1, 0, 1


// Consider this variable:

// const myString = "learn student";
// Create the code that will log the number of times the letter "e" occurs in the string.
// var eCounter = 0
// for (let i = 0; i < myString.length; i++) {
//     if ( myString[i] === "e" ) {
//         console.log(eCounter++)
//     }
// }
// console.log(eCounter)

// Create the code that will log every other character in the string.
 
// for (let i = 1 ; i < myString.length ; i += 2){
//     console.log(myString[i])
// }

// STRETCH Challenges
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// for (let i = 5 ; i < 16 ; i++) {
//  if (i % 2 !== 0){
//         console.log(`${i} is ODD`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} is EVEN`);
//     } else {
//          console.log("you broke it");
//     } 
// }
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.

for (let i = 1 ; i < 101 ; i++) {
    if ( i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZ BUZZ")
    } else if ( i % 3 === 0) {
        console.log("FIZZ")
    } else if ( i % 5 === 0) {
        console.log("BUZZ")
    } else {console.log(i)}
} 

// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc
