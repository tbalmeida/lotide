/*
We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

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

const letterPositions = function(pText) {
  // flattens the string and takes out spaces
  let vTmp = pText.replace(/ /g, "");
  
  //creates the return Object
  const oRet = {};

  for (let i = 0; i < vTmp.length; i ++) {
    if (oRet.hasOwnProperty(vTmp[i])) {
      oRet[vTmp[i]].push(i);
    } else {
      oRet[vTmp[i]] = [ i ];
    }
  }

  return oRet;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("racecar").a, [1, 5]);