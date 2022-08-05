// Write a function named marco that returns "polo".
// Paramter is lastname
const marco = (lastName) => {
    return `marco ${lastName}`
}
console.log(marco("polo"))

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// Parameter is name 
//
const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting("Luis"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// func oddOrEven
// Parameter is number
const oddOrEven = (number) => {
 if (number % 2 !== 0) {
    return `${number} is Odd`
 } else if (number % 2 !== 1 ) {
    return `${number} is Even`
 }

}
console.log(oddOrEven(7))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Input number, Output * 3
const triple = (number) => {
    return number * 3
}

console.log(triple(4))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// two parameters multiplied together

// const multiply = (firstNumber, secondNumber) => {
//   return firstNumber * secondNumber

// }
// console.log(multiply(5,3))



// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (firstNumber, secondNumber) => {
   if (firstNumber % secondNumber === 0) {
    return `${firstNumber} is evenly divisible by ${secondNumber}`
   } else if (firstNumber % secondNumber !== 0) {
     return `${firstNumber} is not evenly divisible by ${secondNumber}`
   }
}
console.log(divisibleBy(11,5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (score) => {
if (score <= 100 && score >= 90 ) {
    return "Your letter grade is A"
} else if (score <= 89 && score >= 80) {
    return "Your letter grade is B"
} else if (score <= 79 && score >= 70) {
    return "Your letter grade is C" 
} else if (score <= 69 && score >= 60) {
    return "Your letter grade is D"
} else {
    return "Your letter grade is F!"
}
    
}
console.log(assignGrade(30))



// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
 if (string1.length > string2.length) {
    return string1
 } else if (string1.length < string2.length) {
    return string2
 }

}
console.log(isLonger("Apple","Oranges"))



// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (bigNum,smallNum) => {
 if (bigNum > smallNum) {
    return bigNum
 } else if (bigNum < smallNum) {
    return smallNum
 }

}
console.log(greaterNum(50,20))




// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (words) => {
    return words.toUpperCase()
}
console.log(yelling("wordsss"))

// The World Translator

// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.
// one parameter that defines language
// special condition 
const helloWorld = (language = "en") => {
if (language === "en") {
    return "Hello World"
} else if (language === "es") {
    return "Hola mundo" 
} else if {

} else if {

} else if {

}

}
 


// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

// pluralizer(5, "cat");
// // expected output: "5 cats"

// pluralizer(1, "dog");
// // expected output: "1 dog"
// (b) Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".