const express = require('express');
const connectDB = require('./config/database');
const carController = require('./controllers/car.controller');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.get('/cars', carController.getAllCars);
app.get('/cars/:id', carController.getCarById);
app.post('/cars', carController.createCar);
app.put('/cars/:id', carController.updateCar);
app.delete('/cars/:id', carController.deleteCar);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});