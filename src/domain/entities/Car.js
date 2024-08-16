class Car {
  constructor({ id, brand, model, year, version }) {
    this.id = id;
    this.brand = brand;
    this.normalizedBrand = this.normalizeBrand(brand);
    this.model = model;
    this.normalizedModel = this.normalizeModel(model);
    this.year = this.validateYear(year);
    this.version = version;
  }

  normalizeBrand(brand) {
    return brand.trim().toUpperCase();
  }

  normalizeModel(model) {
    return model.trim().toUpperCase();
  }

  validateYear(year) {
    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear + 1 || year.toString().length !== 4) {
      throw new Error('Invalid year. It must be a four-digit number between 1900 and next year.');
    }
    return year;
  }

  changeVersion(newVersion) {
    if (typeof newVersion !== 'string' || !newVersion.trim()) {
      throw new Error('Invalid version. It must be a non-empty string.');
    }
    this.version = newVersion;
  }
}

module.exports = Car;
