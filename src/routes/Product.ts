import express = require("express");
import {
  CreateProduct,
  Products,
  Product,
  DeleteProduct,
  EditProduct,
} from "../controllers/Product";
import { AddProductValidation } from "../helpers/Validator";
import upload = require("../config/multer");

const router = express.Router();

router
  .post(
    "/add",
    upload.single("product_image"),
    AddProductValidation,
    CreateProduct
  )
  .get("/", Products)
  .get("/:barcode", Product)
  .post("/delete", DeleteProduct)
  .post(
    "/update",
    upload.single("product_image"),
    AddProductValidation,
    EditProduct
  );

export = router;
