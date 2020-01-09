// Dependencies
const emojic = require("emojic")
  , colorIt = require("color-it")
    ;

//function to compare two arrays. The order of the elements matter. 
const eqArrays = function( arrA, arrB ){

  if (arrA.length !== arrB.length ){
    // different sizes, returns false and exits function
    return false;

  } else {
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] !== arrB[i]) {
        // found a difference; returns false and exits function
        return false;
      }
    }
  }

  return true;
}

const assertArraysEqual = function(actual, expected) {
  let vResult = "";
  let vSign = "";
  let vEmoji = "";

  if ( eqArrays( actual, expected ) ) {
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



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual( results1, ["g", "c", "t", "m", "t"] ); //PASS

console.log("2nd test");
const languages = ["EN-English", "FR-French", "SP-Spanish", "PT-Portuguese", "IT-Italian"];
const results2 = map(languages, language => language.substring(0, 2) );
assertArraysEqual( results2, ["EN", "FR", "SP", "PT", "IT", "RU"] );  //FAIL

console.log("3rd test");
const invcoices = [ 834, 223, 543, 763, 839];
const results3 = map(invcoices, invoice => invoice * 1.05 );
assertArraysEqual( results3, [875.7, 234.15, 570.15, 801.15, 880.95] ); //PASS