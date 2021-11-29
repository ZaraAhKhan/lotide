const eqArrays = require('./eqArray');

const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2) === true ? console.log(`👍 👍 👍 Arrays are equal`) : console.log(`👎👎👎Arrays are not equal`);
};

module.exports = assertArraysEqual;

