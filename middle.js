const middle = array => {
  let middleArray = [];
  if (array.length === 1 || array.length === 2) {
    middleArray  = [];
  } else if (array.length % 2 !== 0) {
    const middleIndex = (array.length - 1) / 2;
    middleArray.push(array[middleIndex]);
  } else if (array.length % 2 === 0) {
    const middleElement = (array.length) / 2;
    middleArray = array.slice((middleElement - 1), (middleElement + 1));
  }
  return middleArray;
};

module.exports = middle;

