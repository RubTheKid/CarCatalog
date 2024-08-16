const mongoose = require('mongoose');
const Car = require('../src/infrastructure/database/car.model');
require('dotenv').config();

const cars = [
  { year: 2020, model: 'Model S', brand: 'Tesla', version: 'Long Range' },
  { year: 2021, model: 'Mustang', brand: 'Ford', version: 'GT' },
  { year: 2022, model: 'Civic', brand: 'Honda', version: 'Sport' },
  { year: 2023, model: 'Corolla', brand: 'Toyota', version: 'SE' },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    await Car.deleteMany({});
    console.log('Cleared existing cars');

    // Inserir novos dados
    await Car.insertMany(cars);
    console.log('Added cars to the database');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
