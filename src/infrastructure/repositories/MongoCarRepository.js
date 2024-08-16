const CarRepository = require('../../infrastructure/repositories/CarRepository')
const CarModel = require('../database/car.model');

class MongoCarRepository extends CarRepository {
  async getAllCars() {
    return CarModel.find();
  }

  async getCarById(id) {
    return CarModel.findById(id);
  }

  async createCar(carData) {
    const car = new CarModel(carData);
    return car.save();
  }

  async updateCar(id, carData) {
    return CarModel.findByIdAndUpdate(id, carData, { new: true });
  }

  async deleteCar(id) {
    return CarModel.findByIdAndDelete(id);
  }

  async getCarsByBrand(brand) {
    return CarModel.find({ brand });
  }

  async getCarsByModel(model) {
    return CarModel.find({ model });
  }

  async getCarsByYear(year) {
    return CarModel.find({ year });
  }
}

module.exports = MongoCarRepository;
