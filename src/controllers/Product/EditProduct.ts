import Express = require("express");
import cloudinary = require("../../config/cloudinary");

import ProductsModel from "../../models/Product";
import ResponseHelper from "../../helpers/ResponseHelper";
import V from "../../helpers/Vocab";
import imageHandler from "../../helpers/ImageHandler";

const _uploadingWithImage = async ({
  file,
  id,
  barcode,
  product_name,
  price,
}) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { imageUrl, image_name } = await imageHandler(file);
      const product = await ProductsModel.findByIdAndUpdate(id, {
        $set: {
          barcode,
          product_name,
          price,
          product_image: imageUrl,
          image_name,
        },
      });
      resolve(product);
    } catch (error) {
      reject(error);
    }
  });
};

const EditProduct = async (
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) => {
  const { id, barcode, product_name, price } = req.body;
  try {
    const product = await ProductsModel.findById(id);

    if (product == null) {
      return ResponseHelper(res, 200, V.getProductEmpty, null, true);
    }

    if (req.file == undefined) {
      const productUpdate = await ProductsModel.findByIdAndUpdate(id, {
        $set: {
          barcode,
          product_name,
          price,
        },
      });
      return ResponseHelper(res, 200, V.updateProduct, productUpdate, true);
    }

    if (product.image_name == undefined) {
      const productUpdateNewImage = _uploadingWithImage({
        file: req.file,
        barcode,
        product_name,
        price,
        id,
      });
      return ResponseHelper(
        res,
        200,
        V.updateProduct,
        productUpdateNewImage,
        true
      );
    }

    const { result, error } = await cloudinary.uploader.destroy(
      product.image_name
    );
    if (result == "ok") {
      const product = _uploadingWithImage({
        file: req.file,
        barcode,
        product_name,
        price,
        id,
      });
      return ResponseHelper(res, 200, V.updateProduct, product, true);
    }
    if (error) throw new Error(V.failDeleteImg);
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
