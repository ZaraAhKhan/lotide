const eqObjects = function(object1, object2) {
  let result = true;
  const obj1Arr = Object.keys(object1);
  const obj2Arr = Object.keys(object2);
  if (obj1Arr.length !== obj2Arr.length) {
    result = false;
  } else {
    for (let keys of obj1Arr) {
      if (Array.isArray(object1[keys])) {
        if (eqArrays(object1[keys],object2[keys]) === false) {
          result =  false;
        }
      } else {
        if (object1[keys] !== object2[keys]) {
          result =  false;
        }
      }
    }
  }
  return result;
};

const eqArrays = (arr1, arr2) => {
  let result = true;
  if (arr1.length !== arr2.length) {
    result = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result =  false;
    }
  }
  return result;
};

const assertEqual = function(actual,expected) {
  (actual === expected ? console.log(`👍 👍 👍 Assertion Passed:${actual} === ${expected}`) : console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`));
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual((eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })),true); // => true

// assertEqual((eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })),true); // => false
// assertEqual((eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })),false); // => false