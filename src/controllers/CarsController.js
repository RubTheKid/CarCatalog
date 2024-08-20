const CarService = require('../application/services/CarService');
const carSchema = require('../validators/carValidator');
const MongoCarRepository = require('../infrastructure/repositories/MongoCarRepository')

const carRepository = new MongoCarRepository();
const carService = new CarService(carRepository);

const getAllCars = async (req, res) => {
  try {
    const cars = await carService.getAllCars(); 
    res.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error.message);
    res.status(500).json({ message: 'Error fetching cars', error: error.message });
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
    console.error('Error fetching car:', error.message);
    res.status(500).json({ message: 'Error fetching car', error: error.message });
  }
};

const createCar = async (req, res) => {
  const { error } = carSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const car = await carService.createCar(req.body);
    res.status(201).json(car);
    logger.info('Car created successfully');
  } catch (error) {
    console.error('Error creating car:', error.message);
    logger.error('Error creating car: ', error);
    res.status(400).json({ message: 'Error creating car', error: error.message });
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
    console.error('Error updating car:', error.message);
    res.status(400).json({ message: 'Error updating car', error: error.message });
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
    console.error('Error deleting car:', error.message);
    res.status(500).json({ message: 'Error deleting car', error: error.message });
  }
};

const getCarsByBrand = async (req, res) => {
  try {
    const brand = req.params.brand; 
    const cars = await carService.getCarsByBrand(brand);
    res.json(cars);
  } catch (error) {
    console.error('Error fetching cars by brand:', error.message);
    res.status(500).json({ message: 'Error fetching cars by brand', error: error.message });
  }
};

const getCarsByModel = async (req, res) => {
  try {
    const model = req.params.model;
    const cars = await carService.getCarsByModel(model);
    res.json(cars);
  } catch (error) {
    console.error('Error fetching cars by model:', error.message);
    res.status(500).json({ message: 'Error fetching cars by model', error: error.message });
  }
};

const getCarsByYear = async (req, res) => {
  try {
    const year = req.params.year;
    const cars = await carService.getCarsByYear(year);
    res.json(cars);
  } catch (error) {
    console.error('Error fetching cars by year:', error.message);
    res.status(500).json({ message: 'Error fetching cars by year', error: error.message });
  }
}

  const getBrands = async (req, res) => {
    try {
      const brands = await carService.getAllBrands();
      res.json(brands);
    } catch (error) {
      console.error('Error fetching brands:', error.message);
      res.status(500).json({ message: 'Error fetching brands', error: error.message });
    }
  };

  const getModelsByBrand = async (req, res) => {
    try {
      const brand = req.params.brand;
      const models = await carService.getModelsByBrand(brand);
      res.json(models);
    } catch (error) {
      console.error('Error fetching models by brand:', error.message);
      res.status(500).json({ message: 'Error fetching models by brand', error: error.message });
    }
  };

  const getYearsByModel = async (req, res) => {
    try {
      const model = req.params.model;
      const years = await carService.getYearsByModel(model);
      res.json(years);
    } catch (error) {
      console.error('Error fetching years by model:', error.message);
      res.status(500).json({ message: 'Error fetching years by model', error: error.message });
    }
  };

  const getYears = async (req, res) => {
    try {
      const years = await carService.getAllYears();
      res.json(years);
    } catch (error) {
      console.error('Error fetching years:', error.message);
      res.status(500).json({ message: 'Error fetching years', error: error.message });
    }
  };

  const getBrandsByYear = async (req, res) => {
    try {
      const year = req.params.year;
      const cars = await carService.getCarsByYear(year);
      const brands = [...new Set(cars.map(car => car.brand))];
      res.json(brands);
    } catch (error) {
      console.error('Error fetching brands by year:', error.message);
      res.status(500).json({ message: 'Error fetching brands by year', error: error.message });
    }
  };

  const getModelsByBrandAndYear = async (req, res) => {
    try {
      const year = parseInt(req.params.year, 10);
      const brand = req.params.brand;
      const cars = await carService.getCarsByBrand(brand);
  
      const filteredCars = cars.filter(car => car.year === year);
      const models = [...new Set(filteredCars.map(car => car.model))];
  
      if (models.length === 0) {
        return res.status(404).json({ message: 'No models found for the given brand and year' });
      }
  
      res.json(models);
    } catch (error) {
      console.error('Error fetching models by brand and year:', error.message);
      res.status(500).json({ message: 'Error fetching models by brand and year', error: error.message });
    }
  };

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar, getCarsByBrand, getCarsByModel, getCarsByYear, getBrands, getModelsByBrand, getYearsByModel, getYears, getBrandsByYear, getModelsByBrandAndYear};
