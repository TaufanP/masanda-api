import express = require("express");
import product = require("./Product");
import products = require("./Products");

const Router = express.Router();

// Default
Router.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("See documentation");
  }
);

// Routes
Router.use("/product", product);
Router.use("/products", products);

export = Router;
