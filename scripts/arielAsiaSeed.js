const mongoose = require('mongoose');
const Car = require('../src/infrastructure/database/car.model');
require('dotenv').config();

const seedCars = async () => {
  const carData = [
    {
      brand: 'Ariel',
      model: 'Atom',
      year: 2016,
      version: '2.0',
    },
    {
      brand: 'Ariel',
      model: 'Atom',
      year: 2016,
      version: '3.5R',
    },
    {
      brand: 'Asia',
      model: 'Rocsta',
      year: 1994,
      version: 'GT 2.2 4x4',
    },
    {
      brand: 'Asia',
      model: 'Rocsta',
      year: 1995,
      version: 'GT 2.2 4x4',
    },
    {
      brand: 'Asia',
      model: 'Topic',
      year: 1995,
      version: 'Luxo 3.7',
    },
    {
      brand: 'Asia',
      model: 'Topic',
      year: 1997,
      version: 'Luxo 3.7',
    },
    {
        brand: 'Asia',
        model: 'Topic',
        year: 1998,
        version: 'Luxo 3.7',
    },
    {
        brand: 'Asia ',
        model: 'Towner',
        year: 1994,
        version: 'SDX 0.8',
      },
      {
        brand: 'Asia ',
        model: 'Towner',
        year: 1995,
        version: 'SDX 0.8',
      },
      {
        brand: 'Asia ',
        model: 'Towner',
        year: 1996,
        version: 'SDX 0.8',
      },
      {
        brand: 'Asia ',
        model: 'Towner',
        year: 1998,
        version: 'SDX 0.8',
      },
  ];

  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');

    await Car.deleteMany({ brand: { $in: ['Ariel', 'Asia'] } });
    console.log('Cleared existing cars for specified brands');
    
    await Car.insertMany(carData);
    console.log('Added cars to the database');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedCars();
