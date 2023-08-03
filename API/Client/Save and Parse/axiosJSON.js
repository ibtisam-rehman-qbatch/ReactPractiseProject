const axios = require("axios");
const fs = require("fs");

async function saveJSONFile(url, filepath) {
  const response = await axios({
    url,
  });
  console.log(response.data);
  return new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(filepath);

    writeStream.on("open", () => {
      // Writing the data to the file
      writeStream.write(JSON.stringify(response.data));
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

saveJSONFile(
  "https://support.oneskyapp.com/hc/en-us/article_attachments/202761727/example_2.json",
  "./files/data.json"
)
  .then((filepath) => {
    console.log("File has saved in ", filepath);
  })
  .catch((err) => {
    console.log(err);
  });
