import { Schema, model, Document } from "mongoose";

export interface Product {
  barcode: string;
  product_name: string;
  price: number;
  product_image: string;
}

const ProductSchema = new Schema({
  barcode: {
    type: String,
    require: false,
  },
  product_name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  product_image: {
    type: String,
    require: false,
  },
});

export default model<Product & Document>("products", ProductSchema);
