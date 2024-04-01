var car = {
    brand: 'Toyota',
    model: 'premeo',
    year: 2021
  };
  
  function carInfo(carObject) {
    var brand = carObject.brand;
    var model = carObject.model;
    var year = carObject.year;
    
    return 'The ' + brand + ' ' + model + ' was manufactured in ' + year + '.';
  }
  
  console.log(carInfo(car)); 
  