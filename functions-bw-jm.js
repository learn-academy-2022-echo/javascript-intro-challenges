// Write a function named marco that returns "polo".

// create a function name marco, create a return that output polo

const marco = () => {
    return "Polo"
} 
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// create a function named greeting, parameter take the name, return output: "Welcome, <person's name here>!"

const greeting = (name) => {
    return `Welcome, ${name}`
}
console.log(greeting ("Joyce")) 
console.log(greeting ("Brook"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// function will named oddOrEven, parameter is a number. We will use conditional statements to return output: number is odd or even.

const oddOrEven = (number) => {
    if(number % 2 === 0){
        return `${number} is even`
    } else if(number % 2 === 1) {
        return `${number} is odd`
    }
} 

console.log(oddOrEven(2))
console.log(oddOrEven(3))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// function name:triple
// parameter: number
// output: *3
// return: the number multiplied by 3

const triple = (number) => {
    return number *3 
}
console.log(triple(2))
console.log(triple(10))


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

//function name: multiply
// parameter: numberOne, numberTwo
// output: numberOne * number Two
// return: the two number * together

const multiply = (numberOne, numberTwo) => {
    return numberOne * numberTwo
}
 console.log(multiply(5,4))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//function name: divisibleBy 
// parameter: numberOne, numberTwo
// output: numberOne is evenely / by number Two
// conditional statment: 

const divisibleBy = (numberOne, numberTwo) => {
    if(numberOne / numberTwo === 1){
        return `${numberOne} is evenly divisible by ${numberTwo}`
    } else if(numberOne / numberTwo != 1) {
        return `${numberOne} is not evenly divisible by ${numberTwo}`
    }
}
 console.log(divisibleBy(20,17))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.


//function name: assignGrade 
// parameter: numberScore
// output: 
// conditional statment: 


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// function expression name: isLonger
// parameter: myDog, myPuppy
// return: the string with the most characters in string 

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

