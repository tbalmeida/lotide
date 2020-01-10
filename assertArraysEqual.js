// The following function originally resides on assertEquals.js
// Dependencies
const emojic = require("emojic");

//function to compare two arrays. The order of the elements matter.
const eqArrays = function(arrA, arrB) {

  if (arrA.length !== arrB.length) {
    // different sizes, returns false and exits function
    return false;

  } else {
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] !== arrB[i]) {
        // found a difference; returns false and exits function
        return false;
      }
    }
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(emojic.heavyCheckMark + `  Assertion Passed: ${actual} === ${expected}`)
    : console.log(emojic.x + ` Assertion Failed: ${actual} !== ${expected}`);
};

// detail: using message templates, the " will dissapear from the arrays and it won't be possible to visually
// check the function return

assertArraysEqual([1, 2, 3], [1, 2, 3]);              // Pass
assertArraysEqual([1, 2, 3], [3, 2, 1]);              // Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);  // Pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);    // Shall fail, since 3 != "3"