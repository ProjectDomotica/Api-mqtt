const express = require("express");
const mqttSchema = require("../models/mqtt")


const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Mqtt:
 *       type: object
 *       properties:
 *         message:
 *          type: string
 *          description: Message tests
 *     required:
 *       - message
 *           
 */
// Get all Data 
/**
 * @swagger
 * /api/data:
 *   get:
 *     summary: return all data
 *     tags: [Mqtt]
 *     responses:
 *       200:
 *         description: all data 
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mqtt' 
 */
router.get("/data", (req,res)=>{
    mqttSchema
     .find()
     .then((data)=> res.json(data))
     .catch((err)=> res.json({message: err}))
})
module.exports = router;