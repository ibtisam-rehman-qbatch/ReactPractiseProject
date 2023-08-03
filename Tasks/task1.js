function func(data) {
  // YOUR CODE HERE
  // return result from here
  let res = data["moves"].reduce((result, move) => {
    if (!result[move.u15]) {
      result[move.u15] = [];
    }
    result[move.u15].push({ name: move.name, index: move.index });
    return result;
  }, {});

  return res;
}

function main() {
  const data = require("./t7_HEIHACHI.json");
  const result = func(data);
  console.log(result);
}

main();
