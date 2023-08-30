const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");
require("dotenv").config();
const app = express();
app.use(cors({ allowedHeaders: "https://jamesmugnoloportfolio.netlify.app" }));

app.use(express.json());
app.use("/api", apiRouter);

port = process.env.PORT | 5000;
app.listen(port);
