// Load the full build.
let _ = require("lodash");

// // Chunk is used to make chunks of array
// console.log(_.chunk(["a", "b", "c", "d"], 2)); // Output: [ [ 'a', 'b' ], [ 'c', 'd' ] ]

// // console.log(_.chunk([["a", "b", "c", "d"][("a", "b", "c", "d")]], 2)); // It returned undefined

// // Compact is used to remove Neg values from array
// console.log(_.compact([0, 1, 1, 0, 1, "34"])); // Output: [ 1, 1, 1 ]

let users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "Ibtisam", age: 40, active: true },
  { user: "Ibtisam", age: 40, active: true },
];

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

console.log(
  _.flatMap(users, function (x) {
    console.log(x);
  })
);
// console.log(users);
