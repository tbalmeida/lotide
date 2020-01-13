// The following function originally resides on assertEquals.js
// Dependencies
const emojic = require("emojic");
const eqArrays = require("./eqArrays");

//function to compare two arrays. The order of the elements matter.
const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ?
    console.log(emojic.heavyCheckMark + `  Assertion Passed: ${actual} === ${expected}`)
    : console.log(emojic.x + ` Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;