const assertEqual = function(actual, expected) {
  actual === expected? console.log("Assertion Passed: " + actual + " === " + expected)
    : console.log("Assertion Failed: " + actual + " !== " + expected );
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