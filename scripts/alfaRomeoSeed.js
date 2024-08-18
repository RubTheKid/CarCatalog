const mongoose = require('mongoose');
const Car = require('../src/infrastructure/database/car.model');
require('dotenv').config();

const alfaRomeoCars = [
  // Alfa Romeo 155
  { year: 1995, model: '155', brand: 'Alfa Romeo', version: 'Elegance 2.0' },
  { year: 1995, model: '155', brand: 'Alfa Romeo', version: 'Super 2.0' },
  { year: 1996, model: '155', brand: 'Alfa Romeo', version: 'Super 2.0' },
  { year: 1996, model: '155', brand: 'Alfa Romeo', version: 'Elegance 2.0' },
  { year: 1997, model: '155', brand: 'Alfa Romeo', version: 'Super 2.0' },
  { year: 1997, model: '155', brand: 'Alfa Romeo', version: 'Elegance 2.0' },

  // Alfa Romeo 164
  { year: 1991, model: '164', brand: 'Alfa Romeo', version: '3.0 V6' },
  { year: 1992, model: '164', brand: 'Alfa Romeo', version: '3.0 V6' },
  { year: 1993, model: '164', brand: 'Alfa Romeo', version: '3.0 V6' },
  { year: 1994, model: '164', brand: 'Alfa Romeo', version: '3.0 V6' },
  { year: 1995, model: '164', brand: 'Alfa Romeo', version: '3.0 V6' },
  { year: 1995, model: '164', brand: 'Alfa Romeo', version: 'Super 3.0 V6' },
  { year: 1995, model: '164', brand: 'Alfa Romeo', version: 'Super 3.0 V6 AT' },
  { year: 1996, model: '164', brand: 'Alfa Romeo', version: 'Super 3.0 V6' },
  { year: 1996, model: '164', brand: 'Alfa Romeo', version: 'Super 3.0 V6 AT' },

  // Alfa Romeo Spider
  { year: 1996, model: 'Spider', brand: 'Alfa Romeo', version: '3.0 V6' },
  { year: 1997, model: 'Spider', brand: 'Alfa Romeo', version: '3.0 V6' },

  // Alfa Romeo 145
  { year: 1996, model: '145', brand: 'Alfa Romeo', version: 'Elegance 2.0' },
  { year: 1997, model: '145', brand: 'Alfa Romeo', version: 'Elegance 2.0' },
  { year: 1998, model: '145', brand: 'Alfa Romeo', version: 'Elegance 1.8' },
  { year: 1999, model: '145', brand: 'Alfa Romeo', version: 'Elegance 1.8' },
  { year: 1996, model: '145', brand: 'Alfa Romeo', version: 'Quadrifoglio 2.0' },
  { year: 1997, model: '145', brand: 'Alfa Romeo', version: 'Quadrifoglio 2.0' },
  { year: 1998, model: '145', brand: 'Alfa Romeo', version: 'Quadrifoglio 2.0' },
  { year: 1999, model: '145', brand: 'Alfa Romeo', version: 'Quadrifoglio 2.0' },

  // Alfa Romeo 156
  { year: 1999, model: '156', brand: 'Alfa Romeo', version: 'Elegance 2.0' },
  { year: 2000, model: '156', brand: 'Alfa Romeo', version: 'Elegance 2.0' },
  { year: 2001, model: '156', brand: 'Alfa Romeo', version: 'Elegance 2.0' },
  { year: 2002, model: '156', brand: 'Alfa Romeo', version: 'Elegance 2.0' },
  { year: 2000, model: '156', brand: 'Alfa Romeo', version: 'Sport 2.0' },
  { year: 2001, model: '156', brand: 'Alfa Romeo', version: 'Sport 2.0' },
  { year: 2003, model: '156', brand: 'Alfa Romeo', version: '2.5 V6 MP' },

  // Alfa Romeo 166
  { year: 1999, model: '166', brand: 'Alfa Romeo', version: '3.0 V6' },
  { year: 2000, model: '166', brand: 'Alfa Romeo', version: '3.0 V6' },
  { year: 2001, model: '166', brand: 'Alfa Romeo', version: '3.0 V6' },
  { year: 2002, model: '166', brand: 'Alfa Romeo', version: '3.0 V6' },

  // Alfa Romeo 147
  { year: 2003, model: '147', brand: 'Alfa Romeo', version: 'TS Selespeed 2.0 16V' },
  { year: 2004, model: '147', brand: 'Alfa Romeo', version: 'TS Selespeed 2.0 16V' },
  { year: 2005, model: '147', brand: 'Alfa Romeo', version: 'TS Selespeed 2.0 16V' },

  // Alfa Romeo 156 Sportwagon
  { year: 2001, model: '156 Sportwagon', brand: 'Alfa Romeo', version: 'Sportwagon 2.0' },
  { year: 2002, model: '156 Sportwagon', brand: 'Alfa Romeo', version: 'Sportwagon 2.0' },
  { year: 2003, model: '156 Sportwagon', brand: 'Alfa Romeo', version: 'Sportwagon 2.5 V6' },
  { year: 2004, model: '156 Sportwagon', brand: 'Alfa Romeo', version: 'Sportwagon 2.5 V6' },

  // Alfa Romeo 2300
  { year: 1974, model: '2300', brand: 'Alfa Romeo', version: '2.3' },
  { year: 1975, model: '2300', brand: 'Alfa Romeo', version: '2.3' },
  { year: 1977, model: '2300', brand: 'Alfa Romeo', version: '2300 Ti 2.3' },
  { year: 1978, model: '2300', brand: 'Alfa Romeo', version: '2300 Ti 2.3' },
  { year: 1979, model: '2300', brand: 'Alfa Romeo', version: '2300 Ti 2.3' },
  { year: 1984, model: '2300', brand: 'Alfa Romeo', version: '2300 Ti 2.3' },
  { year: 1985, model: '2300', brand: 'Alfa Romeo', version: '2300 Ti 2.3' },
  { year: 1986, model: '2300', brand: 'Alfa Romeo', version: '2300 Ti 2.3' },
  { year: 1991, model: '2300', brand: 'Alfa Romeo', version: '2300 Ti 2.3' },
  { year: 1992, model: '2300', brand: 'Alfa Romeo', version: '2300 Ti 2.3' },
  { year: 1993, model: '2300', brand: 'Alfa Romeo', version: '2300 Ti 2.3' },
  { year: 1977, model: '2300', brand: 'Alfa Romeo', version: 'B 2.3' },
  { year: 1978, model: '2300', brand: 'Alfa Romeo', version: 'B 2.3' },
  { year: 1979, model: '2300', brand: 'Alfa Romeo', version: 'B 2.3' }
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

    await Car.insertMany(alfaRomeoCars);
    console.log('Added Alfa Romeo cars to the database');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
