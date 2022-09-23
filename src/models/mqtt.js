const mongoose = require("mongoose")

const mqttSchema = mongoose.Schema({
    message:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Mqtt', mqttSchema)