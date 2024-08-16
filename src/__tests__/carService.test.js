const CarService = require('../application/services/CarService');
const MongoCarRepository = require('../infrastructure/repositories/MongoCarRepository');

jest.mock('../infrastructure/repositories/MongoCarRepository');


//getall
test('should get all cars', async () => {
  const mockCars = [{ _id: '1', brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' }];
  MongoCarRepository.prototype.getAllCars.mockResolvedValue(mockCars);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);
  const cars = await carService.getAllCars();

  expect(cars).toEqual(mockCars);
});

test('should handle error when getting all cars', async () => {
  MongoCarRepository.prototype.getAllCars.mockRejectedValue(new Error('Database error'));

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.getAllCars()).rejects.toThrow('Error fetching all cars: Database error');
});


//getbyid
test('should get car by ID', async () => {
  const mockCar = { _id: '1', brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' };
  MongoCarRepository.prototype.getCarById.mockResolvedValue(mockCar);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);
  const car = await carService.getCarById('1');

  expect(car).toEqual(mockCar);
});

test('should handle error when car not found by ID', async () => {
  MongoCarRepository.prototype.getCarById.mockResolvedValue(null);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.getCarById('1')).rejects.toThrow('Car not found');
});

test('should handle error when getting car by ID', async () => {
  MongoCarRepository.prototype.getCarById.mockRejectedValue(new Error('Database error'));

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.getCarById('1')).rejects.toThrow('Error fetching car by ID: Database error');
});

//createcar
test('should create a new car', async () => {
  const carData = { brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' };
  const mockCar = { ...carData, _id: '1' };
  MongoCarRepository.prototype.createCar.mockResolvedValue(mockCar);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);
  const car = await carService.createCar(carData);

  expect(car).toEqual(mockCar);
});

test('should handle error when creating a car', async () => {
  MongoCarRepository.prototype.createCar.mockRejectedValue(new Error('Database error'));

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.createCar({ brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' }))
    .rejects.toThrow('Error creating car: Database error');
});

//updatecar
test('should update car details', async () => {
  const carData = { brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' };
  const updatedCar = { ...carData, _id: '1' };
  MongoCarRepository.prototype.updateCar.mockResolvedValue(updatedCar);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);
  const car = await carService.updateCar('1', carData);

  expect(car).toEqual(updatedCar);
});

test('should handle error when car to update not found', async () => {
  MongoCarRepository.prototype.updateCar.mockResolvedValue(null);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.updateCar('1', { brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' }))
    .rejects.toThrow('Car not found');
});

test('should handle error when updating a car', async () => {
  MongoCarRepository.prototype.updateCar.mockRejectedValue(new Error('Database error'));

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.updateCar('1', { brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' }))
    .rejects.toThrow('Error updating car: Database error');
});

//delet
test('should delete a car', async () => {
  MongoCarRepository.prototype.deleteCar.mockResolvedValue({ _id: '1', brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' });

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);
  await expect(carService.deleteCar('1')).resolves.toBeUndefined();
});

test('should handle error when car to delete not found', async () => {
  MongoCarRepository.prototype.deleteCar.mockResolvedValue(null);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.deleteCar('1')).rejects.toThrow('Car not found');
});

test('should handle error when deleting a car', async () => {
  MongoCarRepository.prototype.deleteCar.mockRejectedValue(new Error('Database error'));

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.deleteCar('1')).rejects.toThrow('Error deleting car: Database error');
});

//getbybrand

test('should get cars by brand', async () => {
  const mockCars = [
    { _id: '1', brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' }
  ];
  MongoCarRepository.prototype.getCarsByBrand.mockResolvedValue(mockCars);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);
  const cars = await carService.getCarsByBrand('Toyota');

  expect(cars).toEqual(mockCars);
});

test('should handle error when getting cars by brand', async () => {
  MongoCarRepository.prototype.getCarsByBrand.mockRejectedValue(new Error('Database error'));

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.getCarsByBrand('Toyota')).rejects.toThrow('Error fetching cars by brand: Database error');
});


//bymodel
test('should get cars by model', async () => {
  const mockCars = [
    { _id: '1', brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' }
  ];
  MongoCarRepository.prototype.getCarsByModel.mockResolvedValue(mockCars);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);
  const cars = await carService.getCarsByModel('Corolla');

  expect(cars).toEqual(mockCars);
});

test('should handle error when getting cars by model', async () => {
  MongoCarRepository.prototype.getCarsByModel.mockRejectedValue(new Error('Database error'));

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.getCarsByModel('Corolla')).rejects.toThrow('Error fetching cars by model: Database error');
});


//byyear
test('should get cars by year', async () => {
  const mockCars = [
    { _id: '1', brand: 'Toyota', model: 'Corolla', year: 2020, version: 'SE' }
  ];
  MongoCarRepository.prototype.getCarsByYear.mockResolvedValue(mockCars);

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);
  const cars = await carService.getCarsByYear(2020);

  expect(cars).toEqual(mockCars);
});

test('should handle error when getting cars by year', async () => {
  MongoCarRepository.prototype.getCarsByYear.mockRejectedValue(new Error('Database error'));

  const carRepository = new MongoCarRepository();
  const carService = new CarService(carRepository);

  await expect(carService.getCarsByYear(2020)).rejects.toThrow('Error fetching cars by year: Database error');
});

