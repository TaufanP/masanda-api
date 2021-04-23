import cloudinary = require("../config/cloudinary");
const sharp = require("sharp");
const fs = require("fs");

interface imageHandlerProps {
  imageUrl: string;
  image_name: string;
}
const imageHandler = (file: any) => {
  return new Promise<imageHandlerProps>(async (resolve, reject) => {
    await sharp(file.path)
      .rotate()
      .resize(240, 400)
      .toFile(`./compressed-uploads/${file.filename}`);
    const imgUpload =
      file !== undefined
        ? await cloudinary.uploader.upload(
            `./compressed-uploads/${file.filename}`
          )
        : "";
    fs.unlinkSync(file.path);
    fs.unlinkSync(`./compressed-uploads/${file.filename}`);
    const imageUrl = imgUpload == null ? "" : imgUpload.secure_url;
    const image_name = imgUpload == null ? "" : imgUpload.public_id;
    resolve({ imageUrl, image_name });
  });
};

export default imageHandler;
