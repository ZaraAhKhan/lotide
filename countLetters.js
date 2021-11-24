const assertEqual = function(actual,expected) {
  (actual === expected ? console.log(`👍 👍 👍 Assertion Passed:${actual} === ${expected}`) : console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`));
};

const countLetters = function(string) {
  const arrayOfString = string.toLowerCase().split(' ').join().split('');
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

console.log(countLetters("Lighthouse in the house"));
assertEqual((countLetters("Lighthouse in the house")).h,4);
assertEqual(countLetters("LHL").l,2);