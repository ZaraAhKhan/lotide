const assertEqual = function(actual,expected) {
  (actual === expected ? console.log(`👍 👍 👍 Assertion Passed:${actual} === ${expected}`) : console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`));
};
const head = (array) => {
  let actual;
  (array === [] ? actual = undefined : actual =  array[0]);
  return actual;

};
assertEqual(head([]), undefined);
assertEqual(head([5]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");