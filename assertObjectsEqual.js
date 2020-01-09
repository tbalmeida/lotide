/*    assertObjectsEqual

Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.

*/

// FUNCTION IMPLEMENTATION

// Dependencies
const emojic = require("emojic");

const assertObjectsEqual = function(pObj1, pObj2, expected) {
  let vResult = "";
  let vSign = "";
  let vEmoji = "";
  let vCond = eqObjects(pObj1, pObj2);

  if (vCond === expected)  {
    vResult = "  Assertion Passed";
    vSign = "=";
    vEmoji = emojic.heavyCheckMark;
  } else {
    vResult = " Assertion Failed";
    vSign = "!";
    vEmoji = emojic.x;
  }
  console.log(`${vEmoji}${vResult}: ${vCond} ${vSign}== ${expected}`);

  return null;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // objects have the same # of properties ,so check properties/values

    for (let vKey of Object.keys(object1)) {

      if ((!Array.isArray(object1[vKey]) && !Array.isArray(object2[vKey]))) {  // no arrays
        if (object1[vKey] !== object2[vKey]) {
          return false;
        }
      } else {  // both are arrays
        if (!eqArrays(object1[vKey], object2[vKey])) {                      // not a math
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return true;
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

assertObjectsEqual(ab, ba, true);
assertObjectsEqual(ab, abc, false);

// step 3
console.log("\nStep 3");
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc, true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

assertObjectsEqual(cd, dc, true);    // true
assertObjectsEqual(cd, cd2, false);  // false