const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  return eqArrays(arr1, arr2) === true ? console.log(`π π π Arrays are equal`) : console.log(`πππArrays are not equal`);
};

module.exports = assertArraysEqual;

