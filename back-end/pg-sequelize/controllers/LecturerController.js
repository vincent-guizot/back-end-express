const { lecturer } = require('../models')

class LecturerController {
    static getLecturers(req, res) {
        lecturer.findAll()
            .then(lecturers => {
                res.json(lecturers)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static createPage(req, res) {

    }

    static create(req, res) {
        const { name, subject, age, city, image } = req.body
        lecturer.create({
            name, subject, age, city, image
        })
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static delete(req, res) {
        const id = +req.params.id

        lecturer.destroy({
            where: { id }
        })
            .then(result => {
                // if (result === 1) {
                //     res.json({
                //         message: `Id ${id} has been deleted!`
                //     })
                // } else {
                //     res.json({
                //         message: `Couldn't delete ${id}.'`
                //     })
                // }

                // ternary
                result === 1 ?
                    res.json({
                        message: `Id ${id} has been deleted!`
                    }) :
                    res.json({
                        message: `Couldn't delete ${id}.'`
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static updatePage(req, res) {

    }

    static update(req, res) {
        const id = Number(req.params.id)
        const { name, subject, age, city, image } = req.body

        lecturer.update({
            name, subject, age, city, image
        }, {
            where: { id }
        })
            .then(result => {
                result[0] === 1 ?
                    res.json({
                        message: `Id ${id} has been updated!`
                    }) :
                    res.json({
                        message: `Couldn't update id ${id}`
                    })
            })
            .catch(err => {
                res.json(err)
            })
    }

    static getInformation(req, res) {
        const id = Number(req.params.UserId)

        lecturer.findByPk(id)
            .then(result => {
                res.json(result)
            })
            .catch(err => {
                res.json(err)
            })
    }

    static search(req, res) {

    }
}

module.exports = LecturerController