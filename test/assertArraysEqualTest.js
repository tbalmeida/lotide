const assertArraysEqual = require("../assertArraysEqual");

// detail: using message templates, the " will dissapear from the arrays and it won't be possible to visually
// check the function return

assertArraysEqual([1, 2, 3], [1, 2, 3]);              // Pass
assertArraysEqual([1, 2, 3], [3, 2, 1]);              // Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);  // Pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);    // Shall fail, since 3 != "3"