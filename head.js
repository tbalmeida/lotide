// Dependencies
const emojic = require("emojic");

// Code
const assertEqual = function(actual, expected) {
  actual === expected ?
    console.log(emojic.heavyCheckMark + `  Assertion Passed: ${actual} === ${expected}`)
    : console.log(emojic.x + ` Assertion Failed: ${actual} !== ${expected}`);
};

const head = function(pArray) {
  return pArray[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5,6,7]), 9);