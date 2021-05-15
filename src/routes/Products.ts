import express = require("express");
import {
  CreateProduct,
  Products,
  Product,
  DeleteProduct,
  EditProduct,
  SearchProducts,
} from "../controllers/Products";
import { AddProductValidation } from "../helpers/Validator";
import upload = require("../config/multer");

const router = express.Router();

router
  .post(
    "/",
    upload.single("product_image"),
    AddProductValidation,
    CreateProduct
  )
  .get("/", Products)
  .get("/:barcode", Product)
  .delete("/:barcode", DeleteProduct)
  .put("/", upload.single("product_image"), AddProductValidation, EditProduct)
  .post("/search", SearchProducts);

export = router;
