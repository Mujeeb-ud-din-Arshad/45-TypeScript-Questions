function createCar(manufacturer, model, ...options){
    const carInfo = {
      manufacturer,
      model,
    };
  
    for (const option of options) {
      carInfo[option.key] = option.value;
    }
  
    return carInfo;
  }
  
  const car = createCar('Toyota', 'Camry', { key: 'color', value: 'Blue' }, { key: 'year', value: 2022 });
  
  console.log(car);
  