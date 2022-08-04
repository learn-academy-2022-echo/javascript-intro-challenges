// Consider the variable:

var groceryList = ["chips", "dip", "cookies"];

// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")
console.log(groceryList)
// Write the code that will add "granola" to the end of array without altering the original array.
console.log(groceryList.concat("granola"))
console.log(groceryList)
// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0, 2))
// Write the code that will add "beans" to the "chips" and "dip" array.
var newArr = groceryList.slice(0, 2)
newArr.push("beans")
console.log(newArr)