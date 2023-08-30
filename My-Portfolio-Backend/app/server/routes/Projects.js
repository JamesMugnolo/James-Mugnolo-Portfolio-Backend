const express = require("express");
let client = require("../config/databaseConfig.ts");
let router = express.Router();
let cors = require("cors");
router.use(cors({ origin: "https://jamesmugnoloportfolio.netlify.app" }));

router.get("/", async function (req, res) {
  try {
    const query = "SELECT * FROM projects";
    var result = await client.query(query);
    res.json(result.rows);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
