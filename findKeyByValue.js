const assertEqual = function(actual,expected) {
  (actual === expected ? console.log(`👍 👍 👍 Assertion Passed:${actual} === ${expected}`) : console.log(`👎👎👎Assertion Failed: ${actual} !== ${expected}`));
};

const findKeyByValue = function(objectToSearch,valueToMatch) {
  let keyValue;
  const keysArray = Object.keys(objectToSearch);
  for (let keys of keysArray) {
    if (objectToSearch[keys] === valueToMatch) {
      keyValue = keys;
    }
  }
  return keyValue;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
// console.log(findKeyByValue(bestTVShowsByGenre , "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const bestRestaurantsByLocation = {
  northYork: "Landwer Cafe",
  midTown: "Dineen Cafe",
  downTown: "Loveless Cafe"
};

assertEqual(findKeyByValue(bestRestaurantsByLocation, "Landwer Cafe"), "northYork");
assertEqual(findKeyByValue(bestRestaurantsByLocation, "McDonalds"), undefined);
