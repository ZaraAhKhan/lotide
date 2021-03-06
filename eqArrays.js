const eqArrays = (arr1, arr2) => {
  let result = true;
  if (arr1.length !== arr2.length) {
    result =  false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      result = eqArrays(arr1[i],arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

module.exports = eqArrays;
