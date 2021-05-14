import { body } from "express-validator";
import V from "./Vocab";

const product_name = body("product_name")
  .isAlpha()
  .isLength({ max: 60 })
  .withMessage(V.pNameErr)
  .trim();

const price = body("price")
  .isFloat()
  .isLength({ max: 60 })
  .withMessage(V.priceErr)
  .trim();

export const AddProductValidation = [product_name, price];
