/*    implement countOnly in Lotide
Function Behaviour

countOnly will be given an array and an object. It will return an object containing counts of everything that
the input object listed.

Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts.
Therefore it will need to return an object that can represent the stats.
*/

// Dependencies
const emojic = require("emojic");

const assertEqual = function(actual, expected) {

  actual === expected ?
    console.log(emojic.heavyCheckMark + `  Assertion Passed: ${actual} === ${expected}`)
    : console.log(emojic.x + ` Assertion Failed: ${actual} !== ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount.hasOwnProperty(item) && itemsToCount[item]) {
      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

/* const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2); */