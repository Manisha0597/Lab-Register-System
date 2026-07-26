const express = require("express");

const router = express.Router();

const sampleController=require("../controllers/sampleController");

router.get("/",sampleController.getSamples);

router.post("/",sampleController.addSample);

router.put("/:id",sampleController.updateSample);

router.delete("/:id",sampleController.deleteSample);

module.exports=router;