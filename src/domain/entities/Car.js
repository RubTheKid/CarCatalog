class Car {
    constructor({ id, brand, model, year, version }) {
      this.id = id;
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.version = version;
    }
  
    changeVersion(newVersion) {
      this.version = newVersion;
    }
  }
  
  module.exports = Car;