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

  async getBrands() {
    try {
      return await CarModel.distinct('brand');
    } catch (error) {
      throw new Error('Error fetching brands: ' + error.message);
    }
  }

  async getModelsByBrand(brand) {
    try {
      return await CarModel.distinct('model', { brand });
    } catch (error) {
      throw new Error('Error fetching models by brand: ' + error.message);
    }
  }

  async getYearsByModel(model) {
    try {
      return await CarModel.distinct('year', { model });
    } catch (error) {
      throw new Error('Error fetching years by model: ' + error.message);
    }
  }

  async getYears() {
    try {
      return await CarModel.distinct('year');
    } catch (error) {
      throw new Error('Error fetching years: ' + error.message);
    }
  }

  async getBrandsByYear(year) {
    try {
      return await CarModel.distinct('brand', { year });
    } catch (error) {
      throw new Error('Error fetching brands by year: ' + error.message);
    }
  }

  async getModelsByBrandAndYear(brand, year) {
    try {
      return await CarModel.distinct('model', { brand, year });
    } catch (error) {
      throw new Error('Error fetching models by brand and year: ' + error.message);
    }
  }
}

module.exports = MongoCarRepository;
