const axios = require("axios");
const fs = require("fs");
const PDFParser = require("pdf-parse");

async function savePDFFile(url, filepath) {
  const response = await axios({
    url,
    responseType: "arraybuffer",
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
savePDFFile(
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  "./files/data.pdf"
)
  .then((filepath) => {
    console.log("File has saved in ", filepath);
  })
  .catch((err) => {
    console.log(err);
  });
