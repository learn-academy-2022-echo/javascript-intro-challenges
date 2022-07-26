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
// make a function named divisibleBy
// take two numbers as arguments
// returns if first number is evenly divisible by second

const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}` 
    }
}
console.log(divisibleBy(10, 5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// create function named assignGrade 
// take number as argument
//if else blocks for number to letter assignment
// returns letter grade as string

const assignGrade = (num) => {
    if (num > 89) {
        return `${num} is a A` 
    } else if (num > 79) {
        return `${num} is a B`
    } else if (num > 69) {
        return `${num} is a C`
    } else if (num > 59) {
        return `${num} is a D`
    } else {
        return `${num} is an F`
    }
}
console.log(assignGrade(54))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// create function named isLonger
// take two strings as arguments
// return lognest string

const isLonger = (string1, string2) => {
    if (string1.length > string2.length) {
        return `${string1} has more letters`
    } else {
        return `${string2} has more letters`
    }
}
console.log(isLonger("bruh", "the"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
//write function named greater num
// take two numbers as arguemnts
//return whichever is greater

const greaterNum = (num1, num2) => {
    if(num1 > num2) {
        return `${num1} is the greater number!` 
    } else {
        return `${num2} is the greater number!`
    }
}
console.log(greaterNum(1, 2))
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
//write function named yelling
//take string as argument
//return string in uppercase

const yelling = (string) => string.toUpperCase()

console.log(yelling("bruh"))

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
/*
1.  Create a function named helloWorld
2.  takes language code string as argument
3.  return "Hello World" in respective language argument
4. else if blank, return hello world in english
*/

const helloWorld = (lang) => {
    if (lang === "de") {
        return "Hallo Welt"
    } else if (lang === "es") {
        return "Hola Mundo"
    } else if (lang === "ar") {
        return "مرحبا بالعالم"
    } else if (lang === "ko") {
        return "안녕하세요 세계"
    } else {
        return "Hello World"
    }
}

console.log(helloWorld("de"))
console.log(helloWorld("es"))
console.log(helloWorld("ar"))
console.log(helloWorld("ko"))
console.log(helloWorld())


// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
/*
1.  Create function named pluralizer
2.  Take number and singular noun as arguments
3.  Return the number and noun
    4. if number is > 1 return pluralized form of noun
*/

const pluralizer = (num, utensil) => {
    if (num === 1 && utensil[utensil.length - 1] === "s" && utensil !== "tongs") {
        return `${num} ${utensil.slice(0, -1)}`
    } else if (num > 1 && utensil === "knife") {
        return `${num} knives`
    } else if (num > 1 && utensil === "tongs") {
        return `${num} ${utensil}`
    } else if (num === 1) {
        return `${num} ${utensil}`
    } else {
        return `${num} ${utensil}s`
    }
}

console.log(pluralizer(2, "spoon"))
console.log(pluralizer(1, "forks"))
console.log(pluralizer(3, "knife"))
console.log(pluralizer(4, "spatula"))
console.log(pluralizer(1, "tongs"))


// pluralizer(5, "cat");
// // expected output: "5 cats"

// pluralizer(1, "dog");
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".