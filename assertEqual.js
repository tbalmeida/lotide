// Dependencies
const emojic = require("emojic")
  , colorIt = require("color-it")
    ;
  
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

/* Tests

    Comparing identical strings
    Comparing non-identical strings
    Comparing identical numbers
    Comparing non-identical numbers
*/
assertEqual("Star Wars", "Star Wars");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(20, 20.01);

/* 1st version
const assertEqual = function(actual, expected) {
  actual === expected? console.log(emojic.heavyCheckMark + "  Assertion Passed: " + actual + " === " + expected)
    : console.log(emojic.x + " Assertion Failed: " + actual + " !== " + expected );
  return null;
};
*/