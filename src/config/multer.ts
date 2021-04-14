import multer = require("multer");
import path = require("path");

export = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
  }),
  // limits: { fileSize: 819200 },
  fileFilter: (req: any, file: any, cb: any) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not suported"), false);
      return;
    }
    cb(null, true);
  },
});
