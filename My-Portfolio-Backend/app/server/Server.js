const express = require("express");
const cors = require("cors");
require("dotenv").config();
const apiRouter = require("./routes");

const app = express();
app.use("/api", apiRouter);
app.use(cors({ origin: "https://jamesmugnoloportfolio.netlify.app" }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
});
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT);
