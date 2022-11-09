const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors') //aqui
require('dotenv').config();
const mqttRoutes = require("./routes/mqtt.js")
const path = require("path")
//Settings
const app = express()
const port = process.env.PORT || 80

app.use(cors()) //Aqui

const dotenv = require('dotenv')
const URI = "mongodb+srv://pablocervantes:C3rv4nt3s@cluster0.cjsaps7.mongodb.net/?retryWrites=true&w=majority"
dotenv.config({path:__dirname+'/.env'});
// Swagger
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc");
const { appendFileSync } = require('fs');
const swaggerSpec ={
    definition:{
        openapi: "3.0.3",
        info:{
            title: "Api get data MQTT",
            version: "1.0.0"
        },
        servers:[
            {
                url: `${process.env.URL}:${port}`
            }
        ]
    },
    apis:[`${path.join(__dirname,"./routes/*.js")}`],
    
}


// Middleware
app.use("/api",mqttRoutes)
app.use(express.json())
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to Dark Systems")
})

// mongodb
mongoose
.connect(URI)
.then(()=> console.log("MongoDB Atlas is ready!"))
.catch((err) => console.error(err))
app.listen(port, ()=> console.log('Port is ready! ons port', port))
console.log(process.env.MONGODB_URI);
