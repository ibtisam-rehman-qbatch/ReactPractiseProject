// function getCities(data) {
//   let [user1, user2] = data;
//   let [addr1, addr2] = [user1.addresses, user2.addresses];
//   let city1 = [addr1.city];

// const { reject } = require("lodash");

//   console.log(addr1);
//   console.log(addr2);
// }

// let data = [
//   {
//     name: "john",
//     age: 28,
//     addresses: [
//       {
//         st: "hebrew 01 pallmal square",
//         city: "New York",
//       },
//       {
//         st: "state 01 jumeira",
//         city: "Dubai",
//       },
//     ],
//   },
//   {
//     name: "jacob",
//     age: 30,
//     addresses: [
//       {
//         st: "st 10 H20",
//         city: "Islamabad",
//       },
//       {
//         st: "st 05 EZ Road",
//         city: "Old London",
//       },
//     ],
//   },
// ];

// // console.log(getCities(data));
// getCities(data);

// function fetchUserData() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve({ name: "John Doe", age: 30 }), 1000);
//   });
// }

// function fetchUserPosts() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1500);
//   });
// }

// function fetchUserFriends() {
//   return new Promise((resolve, reject) => {
//     reject("noo");
//     setTimeout(() => resolve(["Friend 1", "Friend 2", "Friend 3"]), 2000);
//   });
// }

// // Using Promise.all to execute multiple promises concurrently
// Promise.all([fetchUserData(), fetchUserPosts(), fetchUserFriends()])
//   .then(([userData, userPosts, userFriends]) => {
//     console.log("User Data:", userData);
//     console.log("User Posts:", userPosts);
//     console.log("User Friends:", userFriends);
//   })
//   .catch((error) => {
//     console.error("Error occurred:", error);
//   });

async function createPromise(responseTime, success = true) {
  return new Promise(async (myResolve, myReject) => {
    if (success) {
      setTimeout(() => {
        myResolve("Here you go!");
      }, responseTime);
    } else {
      const err = new Error("You are into problem");
      err.name = "Testing";
      myReject(err);
    }
  });
}

let firstPromise = createPromise(1000, false)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally section ran");
  });
