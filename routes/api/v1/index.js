const express = require("express");
const router = express.Router();

// handling v1 routes
router.use("/doctors", require("./doctors"));

router.use("/patients", require("./patients"));
router.use("/reports", require("./reports"));

module.exports = router;
