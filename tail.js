const assertEqual = function(actual,expected) {
  return actual === expected ? console.log(`π π π Assertion Passed:${actual} === ${expected}`) : console.log(`πππAssertion Failed: ${actual} !== ${expected}`);
};
const tail = (array) => {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      answer.push(array[i]);
    }
  }
  return answer;
};

module.exports = tail;

