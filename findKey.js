/*    findKey
    Implement the function findKey which takes in an object and a callback.
    It should scan the object and return the first key for which the callback returns a truthy value.
    If no key is found, then it should return undefined.
*/

// Dependencies
const emojic = require("emojic");
  
const assertEqual = function(actual, expected) {

  actual === expected ?
    console.log(emojic.heavyCheckMark + `  Assertion Passed: ${actual} === ${expected}`)
    : console.log(emojic.x + ` Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = function(pObj, pCallback) {
  let vRet;
  for (const key in pObj) {
    if (pCallback(pObj[key])) {
      return key;
    }
  }
  return vRet;
};

assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2)
  , "noma");    // true


assertEqual(
  findKey({
    "Heineken":   { country: "Netherlands" },
    "BadenBaden": { country: "Brazil" },
    "Peroni":     { country: "Italy" },
    "Newcastle":  { country: "UK" },
    "Guinnes":    { country: "Ireland" }
  }, x => x.country === "UK")
  , "Newcastle");    // true