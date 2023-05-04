/* CREATE DATABASE app; */

USE app;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(20) NOT NULL,
  contrasenia VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (email, contrasenia) VALUES ('fernando@mail', '12345');

CREATE TABLE IF NOT EXISTS carros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(20),
  precio VARCHAR(20),
  descripcion VARCHAR(200),
  imagen VARCHAR(30)
);

INSERT INTO carros (nombre, precio, descripcion, imagen) VALUES
('Ford Mustang', '60000', 'Deportivo de lujo', 'ford-mustang.jpg'),
('Honda Civic', '22000', 'Automóvil compacto', 'honda-civic.jpg'),
('Jeep Wrangler', '35000', 'Vehículo todoterreno', 'jeep-wrangler.jpg'),
('Toyota Camry', '28000', 'Sedán de tamaño mediano', 'toyota-camry.jpg'),
('Chevrolet Corvette', '80000', 'Deportivo clásico', 'chevrolet-corvette.jpg');

