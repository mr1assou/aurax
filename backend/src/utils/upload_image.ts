import multer from 'multer';
import path from 'path';

// Define storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets'); // Make sure the "assets" folder exists
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

export const upload = multer({ storage ,limits: {
    fileSize: 1 * 1024 * 1024 * 1024, // 1 GB in bytes
  },});
