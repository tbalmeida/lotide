/*  Implement without
Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

Here are a couple examples, but please don't limit your testing to just these scenarios:

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
*/

const emojic = require("emojic");

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

const without = function(array, exclude) {
  let aRet = [];
  let bAdd = true;

  for (let i = 0; i < array.length; i++) {
    bAdd = true;
    for (let j = 0; j < exclude.length; j++) {
      array[i] === exclude[j] ? bAdd = false : null;
    }
    bAdd ? aRet.push(array[i]) : null;
  }
  return aRet;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3, 6], [2, 3]), [1, 6]);
assertArraysEqual(without([1, 2, 3, "4", "7"], [1, "7"]), [2, 3, "4"]);
assertArraysEqual(without(["Canada", "Cuba", "USA", "Mexico", "Belize"], ["Cuba", "Belize"]), ["Canada", "USA", "Mexico"]);