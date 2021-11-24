const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2) === true ? console.log(`👍 👍 👍 Arrays are equal`) : console.log(`👎👎👎Arrays are not equal`);
};

const letterPositions = function(sentence) {
  const result = {};
  const arrayOfChars = sentence.toLowerCase().split(' ').join().split('');
  for (let i = 0; i < arrayOfChars.length; i++) {
    if (result[arrayOfChars[i]]) {
      result[arrayOfChars[i]].push(i);
    } else {
      result[arrayOfChars[i]] = [];
      result[arrayOfChars[i]].push(i);
    }
  }
  return result;
};
assertArraysEqual((letterPositions("hello")).l, [2,3]);
console.log(letterPositions("hello").l);
