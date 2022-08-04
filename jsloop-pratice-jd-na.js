// Q1. Create a for loop that logs each number from 1 - 20.

var firstLoop = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let index = 0; index < 20 ; index = index + 1){
    console.log(firstLoop[index])
}
// Q2. Create a for loop that logs every other number from 1 - 20.
var firstLoop = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let index = 0; index < 20 ; index = index + 2){
    console.log(firstLoop[index])
}

// Q3. Create a for loop that logs the result of each number from 1 - 20 tripled.
var firstLoop = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let index = 0; index < 20 ; index = index + 2){
    console.log(firstLoop[index]*3)
}

// Q4. Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD". Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
var firstLoop = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let index = 0; index < 20 ; index = index + 1){
    if(firstLoop[index] % 2 !== 0){
        console.log("ODD")
    } else {
        console.log(firstLoop[index])
    }
}

// Q5. Create the code that will log the largest number from the array.
const nums = [3, 57, -9, 20, 67];
// nums.sort((a, b) => a-b)
// console.log(nums)
console.log(Math.max.apply(Math, nums))

////////////

// Q6. Create the code that will log the smallest number from the array.
console.log(Math.min.apply(Math, nums))

// Q7. Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
for(let index = 0; index < 5 ; index = index + 1){
    console.log([index] % 2)
}

// Q8. ???????????????????? Create the code that will log the number of times the letter "e" occurs in the string.
const myString = "learn student";
console.log((myString.match(/e/g) || []).length)



// Q9. Create the code that will log every other character in the string.
for(let index = 0; index < 13 ; index = index + 2){
    console.log(myString[index])
}

// Q10. Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even. Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

const arr = [5,6,7,8,9,10,11,12,13,14,15]
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] % 2 !== 0){
        console.log(`${arr[i]} is odd`)
    } else if (arr[i] % 2 === 0 ){
        console.log(`${arr[i]} is even`)
    }
    else {

    }
    } 

// Q11. Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz. Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc

// const fizzThing = Array.from(Array(101).keys())
//   console.log(fizzThing)

const fizzThing = Array.from({length: 100}, (_, i) => i + 1)
for(let i = 0 ; i < fizzThing.length ; i++){
    if(fizzThing[i] % 3 === 0 && fizzThing[i] % 5 === 0){
        console.log("Fizzbuzz")
    } else if (fizzThing[i] % 3 === 0){
            console.log("Fizz")
        } else if (fizzThing[i] % 5 === 0 ){
            console.log("Buzz")
        } else {
            console.log(fizzThing[i])
        }
    
}




