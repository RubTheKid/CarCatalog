const CarService = require('../application/services/CarService');
const MongoCarRepository = require('../infrastructure/repositories/MongoCarRepository');

jest.mock('../infrastructure/repositories/MongoCarRepository');

test('should get all cars', async () => {
  const mockCars = [{ id: 1, brand: 'Toyota', model: 'Corolla' }];
  MongoCarRepository.prototype.getAllCars.mockResolvedValue(mockCars);

  const carService = new CarService();
  const cars = await carService.getAllCars();
  expect(cars).toEqual(mockCars);
});