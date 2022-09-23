const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const mqttRoutes = require("./routes/mqtt.js")
const app = express()
const port = process.env.PORT || 9000 


// Middleware
app.use("/api",mqttRoutes)
app.use(express.json())
// Routes
app.get("/", (req, res) => {
    res.send("Welcome to my API")
})

// mongodb
mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log("MongoDB Atlas is ready!"))
.catch((err) => console.error(err))
app.listen(port, ()=> console.log('Port is ready! ons port', port))

