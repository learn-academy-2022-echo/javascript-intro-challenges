// // Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
} 
console.log(marco())

console.log("=====polo")

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (yourName) => {
    return `Welcome ${yourName}`
}
console.log(greeting("catherine"))
console.log(greeting("francisco"))

console.log("=====welcome")
// // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (numbers) => {
    if(numbers % 2) {
        return `odd`
    } else
    return "even"
} 
console.log(oddOrEven(1))
console.log(oddOrEven(2))
console.log(oddOrEven(3))
console.log(oddOrEven(4))

console.log("=====oddEven")

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (numbers) =>{
    return `${numbers * 3}`
}
console.log(triple(1))
console.log(triple(2))
console.log(triple(3))

console.log("=====triple")

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (firstNum, secondNum) =>{
    return `${firstNum * secondNum}`
} 
console.log(multiply(6, 7))

console.log("=====multiply")
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (firstNum, secondNum) => {
    if(firstNum % secondNum === 0) {
        return `${firstNum} is evenly divisible by ${secondNum}`
    }else
        return "Has a remainder"
}
console.log(divisibleBy(10, 5))
console.log(divisibleBy(12, 5))

console.log("=====divide")

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (numberScore) => {
    if(numberScore === 100){
        return "A"
    }else if(numberScore >= 80){
        return "B"
    }else if(numberScore < 80){
        return "C"
    }  
}
console.log(assignGrade(100))
console.log(assignGrade(99))
console.log(assignGrade(79))

console.log("=====score")

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (stringOne, stringTwo) => {
    if (stringOne.length > stringTwo.length){
        return stringOne
    }
    return stringTwo
}
console.log(isLonger("yellow", "red"))
console.log(isLonger("pink", "purple"))

console.log("=====longer")
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (numberOne, numberTwo) => {
    if (numberOne > numberTwo) {
        return numberOne
    }
    return numberTwo
}
console.log(greaterNum(789, 67))
console.log(greaterNum(999, 998))

console.log("=====higher")
// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (textArg) => {
    return (textArg.toUpperCase())
}
console.log(yelling("low"))

console.log("=====UpperCase")

// STRETCH Challenges
// The World Translator
// (a) Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// (b) Have your function default to returning English.

const helloWorld = (languageCode) => {
    if (languageCode === "es") {
        return "Hola Mundo!" 
    } 
    if (languageCode === "de") {
        return "Hallo Welt!"
    } 
    if (languageCode === "it") {
        return "Ciao mondo!"
    }   
    if (languageCode === "fr") {
        return "Bonjour le monde!"
    }  
    return "Hello World!"
}
console.log(helloWorld("de"))
console.log(helloWorld("fr"))
console.log(helloWorld("it"))
console.log(helloWorld("es"))
console.log(helloWorld("en"))
console.log(helloWorld("tg"))

console.log("=====helloWorld=====")

// The Pluralizer
// (a) Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.

const pluralizer = (number, noun) => {
const lastLetter = noun[noun.length - 1]
const dropLetter = noun.slice(0, -1)
    if (number == 1) {
    return number + " " + noun   
    } else if (lastLetter == "s" || lastLetter === "x" || lastLetter == "z" || lastLetter == "o" || lastLetter == "h") {
        return (number + " " + noun + "es")
    } else if (lastLetter === "y") {
        return (number + " " + dropLetter + "ies")
    } else
        return (number + " " + noun + "s") 
}
console.log(pluralizer(2, "bus"))
console.log(pluralizer(3, "truss"))
console.log(pluralizer(3, "brush"))
console.log(pluralizer(3, "lunch"))
console.log(pluralizer(3, "box"))
console.log(pluralizer(3, "blitz"))
console.log(pluralizer(0, "truss"))
console.log(pluralizer(2, "city"))
console.log(pluralizer(3, "drum"))
console.log(pluralizer(4, "tomato"))
