async function predicate(timeTaken) {
  return new Promise(
    (myResolve, myReject) => {
      //   let random_boolean = Math.random() < 0.5;
      //   if (true) {
      setTimeout(() => {
        return myResolve(timeTaken);
      }, timeTaken);
    }
    //   else {
    //     myReject(false);
    //   }
    // }
  );
}
var curr = 0;

function addNew(arr, lim, inProg, pred) {
  while (inProg.length < lim && arr.length != 0) {
    inProg.push(pred(arr[curr] * 1000));
    curr++;
    arr.pop();
  }
}
async function func(arr, conLimit = 5, pred) {
  let inProg = [];
  while (arr.length != 0) {
    addNew(arr, conLimit, inProg, pred);
    await Promise.race(inProg).then((res) => {
      console.log(res);
    });

    inProg = [];
  }

  console.log("Finished");
}

let arr = [1, 2, 3];
let cl = 5;
arr = [...arr, ...arr, ...arr, ...arr];
func(arr, cl, predicate);
