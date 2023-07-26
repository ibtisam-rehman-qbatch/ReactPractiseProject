async function func1() {
  let x = 3;

  return true;

  //   return 3;
}

func1()
  .then((x) => {
    console.log("Returned value: ", 3);
  })
  .catch((x) => {
    console.log("Rejected: ", x);
  });

console.log("End of program");
