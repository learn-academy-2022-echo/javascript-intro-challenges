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

// Consider the variable:

var numbers = [2, 4, 6, 8, 10];
// Write the code that will add the number 0 to the beginning of the array.
    console.log(numbers.unshift(0));
    console.log(numbers);
// Write the code that will add the number 12 to the end of the array.
    console.log(numbers.push(12));
    console.log(numbers);
// Write the code that will remove the first number from the array.
    console.log(numbers.shift(0));
    console.log(numbers);
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
    var zero = [0];
    var numbersOne = console.log(zero.concat(numbers));
    var newArray = zero + numbers
    console.log(newArray.split(","));
    var spreadArray = [0,...numbers].flat()
    console.log(spreadArray);

    

