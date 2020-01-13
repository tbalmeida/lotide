/*    Implement flatten
Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.
Our function will for now only handle one level of nesting.
*/

const emojic = require("emojic");
const assertArraysEqual = require("./assertArraysEqual");

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