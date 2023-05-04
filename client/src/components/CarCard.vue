<script>
export default {
  props: {
    id: Number,
    name: String,
    price: String,
    description: String,
    image: String
  },
  data(){
    return {
    }
  },
  methods: {
    deleteCar(){
      const car = {
        id: this.id,
        nombre: this.name,
        precio: this.price,
        descripcion: this.description,
        imagen: this.image
      }
      this.emitter.emit('delete-car', car)
    },
    updateCar(){
      const car = {
        id: this.id,
        nombre: this.name,
        precio: this.price,
        descripcion: this.description,
        imagen: this.image
      }
      this.emitter.emit('update-car', car)
    }
  } 
}
</script>

<template>
  <div class="car">
  <!-- <img src="car1.jpg" alt="Car 1" class="car-image" /> -->
    <div class="car-image car1"></div>
    <h3>{{ name }}</h3>
    <p>${{ price }}</p>
    <p class="card-description">{{ description }}</p>
    <div class="btn-container">
      <a @click="updateCar" href="#" class="btn">Editar</a>
      <a @click="deleteCar" href="#" class="btn">Eliminar</a>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

.car {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  height: 400px;
  max-width: 400px;
}

.car1 {
  background-image: url(../assets/toyota-camry.jpg);
}

.car2 {
  background-image: url(../assets/honda-accord.png);
}

.car3 {
  background-image: url(../assets/ford-mustang.jpg);
}

.car .car-image {
  /* overflow: hidden; */
  border-radius: 10px 10px 0 0;
  width: 400px;
  height: 170px;
  background-color: #6b6b6b;

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}



.car h3 {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 15px 0;
}

.car p {
  font-size: 20px;
  color: #000000;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom: 10px;
}

.car .card-description {
  font-size: 16px;
  color: #000000;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-bottom: 20px;
  padding: 0 20px;
  text-align: center;
}

.car a {
  background-color: #757575;
  padding: 10px 20px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.car a:hover {
  background-color: #000;
  color: #fff;
}

.car .btn-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 20px;
}

.car .btn-container a:last-child:hover {
  background-color: red;
}


</style>