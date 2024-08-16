const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const carSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  year: { type: Number, required: true },
  model: { type: String, required: true },
  brand: { type: String, required: true },
  version: { type: String, required: true },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;