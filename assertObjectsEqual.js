const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  return eqObjects(actual, expected) === true ? console.log(`👍 👍 👍 Objects ${inspect(actual)} and ${inspect(expected)} are equal`) :
    console.log(`👎👎👎 Objects ${inspect(actual)} and ${inspect(expected)} are not equal`);
};

const eqObjects = function(object1, object2) {
  const obj1Arr = Object.keys(object1);
  const obj2Arr = Object.keys(object2);
  if (obj1Arr.length !== obj2Arr.length) {
    return false;
  } else {
    for (let keys of obj1Arr) {
      if (Array.isArray(object1[keys])) {
        if (eqArrays(object1[keys],object2[keys]) === false) {
          return false;
        } else {
          return true;
        }
      }
      if (object1[keys] !== object2[keys]) {
        return false;
      }
    }
  }
  return true;
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);