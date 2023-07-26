let prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("No");
  }, 0);
});

let prom2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("Yes");
  }, 0);
});

let prom3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Yes");
  }, 0);
});

// Promise.any([prom1, prom2, prom3])
//   .then((x) => {
//     console.log(x);
//   })
//   .catch((x) => {
//     console.log(x, "ERROR");
//   });

prom3
  .then((x) => {
    console.log("Level 1 Success");
    prom3
      .then((y) => {
        console.log("Level 2 promise Success");
      })
      .catch((y) => {
        console.log("Level 2 rejection");
      });
  })
  .catch((x) => {
    console.log("Level 1 rejection");
  });
