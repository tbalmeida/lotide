// Dependencies
const emojic = require("emojic"), colorIt = require("color-it");
  
const assertEqual = function(actual, expected) {

  actual === expected ?
    console.log(emojic.heavyCheckMark + `  Assertion Passed: ${actual} === ${expected}`)
    : console.log(emojic.x + ` Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;