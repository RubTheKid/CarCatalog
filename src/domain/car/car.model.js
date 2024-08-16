const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  model: { type: String, required: true },
  brand: { type: String, required: true },
  version: { type: String, required: true },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;