const Student = require('../models/Student')

class StudentController {
    static getStudents(req, res) {
        Student.getAllStudents()
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static create(req, res) {
        // res.send("Create Student page")
        Student.create(req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getInformation(req, res) {
        const id = Number(req.params.UserId)

        Student.getInformation(id)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        const id = Number(req.params.id)

        Student.delete(id)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static update(req, res) {
        const id = Number(req.params.id)

        Student.update(id, req.body)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static search(req, res) {
        console.log(req.query)
        Student.search(req.query)
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = StudentController