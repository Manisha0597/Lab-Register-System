const express = require("express");

const router = express.Router();

const aiController = require("../controllers/aiController");

router.get("/", aiController.getInsights);

module.exports = router;