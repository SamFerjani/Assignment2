class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}
dataCollection = null;

exports.initialize = function () {
    const fs=require('fs')
    return new Promise((resolve, reject) => {
        fs.readFile('./data/students.json', 'utf8', (err, dataFromFile) => {
            if (err) {
                reject("unable to read students.json");
                return;
            }
            this.students = JSON.parse(dataFromFile);
            fs.readFile('./data/courses.json', 'utf8', (err, dataFromFile) => {
                if (err) {
                    reject("unable to read courses.json");
                    return;
                }
                this.courses = JSON.parse(dataFromFile);
                let dataCollection = new Data(this.students, this.courses);
                resolve(dataCollection);
            });
        });
    });
}

exports.getAllStudents = function () {
    return new Promise((resolve, reject) => {
        if (this.students.length === 0) {
            reject("no results returned");
            return;
        }
        resolve(this.students);
    });
}

exports.getTAs = function () {
    return new Promise((resolve, reject) => {
        let tas = this.students.filter(student => student.TA === true);
        if (tas.length === 0) {
            reject("no results returned");
            return;
        }
        resolve(tas);
    });
}

exports.getCourses = function () {
    return new Promise((resolve, reject) => {
        if (this.courses.length === 0) {
            reject("no results returned");
            return;
        }
        resolve(this.courses);
    });
}
