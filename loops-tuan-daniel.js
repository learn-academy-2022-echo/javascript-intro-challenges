// Challenges

// Create a for loop that logs each number from 1 - 20.
    for (let i = 1; i < 21; i++) {
        console.log(i)
    }
// Create a for loop that logs every other number from 1 - 20.
for (let i = 1; i < 21; i = i + 2) {
    console.log(i)
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.
    for (let i = 1; i < 21; i++) {
        console.log(i * 3)
    }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
    for (let i = 1; i < 21; i++) {
        if (i % 2 !== 0) {
            console.log(`${i} is ODD`)
        } else {
            console.log(i)
        }
    }
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

const nums = [3, 57, -9, 20, 67];
// Create the code that will log the largest number from the array.
var largest = nums[0]
for (let i = 1; i< nums.length; i++){
    if(nums[i] > largest){
        largest = nums[i]
    }
}
console.log(largest)
// Create the code that will log the smallest number from the array.
var smallest = nums[0]
for (let i=1; i<nums.length; i++){
    if(nums[i] < smallest){
        smallest = nums[i]
    }
}
console.log(smallest)
// Create the code that will log the remainder of each number when divided by 2.

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i] % 2)
}
// Expected output: 1, 1, -1, 0, 1