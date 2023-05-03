<script>
// export default {
//   name: 'LoginView',
// }

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  /*
    - beforeCreate()
    - created()
    - beforeMount()
    - mounted()
    - beforeUpdate()
    - updated() 
    */
  async beforeMount() {
    // if (localStorage.getItem('token')) {
    //   this.$router.push('/dashboard')
    // }

    if (localStorage.getItem('token')){
      const validToken = await this.validateJwt();
      if (validToken){
        this.$router.push('/dashboard')
      }
    }
   

  },
  methods: {
    sendForm(event) {
      event.preventDefault()
      this.login()
    },
    async login() {
      try {
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password
          })
        })
        const data = await response.json()
        const token = data.token
        if (!token) {
          return alert('No se ha podido iniciar sesión')
        }
        localStorage.setItem('token', token)
        this.$router.push('/dashboard')
      } catch (error) {
        console.error(error)
      }
    },
    async validateJwt(){
      const token = localStorage.getItem('token')
      if(!token){
        return false
      }
      try {
        const response = await fetch('http://localhost:3000/api/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: token
          })
        })
        const data = await response.json()
        return data.valid
      } catch (error) {
        console.error(error)
        return false
      }
    }
  }
}
</script>

<template>
  <!-- Si tiene un token, no mostrar el contenido y redirigir a /dashboard -->

  <div class="container">
    <div class="info">
      <p class="txt-1">Gracias por visitarnos</p>
      <h2>bienvenido de nuevo</h2>
      <hr />
      <p class="txt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero mollitia velit fugit porro,
        accusamus aperiam at quaerat laudantium sapiente vel esse autem enim corrupti maiores
        expedita provident veritatis nihil optio.
      </p>
    </div>
    <form class="form" @submit="sendForm">
      <h2>login</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa vitae magnam hic temporibus
        repudiandae voluptatem libero praesentium id nihil at reiciendis, maxime magni obcaecati ea,
        exercitationem voluptatibus cupiditate optio? Dolorem.
      </p>
      <div class="inputs">
        <input
          v-model="email"
          name="email"
          type="email"
          class="box"
          placeholder="Ingresa tu correo"
        />
        <input
          v-model="password"
          name="password"
          type="password"
          class="box"
          placeholder="Ingresa tu contraseña"
        />
        <a href="#">Olvidaste tu contraseña?</a>
        <input type="submit" value="login" class="submit" />
      </div>
    </form>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #e5ecf9;
}

.container {
  display: flex;
  height: 700px;
  width: 1000px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  margin: auto;
  margin-top: 150px;
}

.info {
  background-image: url(../assets/bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 150px 50px;
  width: 50%;
}

.txt-1 {
  color: #fff;
  text-transform: capitalize;
  font-size: 20px;
  margin-bottom: 25px;
}

.info h2 {
  color: #fff;
  text-transform: uppercase;
  font-size: 50px;
  margin-bottom: 25px;
}

.info hr {
  width: 55px;
  border: 4px solid #fff;
  margin-left: 170px;
  margin-bottom: 25px;
}

.txt-2 {
  color: #fff;
  font-size: 18px;
}

.form {
  padding: 150px 100px;
  width: 50%;
  text-align: center;
  background-color: #fff;
}

.form h2 {
  color: #097ef6;
  font-size: 30px;
  margin-bottom: 25px;
}

.form p {
  font-size: 16px;
  color: #c4c3c3;
  margin-bottom: 25px;
}

.inputs {
  display: flex;
  flex-direction: column;
}

.box {
  outline: none;
  border-color: #097ef6;
  border-width: 0px 0px 0px 5px;
  border-style: solid;
  padding: 15px 35px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}

.inputs a {
  color: #097ef6;
  text-decoration: none;
  font-size: 15px;
  margin-bottom: 35px;
}

.submit {
  background-color: #097ef6;
  padding: 15px;
  border: 0;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 25px;
}

@media (max-width: 990px) {
  .container {
    width: 350px;
    height: 600px;
    margin-top: 100px;
  }

  .info {
    display: none;
  }

  .form {
    /* width: 100px;  */
    width: 100%;
    padding: 30px;
  }

  .form h2 {
    margin-top: 50px;
  }
}
</style>
