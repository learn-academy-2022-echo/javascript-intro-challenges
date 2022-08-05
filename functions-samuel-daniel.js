// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
/*
1. create function named marco
    2. in function, return "polo" string
*/

const marco = () => "polo"

console.log(marco());

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

/*
1. create function named greeting
2. take a name as the argument
3. return "Welcome, <personname>!"
*/

const greeting = (name) => `Welcome ${name}!`

console.log(greeting("Daniel"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

/*
1. create function named oddOrEven
2. takes number argument
3. return if number is odd or even
*/

const oddOrEven = (num) => {
    if (num % 2 === 0) {
        return `${num} is EVEN`
    } else {
        return `${num} is ODD`
    }
}

console.log(oddOrEven(234))
console.log(oddOrEven(327))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
/*
1. create function named triple
2. takes number as argument
3. return number * 3
*/

const triple = (num) => num * 3

console.log(triple(3))
console.log(triple(2))
console.log(triple(1))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

/*
1. create function named multiply
2. takes two nums as arguments
3. return num1 * num2
*/

// function multiply(num1, num2) {
//     return num1 * num2
// }


const multiply = (num1, num2) => num1 * num2

console.log(multiply(1, 2))
console.log(multiply(2, 3))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat");
// // expected output: "5 cats"

// pluralizer(1, "dog");
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".