const { letterPoisitions } = require('.');
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = letterPositions;

assertArraysEqual((letterPositions("hello")).l, [2,3]);
console.log(letterPositions("hello").l);
