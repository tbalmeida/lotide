/*
The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

*/

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

// console.log("lhl", countLetters("lhl"));
// console.log("lighthouse in the house", countLetters("lighthouse in the house"));