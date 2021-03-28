import express = require("express");
import {
  CreateProduct,
  Products,
  Product,
  DeleteProduct,
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
  .post("/delete", DeleteProduct);

export = router;
