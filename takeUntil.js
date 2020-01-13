/*    takeUntil

Expected Input

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

  Expected Output

[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/

// The following function originally resides on assertEquals.js
// Dependencies
const emojic = require("emojic");
const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  const aResult = [];
  let i = 0;

  while (!callback(array[i])) {
    aResult.push(array[i]);
    i++;
  }
  return aResult;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));