const { profile, company } = require('../models')

class ProfileController {
    static async getProfiles(req, res) {
        try {
            let profiles = await profile.findAll({
                include: [company]
            })

            res.json(profiles)
        } catch (err) {
            res.json(err)
        }
    }

    static createPage(req, res) {

    }

    static create(req, res) {

    }

}

module.exports = ProfileController