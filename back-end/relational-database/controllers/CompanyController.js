const { company, profile } = require('../models')

class CompanyController {
    static async listCompanies(req, res) {
        try {
            // let companies = await company.findAll({
            //     order: [
            //         ['id', 'asc']
            //     ]
            // })

            let profiles = await profile.findAll({
                include: [company],
                order: [
                    ['id', 'asc']
                ]
            })
            // res.json(companies)
            res.render('company/index.ejs', { profiles })
        } catch (err) {
            res.json(err)
        }
    }

    static async createPage(req, res) {
        res.render('company/addPage.ejs')
    }

    static async create(req, res) {
        try {
            const { name, category } = req.body;
            let resultCompany = await company.create({
                name, category
            })
            let resultProfile = await profile.create({
                companyId: resultCompany.id
            })

            // res.json(resultCompany)
            res.redirect('/companies')
        } catch (err) {
            res.json(err)
        }
    }

    static async remove(req, res) {
        try {
            const id = +req.params.companyId

            let resultCompany = await company.destroy({
                where: { id }
            })
            let resultProfile = await profile.destroy({
                where: {
                    companyId: id
                }
            })

            resultCompany === 1 ?
                res.json(({
                    message: `Company id ${id} has been deleted!`
                })) :
                res.json({
                    message: `Company id ${id} has not been deleted!`
                })
        } catch (err) {
            res.json(err)
        }
    }

    static editPage(req, res) {

    }

    static async edit(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, category, image, address, city, revenue } = req.body

            let resultCompany = await company.update({
                name, category, image
            }, {
                where: { id }
            })
            let resultProfile = await profile.update({
                address, city, revenue
            }, {
                where: {
                    companyId: id
                }
            })

            resultCompany[0] === 1 ?
                res.json({
                    message: `Company id ${id} has been updated!`
                }) :
                res.json({
                    message: `Company ${id} has not been updated`
                })
        } catch (err) {
            res.json(err)
        }
    }

    static async info(req, res) {
        try {
            const id = +req.params.id

            let result = await profile.findOne({
                where: {
                    companyId: id
                },
                include: [company]
            })

            // res.json(result)
            res.render('company/infoPage.ejs', { profile: result })
        } catch (err) {
            res.json(err)
        }
    }
}

module.exports = CompanyController