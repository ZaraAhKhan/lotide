const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  return eqObjects(actual, expected) === true ? console.log(`👍 👍 👍 Objects ${inspect(actual)} and ${inspect(expected)} are equal`) :
    console.log(`👎👎👎 Objects ${inspect(actual)} and ${inspect(expected)} are not equal`);
};

module.exports = assertObjectsEqual;


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertObjectsEqual(ab,ba);
// assertObjectsEqual(ab, abc);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// assertObjectsEqual(cd, dc);
// assertObjectsEqual(cd, cd2);