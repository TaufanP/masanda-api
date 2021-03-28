import Express = require("express");
import moment = require("moment");

import Products from "../../models/Product";
import ResponseHelper from "../../helpers/ResponseHelper";
import V from "../../helpers/Vocab";
import cloudinary = require("../../config/cloudinary");

const CreateProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { barcode, product_name, price } = req["body"];
  const barcodeAlt = moment(Date.now()).format("YYYYMMDDhhmss");
  try {
    const checkProduct = await Products.findOne({ barcode });
    if (checkProduct !== null) {
      return ResponseHelper(res, 400, V.productExists, null, true);
    }
    try {
      const imgUpload =
        req.file !== undefined
          ? await cloudinary.uploader.upload(req.file.path)
          : "";
      const imageUrl = imgUpload == null ? "" : imgUpload.secure_url;
      const Added = new Products({
        barcode: barcode || barcodeAlt,
        product_name,
        price,
        product_image: imageUrl,
      });
      try {
        const saved = await Added.save();
        return ResponseHelper(res, 201, V.addedProduct, saved, true);
      } catch (error) {
        return ResponseHelper(
          res,
          400,
          V.addedProductFail,
          null,
          false,
          error.message
        );
      }
    } catch (error) {
      return ResponseHelper(
        res,
        400,
        V.failUploadImg,
        null,
        false,
        error.message
      );
    }
  } catch (error) {
    return ResponseHelper(res, 400, V.cantConnect, null, false, error.message);
  }
};

export default CreateProduct;
