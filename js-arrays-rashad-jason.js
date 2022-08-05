// Consider the variable:

var groceryList = ["chips", "dip", "cookies"];
// Write the code that will add "soda" to the end of the original array.
// var groceryList = ["chips", "dip", "cookies"];
console.log(groceryList.push("soda"))
console.log(groceryList)

// Write the code that will add "granola" to the end of array without altering the original array.

console.log(groceryList.push("granola"));

// Write the code that will return a subset of the array containing only "chips" and "dip".

console.log(groceryList.slice(0,2));

// Write the code that will add "beans" to the "chips" and "dip" array.

var slicedArray = groceryList.slice(0,2);
console.log(slicedArray.push("beans"));
console.log(slicedArray);

// Consider the variable:

//var numbers = [2, 4, 6, 8, 10];
// Write the code that will add the number 0 to the beginning of the array.
var numbers = [2, 4, 6, 8, 10];
console.log(numbers.unshift("0"));
console.log(numbers);

// Write the code that will add the number 12 to the end of the array.
var numbers = [2, 4, 6, 8, 10];
console.log(numbers.push("12"));
console.log(numbers);

// Write the code that will remove the first number from the array. 
var numbers = [2, 4, 6, 8, 10];
console.log(numbers.shift(0));
console.log(numbers);

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;
var numbers = [2, 4, 6, 8, 10];
var newFirstElement = 0
var newArray = [newFirstElement].concat(numbers)
console.log(newArray);


// Consider the variable:

//var numSet = [2, 13, 6, 8, 4, 2];
// Write the code that finds the index of the first appearance of the number 2.
var numSet = [2, 13, 6, 8, 4, 2];
console.log(numSet.indexOf(2));

// Write the code that finds the index of the last appearance of the number 2.
var numSet = [2, 13, 6, 8, 4, 2];
console.log(numSet.lastIndexOf(2));

// Write the code that returns the number at the third index.
var numSet = [2, 13, 6, 8, 4, 2];
console.log(numSet[3]);

// Consider the variable:

//var characters = ["y", "a", "r", "r", "a"];
// Write the code that brings all the letters in the characters array together into a string.
var characters = ["y", "a", "r", "r", "a"];
console.log(characters.join(""));

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var characters = ["y", "a", "r", "r", "a"];
console.log(characters.reverse());
var charsReversed = characters.reverse();

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
var characters = ["y", "a", "r", "r", "a"];
var charsReversed = characters.reverse();
console.log(charsReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
var characters = ["y", "a", "r", "r", "a"];
var charsReversed = characters.reverse();
console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.
var coHort1 = ["Jason", "Rashad","Jereme"]; 
var cohort2 = ["Austin", "Charleen", "Elijah"];
console.log(coHort1);
console.log(cohort2);

// Write the code that sorts the names in alphabetical order.
var coHort1 = ["Jason", "Rashad","Jereme"]; 
var cohort2 = ["Austin", "Charleen", "Elijah"];
console.log(coHort1.sort());
console.log(cohort2.sort());

// Write the code that sorts the names in reverse alphabetical order.
var coHort1 = ["Jason", "Rashad","Jereme"]; 
var cohort2 = ["Austin", "Charleen", "Elijah"];
console.log(coHort1.reverse());
console.log(cohort2.reverse());

// Write the code that sorts all the names in alphabetical order in a single array.
var coHort1 = ["Jason", "Rashad","Jereme"]; 
var cohort2 = ["Austin", "Charleen", "Elijah"];
console.log(coHort1.concat(cohort2));
var allNames = coHort1.concat(cohort2);
console.log(allNames.sort());

// Consider the variables:

//var numbers = [42, 221, 71, 7, 18, 87];
//var oddIndexes = [];
// Write the code that logs the values from the numbers array that are at odd indexes.
var numbers = [42, 221, 71, 7, 18, 87];
var oddIndexes = []
var oddNumbers = [221, 7, 87];
console.log(oddNumbers);

// Write the code that adds the values from odd indexes into the oddIndexes array.
var numbers = [42, 221, 71, 7, 18, 87];
var oddIndexes = []
var oddNumbers = [221, 7, 87];
console.log(oddNumbers.concat(oddIndexes));

