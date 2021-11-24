const without = function(sourceArr,itemsToRemoveArr) {
  let resultArr = [];
  resultArr = resultArr.concat(sourceArr);
  for (let j = 0; j < itemsToRemoveArr.length; j++) {
    if (resultArr.includes(itemsToRemoveArr[j])) {
      let i = resultArr.indexOf(itemsToRemoveArr[j]);
      resultArr.splice(i,1);
    }
  }
  
  return resultArr;
};
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


assertArraysEqual(without([1, 2, 3], [1]), [2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1" , "2"]); // => ["1", "2"]
assertArraysEqual(without(["1", "2", "3"], [1, "2", "3"]),["1"]); // => ["1"]
assertArraysEqual(without(["1", "2", "3"], ["3", "2"]),["1"]); // => ["1"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

