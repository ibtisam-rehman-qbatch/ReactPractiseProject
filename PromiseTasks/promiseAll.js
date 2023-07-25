let haveDegree = new Promise(function (resolve, reject) {
  let deg = true;
  if (deg) {
    resolve("Yes");
  } else {
    reject("Noo");
  }
});

let haveSkills = new Promise(function (resolve, reject) {
  let skill = false;
  if (skill) {
    resolve("Yes");
  } else {
    reject("Noo");
  }
});
let haveMoney = new Promise(function (resolve, reject) {
  let money = true;
  if (money) {
    resolve("Yes");
  } else {
    reject("Noo");
  }
});
async function promiseAll() {
  let finalSol = await Promise.all([haveDegree, haveSkills, haveMoney])
    .then((res) => {
      console.log("Worth status: ", res);
    })
    .catch((res) => {
      console.log("Not worthy: ", res);
    })
    .finally(() => {
      console.log("Nice to meet you!");
    });
  console.log("Finished: ", finalSol);
}

promiseAll();
