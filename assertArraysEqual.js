const assertArraysEqual = function (arr1, arr2) {
  return eqArrays(arr1, arr2) === true ? console.log(`👍 👍 👍 Arrays are equal`) : console.log(`👎👎👎Arrays are not equal`);
};


const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  return true;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]);// => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
