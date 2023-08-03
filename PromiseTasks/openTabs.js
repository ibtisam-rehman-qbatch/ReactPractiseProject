const terminalCommand = require("child_process").exec;
const axios = require("axios");

async function openLink() {
  return new Promise(async (resolve, reject) => {
    // terminalCommand("open https://www.google.com");
    await axios.get("https://www.google.com");
    resolve();
  });
}

async function openAll(totalTabs) {
  let allLinks = [];
  for (let i = 0; i < totalTabs; i++) {
    allLinks.push(openLink());
  }

  console.log(allLinks);

  await Promise.all(allLinks).then((res) => {
    // console.log("Opened");
  });
}

let totalTabs = 10000;

openAll(totalTabs);
