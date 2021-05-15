import Express = require("express");
import ProductsModel from "../../models/Product";
import ResponseHelper from "../../helpers/ResponseHelper";
import V from "../../helpers/Vocab";

const Product = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { barcode } = req.params;
  try {
    const product = await ProductsModel.findOne({ barcode });
    if (product == null)
      ResponseHelper(res, 200, V.getProductEmpty, null, true);
    return ResponseHelper(res, 200, V.getProduct, product, true);
  } catch (error) {
    return ResponseHelper(
      res,
      400,
      V.getProductFail,
      null,
      false,
      error.message
    );
  }
};

export default Product;
