const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const port = 3000; // Choose any available port you want

// Middleware to parse incoming JSON data
app.use(express.json());

const upload = multer({ dest: "received/" });

// Sample data for the API
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

// API endpoints
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/upload-file", upload.single("File"), (req, res) => {
  const File = req.file;
  console.log("File received : ", File);

  const uploadedFilePath = `received/${File.originalname}`;
  fs.renameSync(File.path, uploadedFilePath); // Rename the file with the original filename

  res.status(200).json({ message: "File uploaded successfully!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
