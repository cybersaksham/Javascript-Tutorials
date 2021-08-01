const students = [
    { name: "s1", subject: "JS" },
    { name: "s2", subject: "Python" }
]

function enrollStudents(student, callback) {
    setTimeout(function () {
        students.push(student);
        console.log("Enrolled...");
        callback();
    }, 3000);
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li>${student.name} - ${student.subject}</li>`;
        })
        document.getElementById('students').innerHTML = str;
        console.log("Fetched...");
    }, 1000);
}

let std = {
    name: "s3",
    subject: "Java"
}
enrollStudents(std, getStudents);