// Lessons from 79>>>85 Assignments
// Assignment 3
let a = 1;
let threeNums = {
  b: 2,
  c: 3,
  d: 4
};
let twoNums = {
  e: 5,
  f: 6
};

// Solution
let finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);
// Required Output
/*
a: 1
b: 2
c: 3
d: 4
e: 5
f: 6
*/
