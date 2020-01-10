// Dependencies
const emojic = require("emojic");

// Code
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(emojic.heavyCheckMark + `  Assertion Passed: ${actual} === ${expected}`)
    : console.log(emojic.x + ` Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (pArg) => {
  let aRet = pArg.slice(1);
  return aRet;
};

// Test case: check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!