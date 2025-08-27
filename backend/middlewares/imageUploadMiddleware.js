const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Allowed image types
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Please upload only JPG or PNG"), false);
  }
};

// Destination folder (always relative to project root)
const folderPath = path.join(
  process.cwd(),
  "public",
  "assets",
  "images",
  "profilePicture"
);

// Ensure folder exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath, { recursive: true });
}

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "");
    req.filePath = `/assets/images/profilePicture/${uniqueName}`; // relative URL
    cb(null, uniqueName);
  },
});

// Multer upload instance
const uploadFile = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // optional: 5MB max
});

module.exports = uploadFile;
