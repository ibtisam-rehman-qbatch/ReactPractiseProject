async function predicate(currElement, timeTaken = 3000) {
  return new Promise(async (resolve) => {
    setTimeout(() => {
      return resolve(currElement);
    }, timeTaken);
  });
}

let currCustomer = 0;
function addNew(arr, lim, inProg, predicate) {
  while (inProg.length < lim && arr.length != 0) {
    inProg.push(predicate(currCustomer));
    currCustomer++;
    arr.pop();
  }
}
async function utility(arr, predicate, concurrency = 5) {
  let inProg = [];
  while (arr.length != 0) {
    addNew(arr, concurrency, inProg, predicate);
    await Promise.allSettled(inProg).then((res) => {
      console.log(res);
    });

    inProg = [];
  }

  console.log("Finished");
}

let arr = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
let concurrency = 5;
utility(arr, predicate, concurrency);
