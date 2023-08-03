function func(data) {
  // YOUR CODE HERE
  // return result from here

  let ans = data.reaction_list.map((reaction_l) => {
    let indexValues = reaction_l.pushback_indexes.map(
      (index) => data.pushbacks[index]
    );
    reaction_l["pushbacks"] = indexValues;
    return reaction_l;
  });

  return ans;
}

function main() {
  const data = require("./t7_HEIHACHI.json");
  const result = func(data);
  console.log(result);
}

main();
