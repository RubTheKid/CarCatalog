const express = require('express');
const connectDB = require('./config/database');
const CarsController = require('./controllers/CarsController'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get('/cars', CarsController.getAllCars);
app.get('/cars/:id', CarsController.getCarById);
app.post('/cars', CarsController.createCar);
app.put('/cars/:id', CarsController.updateCar);
app.delete('/cars/:id', CarsController.deleteCar);

app.get('/cars/brand/:brand', CarsController.getCarsByBrand);
app.get('/cars/model/:model', CarsController.getCarsByModel);
app.get('/cars/year/:year', CarsController.getCarsByYear); 

app.get('/brands', CarsController.getBrands);
app.get('/models/:brand', CarsController.getModelsByBrand);
app.get('/years/:model', CarsController.getYearsByModel);
app.get('/brands/:year', CarsController.getBrandsByYear);
app.get('/models/:brand/:year', CarsController.getModelsByBrandAndYear);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});