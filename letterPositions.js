/*
We'll implement a new function letterPositions which will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

*/
const emojic = require("emojic");
const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("racecar").a, [1, 5]);