const tail = require('../tail');
const assertEqual = require('../assertEqual');
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const solution = tail(["Hello"]);
assertEqual(solution.length , 0);
const solution2 = (tail([]));
assertEqual(solution2.length , 0);