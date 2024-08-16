const Car = require('./car.model');

const getAllCars = async () => {
  return Car.find();
};

const getCarById = async (id) => {
  return Car.findById(id);
};

const createCar = async (carData) => {
  const car = new Car(carData);
  return car.save();
};

const updateCar = async (id, carData) => {
  return Car.findByIdAndUpdate(id, carData, { new: true });
};

const deleteCar = async (id) => {
  return Car.findByIdAndDelete(id);
};

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar };