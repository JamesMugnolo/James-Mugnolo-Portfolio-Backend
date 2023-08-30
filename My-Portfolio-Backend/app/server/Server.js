const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");
require("dotenv").config();
let app = express();

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

port = process.env.PORT | 3000;
app.listen(port);
