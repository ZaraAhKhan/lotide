// const assertArraysEqual = require('./assertArraysEqual');
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
module.exports = flatten;




// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
