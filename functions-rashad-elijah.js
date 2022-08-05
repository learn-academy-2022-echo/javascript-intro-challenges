//1. write a function named marco that returns "polo"

const marco = () => {
    return "polo";
};

console.log(marco());

//2. write a function named greeting that takes a name as an argument and returns a welcome, (person's name here)

const greeting = (name) => {
    return `welcome ${name}!`
}

console.log(greeting("Austin"))

//3. write a function named odd or even, that takes a number as an argument and returns whether the number is odd or even

const oddOrEven = (number) => {
    if (oddOrEven %2 !==0){
        return "Odd"
    }else{
        return "Even"
    }
}

console.log(oddOrEven(3))

//4. write a function named tripple that takes a number as an argument and returns the result of that number multiplied by 3

const tripple = (number) => {
    return (number * 3)
}

console.log(tripple(3))


//5. write a function named multiplier that takes two numbers as arguments and returns the result of the numbers multiplied together

const multiply = (numberOne, numberTwo) => {
    return (numberOne * numberTwo)
}

console.log(multiply(2, 4))

//6. write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisbleBy (10,5) logs "10 is evenly divisble by 5"

const divisibleBy = (numberOne, numberTwo) => {
    if (numberOne % numberTwo !==3){
        return ("10 is easily divisible by 5")
    }
    
}

console.log(divisibleBy(10,5))

//7. write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score

var assignGrade = (score) => {
    if (score >= 90){
        return "A"
    }else if (score >= 80){
        return "B"
    }else if (score >= 70){
        return "C"
    }else if (score >= 60){
        return "D"
    }else {
        return "F"
    }
}

console.log(assignGrade(59))

//8. write a function name isLonger that takes two strings as arguments and returns the string that contains the most characters 

var isLonger = (stringOne, stringTwo) => {
    if (stringOne.length > stringTwo.length){
        return stringOne
    }else{
        return stringTwo
    }
}

console.log (isLonger("Functions are fun","Functions are crappy"))

//9. write a function named greaterNum that takes two numbers as arguments and returns which ever number is the greater number

var greaterNum = (numberOne, numberTwo) => {
    if (numberOne > numberTwo){
        return numberOne
    }else{
        return numberTwo
    }
}

console.log (greaterNum(33, 44))

//10. write a function named yelling that takes a string as an argument and return a string in all UPPERCASE letters

var yelling = (string) => {
    return string.toUpperCase()

}

console.log (yelling("boom"))

//11. The world translater. 
// (A) write a function named helloWorld that takes a language code (e.g "es", "de", "en") as an argument and returns "Hello World!" in the given language.
// (B) have your funtion default to return english.

var helloWorld = (language) => {
    if(language === "es"){
        return "Hola Mundo!"
    }else if (language === "de"){
        return "Hallo Welt!"
    }else if (language === "en"){
        return "Hello World!"
    }else if (language === "fr"){
        return "Bonjour Le Monde!"
    }
}

console.log (helloWorld("es"))



