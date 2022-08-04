// Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:

var groceryList = ["chips", "dip", "cookies"];
// Write the code that will add "soda" to the end of the original array.

    // console.log(groceryList.push("soda"));

// Write the code that will add "granola" to the end of array without altering the original array.

    // var groceryList2 = groceryList;
    // console.log(groceryList2.push("granola"))

// Write the code that will return a subset of the array containing only "chips" and "dip".

    // console.log(groceryList.slice(0,2))

// Write the code that will add "beans" to the "chips" and "dip" array.

    var groceryList3 = groceryList.slice(0,2)
     groceryList3.push("beans")

// Consider the variable:

var numbers = [2, 4, 6, 8, 10];

// Write the code that will add the number 0 to the beginning of the array.

    // numbers.unshift(0);

// Write the code that will add the number 12 to the end of the array.

    // numbers.push(12);

// Write the code that will remove the first number from the array.

    // numbers.shift()

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

    // numbersList2 = [0]
    // comboArray = numbersList2.concat(numbers)

// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2];

// Write the code that finds the index of the first appearance of the number 2.

    // numSet.indexOf(2)

// Write the code that finds the index of the last appearance of the number 2.

    // numSet.lastIndexOf(2)

// Write the code that returns the number at the third index.

    // console.log(numSet[3])

// Consider the variable:

var characters = ["y", "a", "r", "r", "a"];

// Write the code that brings all the letters in the characters array together into a string.

    // characters.join("")
    // console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.

     charsReversed = characters.reverse()
    // console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.

    // charsReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.

    // console.log(charsReversed.join(""))

// Create two arrays consisting of three first names of your cohort members in each.

    var arrayOfTwoArrays = [["brook", "dawit", "chris"], ["rashad", "kelly", "daniel"]]

// Write the code that sorts the names in alphabetical order.

    arrayOfTwoArrays[0].sort() && arrayOfTwoArrays[1].sort()

// Write the code that sorts the names in reverse alphabetical order.

    arrayOfTwoArrays[0].reverse() && arrayOfTwoArrays[1].reverse()


// Write the code that sorts all the names in alphabetical order in a single array.

    combinedNames = arrayOfTwoArrays[0].concat(arrayOfTwoArrays[1])
    combinedNames.sort()

// Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87];

var oddIndexes = [];

// Write the code that logs the values from the numbers array that are at odd indexes.

    // for (let i = 0; i < numbers.length + 1; i++) {
    //     if (i % 2 === 1) {
    //         console.log(numbers[i]);
    //     } else {}
    // }

    //console.log(numbers[1], numbers[3], numbers[5])
    
// Write the code that adds the values from odd indexes into the oddIndexes array.

    // for (let i = 0; i < numbers.length + 1; i++) {
    //     if (i % 2 === 1) {
    //         oddIndexes.push(numbers[i]);
    //     } else {}
    // }
    // console.log(oddIndexes)

    // oddIndexes.push(numbers[1], numbers[3], numbers[5])
    // console.log(oddIndexes)
