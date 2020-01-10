/*    eqObjects
Implement the definition for function eqObjects which will take in two objects and returns true or false,
based on a perfect match.

*/

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// Dependencies
const emojic = require("emojic");
  
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
console.log("\nStep 2");
// step 2
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

// personal test
// const dc = { a: "1", b: "2" };
// const dd = { a: "1", c: "2" };
// assertEqual(eqObjects(dc, dd), false );


console.log("\nStep 3");
// step 3
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);