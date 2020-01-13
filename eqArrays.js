// The following function originally resides on assertEquals.js
// Dependencies

const emojic = require("emojic");
const assertEqual = require("./assertEqual");
  
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


module.exports = eqArrays;