const tail = require("../tail");
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.isArray ( tail(words) );
  })
});
