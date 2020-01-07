// Dependencies
const emojic = require("emojic")
    , colorIt = require("color-it")
    ;
// Code
const assertEqual = function(actual, expected) {
  let vResult = "";
  let vSign = "";
  let vEmoji = "";

  if (actual === expected){
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

const head = function(pArray){
  return pArray[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5,6,7]), 9);