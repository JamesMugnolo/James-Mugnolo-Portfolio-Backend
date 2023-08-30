const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");

const app = express();
app.use("/api", apiRouter);
app.use(cors({ origin: "https://jamesmugnoloportfolio.netlify.app" }));
app.use(express.json());

app.listen(3000);
