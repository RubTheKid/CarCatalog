const CarRepository = require('./CarRepository');
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
    return await car.save();
  } catch (error) {
    throw new Error('Error creating car: ' + error.message);
    
  }

  async updateCar(id, carData) {
    return CarModel.findByIdAndUpdate(id, carData, { new: true });
  }

  async deleteCar(id) {
    return CarModel.findByIdAndDelete(id);
  }

  async getCarsByBrand(normalizedBrand) {
    return CarModel.find({ normalizedBrand: normalizedBrand });
  }

  async getCarsByModel(normalizedModel) {
    return CarModel.find({ normalizedModel: normalizedModel });
  }

  async getCarsByYear(year) {
    return CarModel.find({ year });
  }
}

module.exports = MongoCarRepository;
