/*
The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

*/
const emojic = require("emojic");

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

const countLetters = function(pText) {
  // flattens the string and takes out spaces
  let aTmp = pText.replace(/ /g, "").split("").sort();
  
  //creates the return Object
  const oRet = {};

  for (let i = 0; i < aTmp.length; i ++) {
    oRet.hasOwnProperty(aTmp[i]) ? oRet[aTmp[i]] ++ : oRet[aTmp[i]] = 1;
  }

  return oRet;
};

countLetters("lhl");
countLetters("lighthouse in the house");