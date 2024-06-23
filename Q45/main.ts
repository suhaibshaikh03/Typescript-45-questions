function car1(manufacturer: string, model: string, ...options: [string, any][]) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => (car[key] = value));
    return car;
  }
  
  console.log(car1("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
  console.log(car1("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));