//Create a for loop that logs each number from 1 - 20.
 
//var Numbers = [1, 2, 3, 4, 5  20, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,]

  // for(let i = 1; i <= 20; i++) {
   //  console.log(i)
  // }






// Create a for loop that logs every other number from 1 - 20.
   // for(let i = 0; i <= 20; i+=2) {
   // console.log(i)
 // }
// Create a for loop that logs the result of each number from 1 - 20 tripled.
//for(let i = 1; i <= 20; i++) {
   // console.log(i * 3)
 // }


// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
  //   for(let i = 1; i <= 20; i++){
  //       if(i % 2 !== 0){
  //      console.log("ODD")
  //  } else {
  //   console.log(i)
  //  }
  // }
  
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// Consider this variable:

const nums = [3, 57, -9, 20, 67];
//Create the code that will log the largest number from the array.
  //console.log(Math.max(3, 57, -9, 20, 67));

// Create the code that will log the smallest number from the array.
  //  console.log(Math.min(3, 57, -9, 20, 67));

// Create the code that will log the remainder of each number when divided by 2.

   for(let i = 0; i < nums.length; i++){
      console.log(nums[i]% 2)
   }
  

// Expected output: 1, 1, -1, 0, 1
// Consider this variable:

//const myString = "learn student";
// Create the code that will log the number of times the letter "e" occurs in the string.

  const myString = "learn student";
 console.log(myString.match(/e/gi).length);


// Create the code that will log every other character in the string.
     for(let i = 1; i <  myString.length; i+=2) {
    console.log(myString[i])
  }
    
