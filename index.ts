require("dotenv/config");
require("./src/config/mongodb");

import express = require("express");
import morgan = require("morgan");
import router = require("./src/routes");

const app: express.Application = express();
const port: string | number = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.get("/", async (req, res) => {
  try {
    res.send(`
      MASANDA API
      <br>
      ==================================
      <br>
      Author: <a href='https://github.com/TaufanP' target='_blank'>Taufan Prihantoro</a> as Fullstack MERN Developer.
    `);
  } catch (err) {
    res.status(400).json({
      message: "Error API",
      data: err,
      isSuccess: false,
    });
  }
});
app.use("/api/v1", router);

// default response
app.use(
  (
    error: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    const isSuccess = error.isSuccess;
    res.status(status).json({ isSuccess, message, data });
  }
);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
