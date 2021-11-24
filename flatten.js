const flatten = (array) => {
  let checkArray = false;
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    checkArray = Array.isArray(array[i]);
    if (checkArray) {
      resultArray = resultArray.concat(array[i]);
    } else {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
};


const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2) === true ? console.log(`👍 👍 👍 Arrays are equal`) : console.log(`👎👎👎Arrays are not equal`);
};


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

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
