async function func1() {
  let x = 1;
  x = 0;
  //   while (x < 900000000) {
  //     x++;
  //   }
  setTimeout(() => {
    console.log("In between");
  }, 1000);

  return 90;
}

function func2(callbackFunc) {
  let ans = callbackFunc().then(function (myAns) {
    console.log("I am called in 'then':", myAns);
  });

  console.log(ans, "I am called!");
}

func2(func1);

// In the given, if the callback function is run in async
