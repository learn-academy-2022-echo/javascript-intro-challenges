var groceryList = ["chips", "dip", "cookies"];

// Write the code that will add "soda" to the end of the original array.
console.log(groceryList.push("soda"));
console.log(groceryList);

// Write the code that will add "granola" to the end of array without altering the original array.
var groceryList2 = ["granola"]
console.log(groceryList.concat(groceryList2));

// Write the code that will return a subset of the array containing only "chips" and "dip".
var grocerySubSet = groceryList.slice(0,2)
console.log(grocerySubSet);


// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(grocerySubSet.push("beans"));
console.log(grocerySubSet);


