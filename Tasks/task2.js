// function func(data) {
//   // YOUR CODE HERE
//   // return result from here
//   let ans = data.requirements.reduce((result, requirement) => {
//     if (requirement.req < 32768) {
//       if (!result[requirement.req]) {
//         result[requirement.req] = 1;
//       } else {
//         result[requirement.req]++;
//       }

//     }
//     return result;
//   }, {});
//   return ans;
// }
// function main() {
//   const data = require("./t7_HEIHACHI.json");
//   const result = func(data);
//   console.log(result);
// }

// main();

function func(data) {
  // YOUR CODE HERE
  // return result from here
  let ans = data.requirements.reduce((result, requirement) => {
    if (requirement.req < 32768)
      result[requirement.req] = (result[requirement.req] || 0) + 1;
    return result;
  }, {});
  return ans;
}
function main() {
  const data = require("./t7_HEIHACHI.json");
  const result = func(data);
  console.log(result);
}

main();
