/*
Challenge

Implement middle which will take in an array and return the middle-most element(s) of the given array.

The middle function should return an array with only the middle element(s) of the provided array. This means that the
length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
  middle([1]) // => []
  middle([1, 2]) // => []

For arrays with odd number of elements, an array containing a single middle element should be returned.
  middle([1, 2, 3]) // => [2]
  middle([1, 2, 3, 4, 5]) // => [3]

For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  middle([1, 2, 3, 4]) // => [2, 3]
  middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
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

const middle = function(array) {
  let aRet = [];
  let vSize = array.length;

  if (vSize > 2) {
    if (vSize % 2 === 0) {
      aRet.push(array[ vSize / 2 - 1 ], array[ vSize / 2 ]);
    } else {
      aRet.push(array[ Math.floor(vSize / 2) ]);
    }
  } console.log(aRet);
  return aRet;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);