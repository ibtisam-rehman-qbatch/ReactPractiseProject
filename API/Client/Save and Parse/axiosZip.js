const axios = require("axios");
const fs = require("fs");

async function saveZipFile(url, filepath) {
  const response = await axios({
    url,
  });
  console.log(response.data);
  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(filepath);

    writeStream.on("open", () => {
      // Writing the data to the file
      writeStream.write(response.data);
      writeStream.end(); // Close the write stream after writing
    });

    writeStream.on("error", (err) => {
      reject(err);
    });

    writeStream.on("finish", () => {
      resolve(filepath);
    });
  });
}

saveZipFile(
  "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-zip-file.zip",
  "./files/data.zip"
)
  .then((filepath) => {
    console.log("File has saved in ", filepath);
  })
  .catch((err) => {
    console.log(err);
  });
