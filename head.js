// Dependencies
const emojic = require("emojic");
const assertEqual = require("./assertEqual");

// Code

const head = function(pArray) {
  return pArray[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5,6,7]), 9);