// First scenrio: Let's check if the promises block the execution

// Definition of Promise

let myCar = new Promise(function (myResolve, myReject) {
  let isFilled = true;
  if (isFilled) {
    setTimeout(() => {
      myResolve();
    }, 3000);
  } else {
    myReject();
  }
});

testing = async () => {
  await myCar
    .then(function () {
      console.log("Successfull Execution!");
    })
    .catch(function () {
      console.log("Got an exception!");
    });

  return true;
};

let val = testing();

console.log(val);
