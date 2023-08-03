const axios = require("axios");
const fs = require("fs");

async function saveCSVFile(url, filepath) {
  const response = await axios({
    url,
  });
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

saveCSVFile(
  "https://cdn.wsform.com/wp-content/uploads/2020/06/industry.csv",
  "./files/data.csv"
)
  .then((filepath) => {
    console.log("File has saved in ", filepath);
  })
  .catch((err) => {
    console.log(err);
  });
