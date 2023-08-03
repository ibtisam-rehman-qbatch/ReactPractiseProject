function* generator(x) {
  console.log(x);
  let { y1, y2 } = yield "First";
  console.log("y1: ", y1, "y2: ", y2);
  //   yield;
}

let gen = generator(12);

console.log(gen.next());
gen.next({ y1: "N1", y2: "N2" });
