/*    Implement flatten
Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.
Our function will for now only handle one level of nesting.
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
  let vResult = "";
  let vSign = "";
  let vEmoji = "";

  if (eqArrays(actual, expected)) {
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

const flatten = function(pArray) {
  let aRet = [];
  let aTmp = [];

  for (let i = 0; i < pArray.length; i++) {
    if (!Array.isArray(pArray[i])) {
      aRet.push(pArray[i]);
    } else {
      aTmp = pArray[i];
      for (let j = 0; j < aTmp.length; j++) {
        aRet.push(aTmp[j]);
      }
    }
  }
  return aRet;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3], 4, 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["Flames", "Oilers", "Canucks", ["Senators", "Canadiens"], ["Jets"]]),
  ["Flames", "Oilers", "Canucks", "Senators", "Canadiens", "Jets"]);
assertArraysEqual(flatten(["Dollar", "Peso", ["Euro", "Pound Sterling"], [1.1, 2.4]]),
  ["Dollar", "Peso", "Euro", "Pound Sterling", 1.1, 2.4]);

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5]);