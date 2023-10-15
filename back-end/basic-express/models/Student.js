const fs = require('fs')

class Student {
    constructor(id, name, major, semester, city) {
        this.id = id;
        this.name = name;
        this.major = major;
        this.semester = semester;
        this.city = city;
    }

    static getAllStudents() {
        return new Promise((resolve, reject) => {
            fs.readFile('./students.json', 'utf8', (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    let students = JSON.parse(data);
                    students = students.map(student => {
                        const { id, name, major, semester, city } = student
                        return new Student(id, name, major, semester, city)
                    })
                    resolve(students)
                }
            })
        })
    }

    static getInformation(id) {
        return new Promise((resolve, reject) => {
            this.getAllStudents()
                .then(result => {
                    let students = result;
                    let findOneStudent = students.filter(student => student.id === id)

                    if (findOneStudent.length !== 0) {
                        resolve(findOneStudent[0])
                    } else {
                        throw {
                            message: `Student with id ${id} not found!`
                        }
                    }
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    static create(student) {
        return new Promise((resolve, reject) => {
            this.getAllStudents()
                .then(result => {
                    let students = result;
                    const id = students[students.length - 1].id + 1;
                    const { name, major, semester, city } = student;

                    let studentClass = new Student(id, name, major, semester, city)
                    students.push(studentClass)

                    this.save(students)
                    resolve(studentClass)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            this.getAllStudents()
                .then(result => {
                    let students = result;
                    students = students.filter(student => student.id !== id)

                    this.save(students)
                    resolve(`Student with id ${id} has been deleted!`)
                })
                .catch(err => reject(err))
        })
    }

    static update(studentId, student) {
        return new Promise((resolve, reject) => {
            this.getAllStudents()
                .then(result => {
                    let students = result;
                    const { name, major, semester, city } = student
                    students = students.map(student => {
                        if (student.id === studentId) {
                            student.name = name;
                            student.major = major;
                            student.city = city;
                            student.semester = semester;
                        }
                        return student
                    })

                    this.save(students)

                    resolve(`Student with id ${studentId} has been updated!`)
                })
                .catch(err => reject(err))
        })
    }

    static search(searchQuery) {
        return new Promise((resolve, reject) => {
            this.getAllStudents()
                .then(result => {
                    let students = result;
                    const { name } = searchQuery;

                    let findStudents = students.filter(student => student.name === name)

                    resolve(findStudents)
                })
                .catch(err => reject(err))
        })
    }

    static save(students) {
        fs.writeFileSync('./students.json', JSON.stringify(students, null, 3))
    }
}

module.exports = Student;