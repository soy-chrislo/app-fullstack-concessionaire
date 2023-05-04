const router = require('express').Router()
const { getUser, getUsers, createUser, updateUser, deleteUser } = require('../controllers/user')
const { getCar, getCars, createCar, updateCar, deleteCar } = require('../controllers/car')
const { login, testDb, validateToken } = require('../controllers/login')

router.post('/login', login)
router.post('/validate', validateToken);
router.get('/test/db', testDb)

router.get('/user', getUser)
router.get('/users', getUsers)
router.post('/user', createUser)
router.put('/user', updateUser)
router.delete('/user', deleteUser)

router.get('/car', getCar)
router.get('/cars', getCars)
router.post('/car', createCar)
router.put('/car', updateCar)
router.delete('/car/:id', deleteCar)

module.exports = router
