// Load the full build.
let _ = require("lodash");

// // Chunk is used to make chunks of array
// console.log(_.chunk(["a", "b", "c", "d"], 2)); // Output: [ [ 'a', 'b' ], [ 'c', 'd' ] ]

// // console.log(_.chunk([["a", "b", "c", "d"][("a", "b", "c", "d")]], 2)); // It returned undefined

// // Compact is used to remove Neg values from array
// console.log(_.compact([0, 1, 1, 0, 1, "34"])); // Output: [ 1, 1, 1 ]

// let users = [
//   { user: "barney", age: 36, active: true },
//   { user: "fred", age: 40, active: false },
//   { user: "Ibtisam", age: 40, active: true },
//   { user: "Ibtisam", age: 12, active: true },
// ];
let singleUser = {
  name: "ibti",
  email: "ibti@me.com",
};
let otherProp = {
  gender: "mail",
  position: "ASE",
};
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = [1, 2, 7, 8, 11];

// Filter method

// _.filter(users, function (x) {
//   console.log(x.user);
// });

// console.log(_.filter(users, { user: "Ibtisam" }));
// console.log(_.filter(users, "active"));

// Find method

// console.log(_.find(users, { user: "Ibtisam" }));
// console.log(_.find(users, "active"));

// FindLast method
// console.log(_.findLast(users, "active"));

// Method to shuffle the array

// console.log(_.shuffle([1, 2, 3, 4, 5, 6, 7, 8]));

// Sort the array of objects according to given element
// console.log(_.orderBy(users, "age"));

// Slice the array elements from start
// console.log(_.take(arr, 3));

// Select elements of first array, which is not included in second array
// console.log(_.difference(arr, arr2));

// Select elements of array, which are present in both arrays
// console.log(_.intersection(arr, arr2));

// Check if the object is empty or have any object
// console.log(_.isEmpty(users));
// console.log(_.isEmpty({}));

// It works same as spread operator and assign value to other object
// console.log(_.assign(singleUser, users[0], otherProp));

let score = {
  PF: 32,
  CS: 64,
  IS: 11,
};

// Iterate over the collection to add the score of all subjects

// let totalScore = _.reduce(score, (res, subScore, subName) => res + subScore, 0);
// console.log("Total Score: ", totalScore);
// console.log(_.drop([1, 2, 3, 4]));

let users = [
  { user: "barney", active: true },
  { user: "fred", active: true },
  { user: "pebbles", active: false },
  { user: "pebbles", active: true },
];
// console.log(users);
// console.log(
//   _.dropRightWhile(users, function (o) {
//     return !o.active;
//   })
// );

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];

// console.log(_.differenceWith(objects, [{ x: 1, y: 2 }], _.isEqual));
// console.log(_.dropWhile(users, "active"));

let arr = [1, [2, [3, [4]], 5]];
// console.log(arr)
// console.log(first)

// var array = [
//   { x: 1, y: 2 },
//   { x: 3, y: 4 },
//   { x: 5, y: 4 },
// ];

// _.pullAllWith(array, [{ x: 3, y: 4 }], _.isEqual);
// console.log(array);

// console.log(_.shuffle({ a: 2, b: 4, c: 43 }));

var array = [
  { dir: "left", code: 97 },
  { dir: "up", code: 97 },
  { dir: "right", code: 100 },
];

// console.log(
//   _.keyBy(array, function (o) {
//     console.log(o.code);
//     return String.fromCharCode(o.code);
//   })
// );
