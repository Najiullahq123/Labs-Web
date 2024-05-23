let car = {
    brand: 'Honda',
    model: 'Civic',
    year: 2022
};

function carInfo(carObj) {
    return `The ${carObj.brand} ${carObj.model} was manufactured in ${carObj.year}`;
}

// Test the function
console.log(carInfo(car)); 