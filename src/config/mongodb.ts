import mongoose = require("mongoose");

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("⚡️[mongoo]: Connected to DB!")
);

module.exports = mongoose;
