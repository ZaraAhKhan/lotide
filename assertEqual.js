const assertEqual = function(actual,expected) {
  (actual === expected ? console.log(`π π π Assertion Passed:${actual} === ${expected}`) : console.log(`πππAssertion Failed: ${actual} !== ${expected}`));
};
module.exports = assertEqual;

