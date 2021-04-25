import Express = require("express");
import ProductsModel from "../../models/Product";
import ResponseHelper from "../../helpers/ResponseHelper";
import V from "../../helpers/Vocab";

const SearchProducts = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { keyword, field = "product_name", order = 1 } = req.body;
  try {
    const products = await ProductsModel.find({
      product_name: new RegExp(keyword, "i"),
    }).sort([[field, order]]);
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

export default SearchProducts;
