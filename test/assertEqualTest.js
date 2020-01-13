const assertEqual = require("../assertEqual");

// assertEqual
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