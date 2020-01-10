/*    findKeyByValue
Implement the function findKeyByValue which takes in an object and a value. It should scan the object and 
return the first key which contains the given value. If no key with that given value is found, then it 
should return undefined.
Use assertEqual to write test cases for various scenarios.
*/

// Dependencies
const emojic = require("emojic")
  , colorIt = require("color-it")
    ;
  
const assertEqual = function(actual, expected) {

  actual === expected ?
    console.log(emojic.heavyCheckMark + `  Assertion Passed: ${actual} === ${expected}`)
    : console.log(emojic.x + ` Assertion Failed: ${actual} !== ${expected}`)

  return null;
};

const findKeyByValue = function( pObj, pValue ){
  let vRet;

  for (const key in pObj){
    pObj[key] === pValue ? vRet = key : null; 
  }
  return vRet;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  action: "The Mandalorian"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Helix"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");