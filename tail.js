// Dependencies
const emojic = require("emojic");
const assertEqual = require("./assertEqual");

// Code
const tail = (pArg) => {
  let aRet = pArg.slice(1);
  return aRet;
};

module.exports = tail;