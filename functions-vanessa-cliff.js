// // // good morning
// // // Write a function named marco that returns "polo".
// // function marco
// // input blank
// // output polo
//     const marco = () => {
//         return "polo";
//     }
//     console.log(marco())
// // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// // function greeting 
// // input name
// // output welcome, person's name here
// //     const greeting = (name) => {
// //         return `Welcome, ${name}!`
// //     }
// //         console.log(greeting("George"))
// // // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// // // function oddOrEven
// // // input number
// // // output odd/even
// //     const oddOrEven = (number) => {
// //         if (number % 2 === 0) {
// //             return "Even"
// //         } else {
// //             return "Odd"
// //         }
// //     }
// //     console.log(oddOrEven(4))

// // Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// // function triple
// // input number
// // output number * 3
//     const triple = (number) => {
//         return number * 3;
//     }
//         console.log(triple(9))
// // Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// // function multiply
// // input numberA, numberB
// // output numberA * numberB

//     const multiply = (numberA, numberB) => {
//         return numberA * numberB;
//     }
//         console.log(multiply(7, 3))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// function divisibleBy
// input numA, numB
// output numA is or isn't divisible by numB

    const divisibleBy = (numA, numB) => {
        if (numA % numB === 0) {
            return `${numA} is evenly divisible by ${numB}`
        } else if (numA % numB !== 0) {
            return `${numA} isn't evenly divisible by ${numB}`
        }
    }
        console.log(divisibleBy(53, 9))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// function assignGrade
// input numScore
// output letter grade
    const assignGrade = (numScore) => {
        if (numScore > 89 && numScore < 100) {
            return "A" 
        } else if (numScore > 79 && numScore < 90) {
            return "B"
        } else if (numScore > 69 && numScore < 80) {
            return "C"
        } else if (numScore > 59 && numScore < 70) {
            return "D"
        } else if (numScore > 49 && numScore < 60) {
            return "F"
        }
    }
        console.log(assignGrade(88))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// function
// input
// output
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// function
// input
// output
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// function
// input
// output

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.

// (b) Have your function default to returning English.
// function
// input
// output

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat");
// // expected output: "5 cats"

// pluralizer(1, "dog");
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// function
// input
// output