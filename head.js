const assertEqual = require('./assertEqual');
const head = (array) => {
  let actual;
  (array === [] ? actual = undefined : actual =  array[0]);
  return actual;

};
module.exports = head;
