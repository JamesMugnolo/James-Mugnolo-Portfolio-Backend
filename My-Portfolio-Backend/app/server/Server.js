const express = require("express");
const cors = require("cors");
require("dotenv").config();
const apiRouter = require("./routes");

const app = express();
app.use("/api", apiRouter);
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT);
