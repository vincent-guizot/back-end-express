const studentRoute = require('express').Router()
const { StudentController } = require('../controllers')

studentRoute.get('/', StudentController.getStudents)
studentRoute.post('/create', StudentController.create)
studentRoute.get('/information/:UserId', StudentController.getInformation)
studentRoute.get('/delete/:id', StudentController.delete)
studentRoute.post('/update/:id', StudentController.update)
studentRoute.get('/search', StudentController.search)


module.exports = studentRoute