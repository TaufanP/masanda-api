import Express = require("express");
import cloudinary = require("../../config/cloudinary");

import ProductsModel from "../../models/Product";
import ResponseHelper from "../../helpers/ResponseHelper";
import V from "../../helpers/Vocab";

const DeleteProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { barcode } = req.params;
  try {
    const product = await ProductsModel.findOneAndDelete({ barcode });
    if (product == null) {
      return ResponseHelper(res, 200, V.getProductEmpty, null, true);
    }
    if (!product.product_image || !product.image_name) {
      return ResponseHelper(res, 200, V.getProductEmpty, null, true);
    }
    const { result, error } = await cloudinary.uploader.destroy(
      product.image_name
    );
    if (result == "ok") {
      return ResponseHelper(res, 200, V.delProduct, product, true);
    }
    if (result == "not found") {
      return ResponseHelper(res, 200, V.emptyDeleteImg, product, true);
    }
    if (error) throw new Error(V.failDeleteImg);
  } catch (error) {
    return ResponseHelper(
      res,
      400,
      V.delProductFail,
      null,
      false,
      error.message
    );
  }
};

export default DeleteProduct;
