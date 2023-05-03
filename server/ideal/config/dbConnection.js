const mysql = require("mysql2")

const dbUrl = 'mysql://root:12345@localhost:3307/app'

const dbConfig = {
  host: "db",
  user: "fernando",
  password: "12345",
  database: "users",
  port: '3307'
}

const connection = mysql.createConnection(dbUrl);

connection.connect((error) => {
  if (error) {
    console.log("Error connecting to DB")
    console.log(error)
    return
  }
  console.log("Connection established")
})

module.exports = connection