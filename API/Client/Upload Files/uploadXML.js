const axios = require("axios");
const fs = require("fs");
const formData = require("form-data");

async function uploadXML() {
  const filePath = "./files/image.png";
  try {
    const fileData = fs.readFileSync(filePath);
    const formdata = new formData();
    formdata.append("File", fileData, "image.png");
    const response = await axios.post(
      "http://localhost:3000/api/upload-file",
      formdata,
      {
        header: formdata.getHeaders(),
      }
    );
    if (response.status === 200) {
      console.log("File uploaded successfully!");
    } else {
      console.error("Failed to upload file.");
    }
  } catch (err) {
    console.log("Error while uploading file", err);
  }
}

uploadXML();
