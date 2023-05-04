const connection = require('../config/dbConnection');

function getCar(req, res) {
  const id = req.params.id;
  const query = `SELECT * FROM carros WHERE id = ${id}`;
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.log('[Server] Error al obtener el auto.');
      console.log(err);
      res.status(500).json({
        message: 'Error al obtener el auto.'
      });
      return;
    }
    if (rows.length === 0) {
      res.status(404).json({
        message: 'Auto no encontrado.'
      });
      return;
    }
    const car = {
      id: rows[0].id,
      nombre: rows[0].nombre,
      precio: rows[0].precio,
      descripcion: rows[0].descripcion,
      imagen: rows[0].imagen
    }
    res.json(car);
  });
}

function getCars(req, res) {
  const query = `SELECT * FROM carros`;
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.log('[Server] Error al obtener los autos.');
      console.log(err);
      res.status(500).json({
        message: 'Error al obtener los autos.'
      });
      return;
    }
    let cars = [];
    rows.forEach(row => {
      cars.push({
        id: row.id,
        nombre: row.nombre,
        precio: row.precio,
        descripcion: row.descripcion,
        imagen: row.imagen
      });
    });
    res.json(cars);
  });
}

function createCar(req, res) {
  const { nombre, precio, descripcion, imagen } = req.body;
  const query = `INSERT INTO carros (nombre, precio, descripcion, imagen) VALUES ('${nombre}', ${precio}, '${descripcion}', '${imagen}')`;
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.log('[Server] Error al crear el auto.');
      console.log(err);
      res.status(500).json({
        message: 'Error al crear el auto.'
      });
      return;
    }
  });
  res.json({
      message: 'Car created',
      car: {
        nombre,
        precio,
        descripcion,
        imagen
      }
  });
}

function updateCar(req, res) {  
  // const id = req.params.id;
  const { id, nombre, precio, descripcion, imagen } = req.body;
  const query = `UPDATE carros SET nombre = '${nombre}', precio = ${precio}, descripcion = '${descripcion}', imagen = '${imagen}' WHERE id = ${id}`;
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.log('[Server] Error al actualizar el auto.');
      console.log(err);
      res.status(500).json({
        message: 'Error al actualizar el auto.'
      });
      return;
    }
  });
  res.json({
      message: 'Car updated'
  });
} 

function deleteCar(req, res) {
  const id = req.params.id;
  // const { id } = req.body;
  const query = `DELETE FROM carros WHERE id = ${id}`;
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.log('[Server] Error al eliminar el auto.');
      console.log(err);
      res.status(500).json({
        message: 'Error al eliminar el auto.'
      });
      return;
    }
  });

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