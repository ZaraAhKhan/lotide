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


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [2,4,6,8,10];
const emotions = ["happy","sad","angry","jealous"];
const prices = [10,15,30,40,50];
const map = function (array, callBackFn) {
  const resultArr = [];
  for (let item of array) {
    resultArr.push(callBackFn(item));
  }
  return resultArr;
};
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g','c','t','m','t']);
const results2 = map(numbers, number =>number * 2);
assertArraysEqual(results2,[4,8,12,16,20]);
const results3 = map(emotions, emotion => emotion.length);
assertArraysEqual(results3,[5,3,5,7]);
const results4 = map(prices, price => price + 5);
assertArraysEqual(results4,[15,20,35,45,55]);
