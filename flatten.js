const flatten = (array) => {
  for(let i = 0; i < array.length; i++){
    Array.isArray(array[i])
  }
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