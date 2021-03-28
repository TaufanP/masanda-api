import Express = require("express");
import ProductsModel from "../../models/Product";
import ResponseHelper from "../../helpers/ResponseHelper";
import V from "../../helpers/Vocab";

const DeleteProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { barcode } = req.body;
  try {
    const product = await ProductsModel.findOneAndDelete({ barcode });
    if (product == null) {
      return ResponseHelper(res, 200, V.getProductEmpty, null, true);
    }
    return ResponseHelper(res, 200, V.delProduct, product, true);
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
