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



const middle = array => {
  let middleArray = [];
  if (array.length === 1 || array.length === 2) {
    middleArray  = [];
  } else if (array.length % 2 !== 0) {
    const middleIndex = (array.length - 1) / 2;
    middleArray.push(array[middleIndex]);
  } else if (array.length % 2 === 0) {
    const middleElement = (array.length) / 2;
    middleArray = array.slice((middleElement - 1), (middleElement + 1));
  }
  return middleArray;
};
assertArraysEqual(middle([1]) , []);// => []
assertArraysEqual(middle([1, 2]) , []);// => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]) , [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]