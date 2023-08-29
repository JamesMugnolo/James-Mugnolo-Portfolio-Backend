require("dotenv").config();
const express = require("express");
const projects = require("./Projects");
const skills = require("./Skills");

let router = express.Router();

router.use("/Projects", projects);
router.use("/Skills", skills);

module.exports = router;
