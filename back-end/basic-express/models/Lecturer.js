const fs = require('fs')

class Lecturer {
    constructor(id, name, subject, age, city) {
        this.id = id;
        this.name = name;
        this.subject = subject;
        this.age = age;
        this.city = city;
    }

    static getAllLecturers() {
        return new Promise((resolve, reject) => {
            fs.readFile('./lecturers.json', 'utf8', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    let lecturers = JSON.parse(data);
                    lecturers = lecturers.map(lecturer => {
                        const { id, name, subject, age, city } = lecturer
                        return new Lecturer(id, name, subject, age, city)
                    })
                    resolve(lecturers)
                }
            })
        })
    }

    static getInformation(id) {
        return new Promise((resolve, reject) => {
            this.getAllLecturers()
                .then(result => {
                    let lecturers = result;
                    let findOneLecturer = lecturers.filter(lecturer => lecturer.id === id)

                    if (findOneLecturer.length !== 0) {
                        resolve(findOneLecturer[0])
                    } else {
                        throw {
                            message: `Lecturer with id ${id} not found!`
                        }
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    static create(lecturer) {
        return new Promise((resolve, reject) => {
            this.getAllLecturers()
                .then(result => {
                    let lecturers = result;
                    const id = lecturers[lecturers.length - 1].id + 1;
                    const { name, subject, age, city } = lecturer;

                    let lecturerClass = new Lecturer(id, name, subject, age, city)
                    lecturers.push(lecturerClass)

                    this.save(lecturers)
                    resolve(lecturerClass)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            this.getAllLecturers()
                .then(result => {
                    let lecturers = result;
                    lecturers = lecturers.filter(lecturer => lecturer.id !== id)

                    this.save(lecturers)
                    resolve(`Lecturer with id ${id} has been deleted!`)
                })
                .catch(err => reject(err))
        })
    }

    static update(lectureId, lecturer) {
        return new Promise((resolve, reject) => {
            this.getAllLecturers()
                .then(result => {
                    let lecturers = result;
                    const { name, subject, age, city } = lecturer
                    lecturers = lecturers.map(lecturer => {
                        if (lecturer.id === lectureId) {
                            lecturer.name = name;
                            lecturer.age = age;
                            lecturer.city = city;
                            lecturer.subject = subject;
                        }
                        return lecturer
                    })

                    this.save(lecturers)

                    resolve(`Lecturer with id ${lectureId} has been updated!`)
                })
                .catch(err => reject(err))
        })
    }

    static search(searchQuery) {
        return new Promise((resolve, reject) => {
            this.getAllLecturers()
                .then(result => {
                    let lecturers = result;
                    const { name } = searchQuery;

                    let findLecturers = lecturers.filter(lecturer => lecturer.name === name)

                    resolve(findLecturers)
                })
                .catch(err => reject(err))
        })
    }

    static save(lecturers) {
        fs.writeFileSync('./lecturers.json', JSON.stringify(lecturers, null, 3))
    }
}

module.exports = Lecturer;