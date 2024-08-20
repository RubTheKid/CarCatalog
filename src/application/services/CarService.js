class CarService {
  constructor(carRepository) {
    this.carRepository = carRepository;
  }

  async getAllCars() {
    try {
      const result = await this.carRepository.getAllCars();
      return result;
    } catch (error) {
      throw new Error('Error fetching all cars: ' + error.message);
    }
  }


  async getCarById(id) {
    try {
      const car = await this.carRepository.getCarById(id);
      if (!car) {
        throw new Error('Car not found');
      }
      return car;
    } catch (error) {
      throw new Error('Error fetching car by ID: ' + error.message);
    }
  }

  async createCar(carData) {
    try {
      return await this.carRepository.createCar(carData);
    } catch (error) {
      throw new Error('Error creating car: ' + error.message);
    }
  }

  async updateCar(id, carData) {
    try {
      const updatedCar = await this.carRepository.updateCar(id, carData);
      if (!updatedCar) {
        throw new Error('Car not found');
      }
      return updatedCar;
    } catch (error) {
      throw new Error('Error updating car: ' + error.message);
    }
  }

  async deleteCar(id) {
    try {
      const deletedCar = await this.carRepository.deleteCar(id);
      if (!deletedCar) {
        throw new Error('Car not found');
      }
      return;
    } catch (error) {
      throw new Error('Error deleting car: ' + error.message);
    }
  }

  async getCarsByBrand(brand) {
    try {
        if (!brand) {
            throw new Error("Brand parameter is required");
        }
        const normalizedBrand = brand.trim().toUpperCase(); 
        return await this.carRepository.getCarsByBrand(normalizedBrand);
    } catch (error) {
        throw new Error('Error fetching cars by brand: ' + error.message);
    }
}

  async getCarsByModel(model) {
    try {
      if (!model) {
        throw new Error("Model parameter is required");
    }
      const normalizedModel = model.trim().toUpperCase();
      return await this.carRepository.getCarsByModel(normalizedModel);
    } catch (error) {
      throw new Error('Error fetching cars by model: ' + error.message);
    }
  }

  async getCarsByYear(year) {
    try {
      return await this.carRepository.getCarsByYear(year);
    } catch (error) {
      throw new Error('Error fetching cars by year: ' + error.message);
    }
  }

  async getAllBrands() {
    try {
      const cars = await this.carRepository.getAllCars();
      const brands = [...new Set(cars.map(car => car.brand))];
      return brands;
    } catch (error) {
      throw new Error('Error fetching brands: ' + error.message);
    }
  }

  async getModelsByBrand(brand) {
    try {
      const cars = await this.getCarsByBrand(brand);
      const models = [...new Set(cars.map(car => car.model))];
      return models;
    } catch (error) {
      throw new Error('Error fetching models by brand: ' + error.message);
    }
  }

  async getYearsByModel(model) {
    try {
      const cars = await this.getCarsByModel(model);
      const years = [...new Set(cars.map(car => car.year))];
      return years;
    } catch (error) {
      throw new Error('Error fetching years by model: ' + error.message);
    }
  }

  async getAllYears() {
    try {
      const cars = await this.carRepository.getAllCars();
      const years = [...new Set(cars.map(car => car.year))];
      return years;
    } catch (error) {
      throw new Error('Error fetching years: ' + error.message);
    }
  }
}

module.exports = CarService;
