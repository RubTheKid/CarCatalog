const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const carSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  year: { 
    type: Number, 
    required: true,
    min: 1900,
    max: new Date().getFullYear() + 1,
    validate: {
      validator: function(v) {
        return /^[0-9]{4}$/.test(v);
      },
      message: props => `${props.value} is not a valid year!`
    }
  },
  model: { 
    type: String, 
    required: true,
  },
  brand: { 
    type: String, 
    required: true,
  },
  version: { 
    type: String, 
    required: true
  },
  normalizedBrand: { 
    type: String, 
    default: function() { return this.brand.trim().toUpperCase(); }
  },
  normalizedModel: { 
    type: String, 
    default: function() { return this.model.trim().toUpperCase(); }
  }
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
