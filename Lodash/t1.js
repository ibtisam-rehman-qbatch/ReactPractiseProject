let _ = require("lodash");

// let sortedArr = _.reduce(
//   arr,
//   (res, val, index, unsortedArr) => {
//     const minVal = _.min(unsortedArr);
//     res.push(minVal);
//     _.drop(unsortedArr, minVal);
//     return unsortedArr;
//   },
//   []
// );

// let arr = [2, 3, "4", 22, "b", 4];
// let sortedArr = _.sortBy(arr, (x) => x);

// console.log(sortedArr[1]);

// let sentence = _.split("The quick brown fox jumps over the lazy dog", " ");

// let longestWord = _.reduce(
//   sentence,
//   (longest, val) => {
//     if (longest.length < val.length) {
//       longest = val;
//     }
//     return longest;
//   },
//   ""
// );
// console.log(longestWord);

// let s1 = _.split("vvnn", ""),
//   s2 = _.split("nvnv", "");

// let ans = _.difference(s1, s2);
// if (ans.length == 0) {
//   console.log("anagrams");
// } else {
//   console.log("Not anagrams");
// }

// let arr = [1, 2, 3, 5, 6, 7, 8];
// let n = 10;
// let temp = _.reduce(
//   arr,
//   (sequence, val) => {
//     sequence[val] = true;
//     return sequence;
//   },
//   Array.from(Array(n), (x) => false)
// );
// let ans = _.filter(temp, (val, index) => {
//   if (!val) {
//     console.log(index + 1);
//   }
// });

// console.log(_.intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// console.log(_.compact([0, 1, "", "hello", false, NaN, undefined, null]));

// let word = "stress";
// let run = true;
// _.forEach(word, (x, index) => {
//   if (_.includes(word, x, index + 1) == false && run) {
//     console.log(x, " is the first non-repeating character");
//     run = false;
//   }
// });

// const object1 = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const object2 = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const object3 = {
//   name: "Jane",
//   age: 25,
//   address: {
//     city: "Los Angeles",
//     country: "USA",
//   },
// };

// if (_.isEqual(object1, object2)) {
//   console.log("Obj1 and Obj2 are equal");
// } else {
//   console.log("Obj1 and Obj2 are not equal");
// }
// if (_.isEqual(object1, object3)) {
//   console.log("Obj1 and Obj3 are equal");
// } else {
//   console.log("Obj1 and Obj3 are not equal");
// }
// if (_.isEqual(object2, object3)) {
//   console.log("Obj2 and Obj3 are equal");
// } else {
//   console.log("Obj2 and Obj3 are not equal");
// }

console.log(
  _.sortBy(
    [2, 3, "4", 22, "b", 4],
    [
      (currentIndex) => {
        return currentIndex;
      },
    ]
  )
);
