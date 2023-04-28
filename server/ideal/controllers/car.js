function getCar(req, res) {
  res.json({
      model: 'Ford',
      year: 2017
  });
}

function getCars(req, res) {
  res.json([
      {
          model: 'Ford',
          year: 2017
      },
      {
          model: 'Chevrolet',
          year: 2018
      }
  ]);
}

function createCar(req, res) {
  res.json({
      message: 'Car created'
  });
}

function updateCar(req, res) {  
  res.json({
      message: 'Car updated'
  });
} 

function deleteCar(req, res) {
  res.json({
      message: 'Car deleted'
  });
}

module.exports = {
    getCar, 
    getCars,
    createCar,
    updateCar,
    deleteCar
}