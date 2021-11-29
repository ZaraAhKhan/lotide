// const assertEqual = require('./assertEqual');

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
module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// // console.log(findKeyByValue(bestTVShowsByGenre , "The Wire"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const bestRestaurantsByLocation = {
//   northYork: "Landwer Cafe",
//   midTown: "Dineen Cafe",
//   downTown: "Loveless Cafe"
// };

// assertEqual(findKeyByValue(bestRestaurantsByLocation, "Landwer Cafe"), "northYork");
// assertEqual(findKeyByValue(bestRestaurantsByLocation, "McDonalds"), undefined);
