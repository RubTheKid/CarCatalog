const carService = require('../domain/car/car.service');

const getAllCars = async (req, res) => {
  try {
    const cars = await carService.getAllCars();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cars' });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await carService.getCarById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching car' });
  }
};

const createCar = async (req, res) => {
  try {
    const car = await carService.createCar(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ message: 'Error creating car' });
  }
};

const updateCar = async (req, res) => {
  try {
    const car = await carService.updateCar(req.params.id, req.body);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(400).json({ message: 'Error updating car' });
  }
};

const deleteCar = async (req, res) => {
  try {
    const car = await carService.deleteCar(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting car' });
  }
};

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar };