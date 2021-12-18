// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// First, set up the test
describe("fibonacciArray", () => {
  it("will takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibonacciArray(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacciArray(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
// run the test and at this point I should see `fibonacciArray is not defined`

// b) Create the function that makes the test pass.

// now to create a function, I'm sure there's a better way, even after researching, I didn't fully comprehend the logic, here's my solution from scratch
// const fibonacciArray = (num) => {
//   let arr = Array(num); // use Array(num) to create an array of num length
//   let previousNum = 0; // set up the unwanted numbers of the sequence
//   let currentNum = 1;
//   for (let i = 0; i < arr.length - 1; i++) { // create for loop with fibonacci logic
//     nextNum = previousNum + currentNum;
//     arr[i + 1] = nextNum; // start at i + 1 because we don't want the 0
//     previousNum = currentNum;
//     currentNum = nextNum;
//   }
//   arr[0] = 1; // set index 0 to 1 since it will always be one
//   return arr; // return the array
// };

// REFACTOR:
const fibonacciArray = (num) => {
  if (num > 2) {
    // added greater than two requirement
    let arr = Array(num);
    let [previousNum, currentNum] = [0, 1]; // trying this syntax to declare multiple variables in one line
    for (let i = 0; i < arr.length - 1; i++) {
      nextNum = previousNum + currentNum;
      arr[i + 1] = nextNum;
      previousNum = currentNum;
      currentNum = nextNum;
    }
    arr[0] = 1;
    return arr;
  } else {
    return "Your number has to be greater than 2"; // added a message to let user know to use a number greater than 2
  }
};

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// First, set up the test
describe("filterAndSortOnlyOddNums", () => {
  var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"];
  // Expected output: [-9, 7, 9, 199]
  var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"];
  // Expected output: [-823, 7, 23]
  it("akes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(filterAndSortOnlyOddNums(fullArr1)).toEqual([-9, 7, 9, 199]);
    expect(filterAndSortOnlyOddNums(fullArr2)).toEqual([-823, 7, 23]);
  });
});
// got the ReferenceError: filterAndSortOnlyOddNums is not defined

// b) Create the function that makes the test pass.

const filterAndSortOnlyOddNums = (arr) => {
  return arr
    .filter((value) => typeof value === "number" && value % 2 !== 0) // use typeof to get "number" && mod to get odd nums
    .sort((a, b) => a - b); // usedspecial sort method to sort numerically
};

// I think it's pretty good already, no refactor needed

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// First, set up the test
describe("sumArray", () => {
  var numbersToAdd1 = [2, 4, 45, 9];
  // Excpected output: [2, 6, 51, 60]
  var numbersToAdd2 = [0, 7, -8, 12];
  // Expected output: [0, 7, -1, 11]
  var numbersToAdd3 = [];
  // Expected output: []
  it("takes in an array and returns an array of the accumulating sum", () => {
    expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60]);
    expect(sumArray(numbersToAdd2)).toEqual([0, 7, -1, 11]);
    expect(sumArray(numbersToAdd3)).toEqual([]);
  });
});
// ReferenceError: sumArray is not defined, now we can proceed to make it green
// b) Create the function that makes the test pass.

// brute force attempt
// const sumArray = (arr) => {
//   let previousNum = 0; // setting up a number for something like a "arr[-1]" if you will..
//   for (let i = 0; i < arr.length; i++) {
//     // brute force loop and reassigning of values
//     let currentNum = arr[i];
//     arr[i] = currentNum + previousNum;
//     previousNum = arr[i];
//   }
//   return arr; // return arr but modified
// };

// REFACTOR, after doing some researching, it looks like this is the cleanest solution although I'm not sure I fully understand it:
const sumArray = (arr) =>
  arr.map(
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  );
