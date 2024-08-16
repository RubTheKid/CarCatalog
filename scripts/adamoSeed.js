const mongoose = require('mongoose');
const Car = require('../src/infrastructure/database/car.model');
require('dotenv').config();

const cars = [
  { year: 1984, model: 'crx', brand: 'Adamo', version: '1.8' },
  { year: 1979, model: 'adamo gtl', brand: 'Adamo', version: '1.6' },
  { year: 1983, model: 'adamo gtm', brand: 'Adamo', version: '1.6' },
  { year: 1983, model: 'adamo gtm', brand: 'Adamo', version: 'c2 1.6' }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
    
    await Car.insertMany(cars);
    console.log('Added cars to the database');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
