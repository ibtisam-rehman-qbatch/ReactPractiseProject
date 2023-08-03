const axios = require("axios");
const fs = require("fs");
const { parseString } = require("xml2js");

async function saveXMLFile(url, filepath) {
  const response = await axios({
    url,
  });
  parseString(response.data, (jsonErr, jsonData) => {
    if (jsonErr) {
      console.log(jsonErr);
      return;
    }
    console.log(jsonData);
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
saveXMLFile("https://www.w3schools.com/xml/note.xml", "./files/data.xml")
  .then((filepath) => {
    console.log("File has saved in ", filepath);
  })
  .catch((err) => {
    console.log(err);
  });
