const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const without = require('./without');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const takeUntil = require('./takeUntil');
const findKeyByValue = require('./findKeyByValue');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const map = require('./map');

module.exports = {
  head:         head,
  tail:         tail,
  middle:       middle,
  flatten:      flatten,
  without:      without,
  countLetters: countLetters,
  countOnly:    countOnly,
  findKey:      findKey,
  takeUntil:    takeUntil,
  findKeyByValue:   findKeyByValue,
  letterPositions: letterPositions
};
