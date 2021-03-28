import Express = require("express");
import ProductsModel from "../../models/Product";
import ResponseHelper from "../../helpers/ResponseHelper";
import V from "../../helpers/Vocab";

const Products = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  try {
    const products = await ProductsModel.find();
    return ResponseHelper(res, 200, V.getProducts, products, true);
  } catch (error) {
    return ResponseHelper(
      res,
      400,
      V.getProductsFail,
      null,
      false,
      error.message
    );
  }
};

export default Products;
