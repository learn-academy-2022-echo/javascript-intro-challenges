//1var groceryList = ["chips", "dip", "cookies"];

// Write the code that will add "soda" to the end of the original array.
var groceryList = ["chips", "dip", "cookies"]
groceryList.push("soda")
console.log(groceryList)

//Write the code that will add "granola" to the end of array without altering the original array.

var newGroceryList = groceryList.push("granola")
console.log(groceryList , newGroceryList)

//Write the code that will return a subset of the array containing only "chips" and "dip".

groceryList[0,1]
console.log(groceryList[0])
console.log(groceryList[1])

//Write the code that will add "beans" to the "chips" and "dip" array.

groceryList.splice(0, 2, "beans")
console.log(groceryList);

var numbers = [2, 4, 6, 8, 10];
//Write the code that will add the number 0 to the beginning of the array.

numbers.unshift(0)
console.log(numbers)

//Write the code that will add the number 12 to the end of the array.

numbers.push(12)
console.log(numbers)

//Write the code that will remove the first number from the array.

var numbers = [2, 4, 6, 8, 10];
numbers.reverse()
numbers.pop()
numbers.reverse()
console.log(numbers)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

numbers.reverse()
numbers.push(0)
numbers.reverse()
console.log(numbers);

var numSet = [2, 13, 6, 8, 4, 2];
//Write the code that finds the index of the first appearance of the number 2.
var firstTwo = numSet.indexOf(2) 
console.log(firstTwo)

//Write the code that finds the index of the last appearance of the number 2.

var lastTwo = numSet.lastIndexOf(2)
console.log(lastTwo)

//Write the code that returns the number at the third index.

var threeIndex = numSet[3]
console.log(threeIndex);

var characters = ["y", "a", "r", "r", "a"];

//Write the code that brings all the letters in the characters array together into a string.

var charactersSplit = characters.split();
console.log(charactersSplit)




























