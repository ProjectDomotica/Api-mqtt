const express = require("express");
const mqttSchema = require("../models/mqtt")


const router = express.Router();

// Get Data
router.get("/data", (req,res)=>{
    mqttSchema
     .find()
     .then((data)=> res.json(data))
     .catch((err)=> res.json({message: err}))
})
module.exports = router;