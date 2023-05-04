const { Schema, model } = require('mongoose')

const VegetableSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean

})

const Vegetable = model('Vegetable', VegetableSchema)

module.exports = Vegetable;