const jwt = require('jsonwebtoken')
const connection = require('../config/dbConnection')

function generateToken(payload){
  const secretKey = 'secret'
  const options = {
    expiresIn: '1h',
  };

  return jwt.sign(payload, secretKey, options)
}

async function validateCredentials(email, password){
  try {
    // SQL Injection
    // const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
    const query = `SELECT * FROM users WHERE email = ? AND contrasenia = ?`
    const params = [email, password]
    const result = await new Promise((resolve, reject) => {
      connection.query(query, params, (err, rows, fields) => {
        if (err) reject(err);
        resolve(rows);
      })
    })
    if (result.length > 0) {
      return true
    } else {
      return false 
    }
  } catch (error) {
    console.log('[Server] Error al validar credenciales.')
    console.log(error)
    return false
  }
}

async function login(req, res){
  const { email, password } = req.body
  const result = await validateCredentials(email, password)
  if(!result){
    res.status(401).json({
      message: 'Credenciales inválidas'
    })
    return
  }
  const payload = {
    email
  }
  const token = generateToken(payload)
  res.json({
    token
  })
  console.log('[Server] Se ha creado y enviado el token.')
}

async function testDb(req, res){
  try {
    const query = `SELECT * FROM users;`

    connection.query(query, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json({
        message: 'Se ha realizado la consulta a la base de datos.',
        result: result
      })
    })

  } catch (error) {
  }
}

function validateToken(req, res){
  const { token } = req.body
  try {
    const decoded = jwt.verify(token, 'secret')
    res.json({
      valid: true,
      message: 'Token válido',
      decoded
    })
  } catch (error) {
    res.status(401).json({
      valid: false,
      message: 'Token inválido'
    })
  }
}

module.exports = {
  login,
  testDb,
  validateToken
}