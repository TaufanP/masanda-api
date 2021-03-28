import Express = require("express");
import cloudinary = require("../../config/cloudinary");

import ProductsModel from "../../models/Product";
import ResponseHelper from "../../helpers/ResponseHelper";
import V from "../../helpers/Vocab";

const EditProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { id, barcode, product_name, price } = req.body;
  try {
    const product = await ProductsModel.findByIdAndUpdate(id, {
      $set: {
        barcode,
        product_name,
        price,
      },
    });
    if (product == null) {
      return ResponseHelper(res, 200, V.getProductEmpty, null, true);
    }
    return ResponseHelper(res, 200, V.updateProduct, product, true);
  } catch (error) {
    return ResponseHelper(
      res,
      400,
      V.updateProductFail,
      null,
      false,
      error.message
    );
  }
};

export default EditProduct;
