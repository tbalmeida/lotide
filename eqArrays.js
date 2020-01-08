// The following function originally resides on assertEquals.js
// Dependencies
const emojic = require("emojic")
  , colorIt = require("color-it")
    ;
  
const assertEqual = function(actual, expected) {
  let vResult = "";
  let vSign = "";
  let vEmoji = "";

  if (actual === expected) {
    vResult = "  Assertion Passed";
    vSign = "=";
    vEmoji = emojic.heavyCheckMark;
  } else {
    vResult = " Assertion Failed";
    vSign = "!";
    vEmoji = emojic.x;
  }
  console.log(`${vEmoji}${vResult}: ${actual} ${vSign}== ${expected}`);

  return null;
};

//function to compare two arrays. The order of the elements matter. 
const eqArrays = function( arrA, arrB ){

  if (arrA.length !== arrB.length ){
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
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true );
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false );
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true );
assertEqual(eqArrays(["1", "2", ], ["1", "2", 3]), false );