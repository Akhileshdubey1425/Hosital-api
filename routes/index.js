const express = require("express");
const router = express.Router();

// handling all the routes
router.use("/api", require("./api/index"));

module.exports = router;
