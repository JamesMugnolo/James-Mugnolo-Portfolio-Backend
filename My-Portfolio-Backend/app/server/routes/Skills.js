const express = require("express");
let client = require("../config/databaseConfig.ts");
let router = express.Router();

router.get("/:type", async function (req, res) {
  try {
    const type = req.params.type;
    const query = `SELECT id FROM skilltypes WHERE name='${type}'`;
    var result = await client.query(query);
    const typeID = result.rows[0].id;

    const query2 = `SELECT id,name,comfortLevel FROM skills WHERE type=${typeID} ORDER BY name ASC`;
    const result2 = await client.query(query2);
    res.json(result2.rows);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
