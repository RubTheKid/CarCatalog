const mongoose = require('mongoose');
const Car = require('../src/infrastructure/database/car.model');
require('dotenv').config();

const agraleArruaYears = [
  { year: 2005, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
  { year: 2007, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
  { year: 2010, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
  { year: 2011, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
  { year: 2012, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
  { year: 2013, version: 'AM 100 2.8 Turbodiesel 4x4 CD' },
  { year: 2014, version: 'AM 100 2.8 Turbodiesel 4x4 CD' },
  { year: 2015, version: 'AM 100 2.8 Turbodiesel 4x4 CD' },
  { year: 2016, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
  { year: 2017, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
  { year: 2018, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
  { year: 2019, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
  { year: 2020, version: 'AM 200 2.8 Turbodiesel 4x4 CD' },
];

const cars = agraleArruaYears.map(({ year, version }) => ({
  year: year,
  model: 'Arruá',
  brand: 'Agrale',
  version: version
}));

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
    
    await Car.deleteMany({});
    console.log('Cleared existing cars');

    await Car.insertMany(cars);
    console.log('Added cars to the database');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
