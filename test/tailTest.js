const tail = require("../tail")
const assertEqual = require("../assertEqual")

// Test case: check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log( tail(words)); // no need to capture the return value since we are not checking it

assertEqual(words.length, 3); // original array should still have 3 elements!