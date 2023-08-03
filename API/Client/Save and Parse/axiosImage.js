const axios = require("axios");
const fs = require("fs");

async function downloadImg(url, filepath) {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });
  return new Promise((resolve, reject) => {
    response.data
      .pipe(fs.createWriteStream(filepath))
      .on("error", reject)
      .once("close", () => resolve(filepath));
  });
}

downloadImg(
  "https://freepik.cdnpk.net/img/favicons/favicon-96x96.png?v=2018082101",
  "./files/image.png"
)
  .then((filepath) => {
    console.log("Image has saved in ", filepath);
  })
  .catch((err) => {
    console.log(err);
  });
