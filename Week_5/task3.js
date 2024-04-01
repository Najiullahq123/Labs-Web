function applyFunction(array, func) {
    return array.map(func);
  }
  
  var array = [1, 2, 3, 4, 5];
  var result = applyFunction(array, function(x) {
    return x * 2;
  });
  console.log(result); 