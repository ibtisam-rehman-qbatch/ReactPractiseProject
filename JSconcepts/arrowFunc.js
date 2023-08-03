function simple() {
  console.log(arguments);
}
let arrow = () => {
  console.log(arguments);
};

// function global() {
//   let x = 4;
//   let arrow = () => {
//     console.log(this.x);
//   };

// }
// function main() {
//   //   let y = 67;
//   //   simple();
//   arrow();
// }

// main();

// arrow("1, 2, 3");
let arr = [1, 3, 43, 5, 6, 7];
// console.log("before del: ", arr);
// delete arr;
// console.log("after del: ", arr);

// let join = arr.join(",");
// console.log(join);

// console.log(arr.toString());
// let ele = arr.toString();
// console.log(typeof ele[2]);

let arr2 = [
  [1, 2],
  [4, 3],
  [5, 9],
];
// console.log(arr2.flat());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
// fruits.splice(2, 1, "kk", "ll");
// fruits.splice(0, 1);
// console.log(fruits);
let newFruits = fruits.slice(1, 3);
console.log(newFruits);
