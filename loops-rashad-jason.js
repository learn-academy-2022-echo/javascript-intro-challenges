//1. Create a for loop that logs each number from 1 - 20

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var multiple = 3;

for(i = 1; i<=20; i++){
    console.log (i)
}

//2. Create a for loop that logs every other number from 1 - 20.

for(i = 1; i<=20; i = i+2){
    console.log (i)
}

//3. Create a for loop that logs the result of each number from 1 - 20 tripled.

for(i=1; i<20; i++){
    console.log(numbers[i]*multiple)
}

//4.Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".

for (i=1; i<=20; i++){
    if(i%2 !==0){
        console.log("Odd")
    }else {
        console.log(i)
    }
}

//5. Create the code that will log the largest number from the array.
const nums = [3, 57, -9, 20, 67];

var largest = nums[0];
var smallest = nums[0];

for (i=0; i <nums.length; i++){
    if(largest < nums[i]){
        largest = nums[i];
    }
    
}

console.log(largest)

//6. Create the code that will log the smallest number from the array.

for (i=0; i >nums.length; i--){
    if(smallest > nums[i]){
        smallest = nums[i];
    }
    
}

console.log(smallest)

//7. Create the code that will log the remainder of each number when divided by 2.

for(let i = 0; i < nums.length; i++){
        console.log(nums[i] % 2)
      }


//8. Create the code that will log the number of times the letter "e" occurs in the string.

const myString = "learn student";

function howMuch(str) {
    let count = 0;
    
    for (var letter of str.toLowerCase()){
        if(myString.includes(e)){
            count++;
        }
    }
    return count
}

const result = countLetter(string);

console.log(result)
      


