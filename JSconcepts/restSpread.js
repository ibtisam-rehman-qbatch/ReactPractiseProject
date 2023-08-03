// function sum(...numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4));

// Define a destructuring object with two regular variables and one rest variable:
// const { firstName, lastName, ...otherInfo } = {
//   firstName: "Oluwatobi",
//   lastName: "Sofela",
//   companyName: "CodeSweetly",
//   profession: "Web Developer",
//   gender: "Male",
// };

// // Invoke the otherInfo variable:
// console.log(otherInfo);

const myName = "Oluwatobi Sofela";

function spellName(a, b, c) {
  return a + b + c;
}

// console.log(spellName(...myName));

// console.log(spellName(...myName[3]));

// console.log(spellName([...myName]));

console.log(spellName({ ...myName }));
