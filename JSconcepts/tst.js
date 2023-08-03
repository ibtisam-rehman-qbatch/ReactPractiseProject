// const students = [
//   { name: "Quincy", grade: 96 },
//   { name: "Jason", grade: 84 },
//   { name: "Alexis", grade: 100 },
//   { name: "Sam", grade: 65 },
//   { name: "Katie", grade: 90 },
// ];
// const x = { 2: 23 };
// students.reduce((arr, row) => (row.grade > 90 ? [...arr, row.name] : arr), []);
// students.reduce((arr, { grade, name }) => grade > 90 ? [...arr, name] : arr, []);

// students.filter((x) => {
//   if (x.grade > 90) {
//     console.log(x.name);
//   }
// });
// let construct = x.constructor;
// let arr = Array(5);
// console.log(construct);
let arr = Array.from(Array(6).keys());
// console.log(arr);
// arr.copyWithin(0, -2, -1);
// console.log(arr);
// console.log(arr.fill("0"));
// console.log(arr.find((x) => x.value == 9)); // returns element
// console.log(arr.findIndex((x) => x.value == 9)); // returns index
// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];

// console.log(myArr);
// // console.log(myArr.flat(2));
// console.log(arr.flatMap((x) => [x * 2]));
// console.log(arr.map((x) => [x * 2]));

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

// console.log(
//   personnel.reduce(
//     (totalScore, user) =>
//       user.isForceUser
//         ? totalScore + user.pilotingScore + user.shootingScore
//         : totalScore,
//     0
//   )
// );

const input = [1, -4, 12, 0, -3, 29, -150];

// console.log(input.reduce((sum, val) => (val > 0 ? sum + val : sum), 0));

// const fruits = ["Apple", "Orange", "pp", "Mango"];
// // console.log(fruits.lastIndexOf("Apple"));
// console.log(fruits);
// // fruits.length = 2;
// // console.log(fruits);=

// Array.prototype.zro = function () {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = "O";
//   }
// };
// fruits.zro();
// console.log(fruits);

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
// console.log(fruits.reduce((inVal, val) => inVal + val, ""));
// console.log(fruits);
// fruits.splice(3, 1, "Kiwi");
// console.log(fruits);
// let f2 = fruits.valueOf();
// f2[0] = "333";
// console.log(f2);
// console.log(fruits);
function getCities(users) {
  let addresses = users.map((user) => user.addresses);
  let cities = addresses.flat().map((address) => address.city);
  return cities;
}
let users = [
  {
    name: "john",
    age: 28,
    addresses: [
      {
        st: "hebrew 01 pallmal square",
        city: "New York",
      },
      {
        st: "state 01 jumeira",
        city: "Dubai",
      },
    ],
  },
  {
    name: "jacob",
    age: 30,
    addresses: [
      {
        st: "st 10 H20",
        city: "Islamabad",
      },
      {
        st: "st 05 EZ Road",
        city: "Old London",
      },
    ],
  },
];
// console.log(getCities(users));

// let obj = {
//   a: 1,
// };
// let obj2 = Object.create(obj);
// let obj3 = Object.create(obj);
// console.log(obj2.a);
// console.log(first)
// console.log(arr);
// console.log(arr.toReversed());

const inputStr = "Every developer likes to mix kubernetes and javascript";

// console.log(
//   inputStr
//     .split(/\W+/)
//     .map((word) => word[0].concat(word.length - 2, word[word.length - 1]))
//     .join(" ")
// );
// let x = Array.from("abcjsb");
// console.log(x);

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] },
];

// console.log(
//   students.reduce((accumulator, student, index, arr)=>{
//     student.scores.
//   })
// );

// console.log(
//   students
//     .map((student) => {
//       return {
//         name: student.name,
//         average:
//           student.scores.reduce(
//             (accumulator, score) => accumulator + score,
//             0
//           ) / student.scores.length,
//       };
//     })
//     .filter((x) => x.average > 90)
// );

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];
console.log(
  products.reduce((accumulator, value, index, arr) => {
    console.log(products);
    console.log(arr);
  })
);
// console.log(
//   products.reduce((category, product) => {
//     if (!category[product.category]) {
//       category[product.category] = products.reduce((accumulator, prod) => {
//         if (prod.category == product.category) {
//           accumulator = accumulator + prod.price;
//         }
//         return accumulator;
//       }, 0);
//     }

//     return category;
//   }, {})
// );
