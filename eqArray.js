const eqArrays = (arr1, arr2) => {
  let result;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

const assertEqual = function(actual,expected) {
  (actual === expected ? console.log(`👍 👍 👍 Assertion Passed:${actual} === ${expected}`) : console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`));
};
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]);// => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
