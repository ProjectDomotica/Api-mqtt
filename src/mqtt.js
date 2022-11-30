const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.tzrgkus.mongodb.net/domotica?retryWrites=true&w=majority');

const Cat = mongoose.model('home', {
  tiempo: String, 
  Temperatura: Number,
  Humedad: Number,
  Lumens: Boolean,
  CO: Number
});

client.on('connect', function () {
  client.subscribe('/6A/DOMOTICA', function (err) {
    if (!err) {
      //client.publish('butter', 'hey mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  const data = JSON.parse(message.toString())
  console.log(data)
  var jijija = new Cat({
    "tiempo": data.tiempo,
    "Temperatura": data.Temperatura,
    "Humedad": data.Humedad,
    "Lumens": data.Lumens,
    "CO": data.CO
  })
    jijija.save().then(() => console.log('ready'))
    //new Cat(data).save().then(() => console.log('meow'))
  })
  