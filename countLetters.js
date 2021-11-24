const assertEqual = function(actual,expected) {
  (actual === expected ? console.log(`👍 👍 👍 Assertion Passed:${actual} === ${expected}`) : console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`));
};

const countLetters = function(string) {
  const arrayOfString = string.split(' ');
  const result = {};
  for (let char of arrayOfString) {
    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  }
  return result;
};


assertEqual(countLetters("Lighthouse in the house"),{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
assertEqual(countLetters("LHL"),{
  L: 2,
  H: 1
});