const mysql = require("mysql")

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "ideal"
}

function conectar(){
  const connection = mysql.createConnection(dbConfig)
  connection.connect((err) => {
    if(err){
      console.log("Error al conectar con base de datos")
      return
    }
    console.log("Conexión exitosa")
  })
  return connection
}

module.exports = conectar