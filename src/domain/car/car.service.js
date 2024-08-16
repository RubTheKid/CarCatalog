const carRepository = require('./car.repository');

const getAllCars = async () => {
  return carRepository.getAllCars();
};

const getCarById = async (id) => {
  return carRepository.getCarById(id);
};

const createCar = async (carData) => {
  return carRepository.createCar(carData);
};

const updateCar = async (id, carData) => {
  return carRepository.updateCar(id, carData);
};

const deleteCar = async (id) => {
  return carRepository.deleteCar(id);
};

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar };