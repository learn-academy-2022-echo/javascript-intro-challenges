// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

    // const marco = () => {
    //     return console.log("polo")
    // }
    // marco()

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

    // const greeting = (name) => {
    //     return `Welcome, ${name}!`
    // }
    // console.log(greeting("Holden"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

    // const oddOrEven = (number) => {
    //     if (number % 2 === 0) {
    //         return "even"
    //     } else {
    //         return "odd"
    //     }
    // }
    // console.log(oddOrEven(100))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

    // const triple = (num) => {
    //     return num  * 3;
    // }
    // console.log(triple(9));

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

    // const multiply = (num1, num2) => {
    //     return num1 * num2;
    // }

    // console.log(multiply(10, 2))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

    // const divisibleBy = (num1, num2) => {
    //     if(num1 % 5 === 0) {
    //         return `${num1} is evenly divisible by ${num2}`
    //     }
    // }
    // console.log(divisibleBy(10,5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

    // const assignGrade = (numScore) => {
    //     if(numScore === 100) {
    //         return "A!"
    //     } else if(numScore <  70) {
    //         return "F :("
    //     } else {
    //         return "It doesnt matter, its pass or fail"
    //     }
    // }

    // console.log(assignGrade(60))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

    // const isLonger = (str1, str2) => {
    //     if(str1.length > str2.length) {
    //         return str1
    //     } else {
    //         return str2
    //     }
    // }

    // console.log(isLonger("Happy hat", "Sad Hat"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

    // const greaterNum = (num1, num2) => {
    //     if(num1 > num2) {
    //         return num1
    //     } else {
    //         return num2
    //     }
    // }

    // console.log(greaterNum(45, 68))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

    // const yelling = (str) => {
    //     return str.toUpperCase()
    // }

    // console.log(yelling("hey"))

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.

// function named helloWorld
// 5 variables of languages
// returns string "Hello world!" in a given languages
//     when you pass the language var into the function, returns hello world in that language

var es = "Hola el Mundo"
var en = "Hello World!"
var fr = "Bonjour le Monde!"
var de = "Hallo Welt!"
var it = "Ciao Mondo!"

var language = [es, en, fr, de, it]

const helloWorld = (lang) => { // creates var lang
    for (let i = 0; i < language.length; i++) { // creates iteration counter, if i is less than 5, add 1 to i, and loop until false
        if (lang === language[i]) { // if lang is strictly equal element in language array
            return language[i] // log the element and exit the function THIS IS THE PROBLEM LINE (Possibly a quirk of language from console logging loops)
         } else { // if line 119 is false, do this
            return "Not recognized, please choose es, en, fr, de, or it" // return edge case
         }
    }
}
console.log(helloWorld(es))

    // const helloWorld = (lang) => {

    //     let i = 0
    //     while(lang === language[i]) {
    //         console.log(language[i])
    //         break;
    //     }
    //     return language[i]
    // }

    // console.log(helloWorld())

// const helloWorld = (lang) => {
//     if (lang === es) {
//         return es
//     } else if (lang === en) {
//         return en
//     } else if (lang === fr) {
//         return fr
//     } else if (lang === de) {
//         return de
//     } else if (lang === it) {
//         return it
//     } else {
//         return "Not recognized, please choose es, en, fr, de, or it"
//     }
// }
// console.log(helloWorld(fr))






// (b) Have your function default to returning English.

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat");
// // expected output: "5 cats"

// pluralizer(1, "dog");
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".