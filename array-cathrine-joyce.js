// Consider the variable:

var groceryList = ["chips", "dip", "cookies"];
// // Write the code that will add "soda" to the end of the original array.
console.log(groceryList.push("soda"))
console.log(groceryList)

// // Write the code that will add "granola" to the end of array without altering the original array.
console.log(groceryList.pop())
console.log(groceryList.push("granola"))
console.log(groceryList)

// // Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0, 2))

// // Write the code that will add "beans" to the "chips" and "dip" array.
console.log(groceryList.pop())
console.log(groceryList.pop())
console.log(groceryList.push("beans"))
console.log(groceryList)

// Consider the variable:

var numbers = [2, 4, 6, 8, 10];
// // Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift(0))
console.log(numbers)

// // Write the code that will add the number 12 to the end of the array.
console.log(numbers.push(12))
console.log(numbers)

// // Write the code that will remove the first number from the array.
console.log(numbers.shift())
console.log(numbers)

// // Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
console.log(numbers.splice(0,0,0))
console.log(numbers)

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2];
// // Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))


// // Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))

// // Write the code that returns the number at the third index.
console.log(numSet.slice(3,4))

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"];
// // Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))

// // Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed.join())

// // Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))

// // Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.
var echoStudent = ["Joyce", "Cathrine", "Chris"]
var echoStudent2 = ["Jason", "Joseph", "Daniel"]

// Write the code that sorts the names in alphabetical order.
console.log(echoStudent.sort())
console.log(echoStudent2.sort())

// Write the code that sorts the names in reverse alphabetical order.
console.log(echoStudent.reverse())
console.log(echoStudent2.reverse())

// Write the code that sorts all the names in alphabetical order in a single array.
var comboArray = echoStudent.concat(echoStudent2)
console.log(comboArray.sort())

// Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87];
var oddIndexes = [];
// Write the code that logs the values from the numbers array that are at odd indexes.
for(var i = 0; i < numbers.length; i++) {
    if(i % 2 ===1) {
        console.log(numbers[i])
    }
}

// Write the code that adds the values from odd indexes into the oddIndexes array.

for(var i = 0; i < numbers.length; i++) {
    if(i % 2 ===1){
        oddIndexes.push(numbers[i])
}
}  
console.log(oddIndexes)

for (let i = 10; i > 0; i--) {
    console.log(i);
  }

  var arr = [5, 3, 5, 2, 5, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 5) {
    console.log(arr[i]);
  }
}