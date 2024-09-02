const getTopStudents = (students, grade) => {
    let students = [
        { name: "Иван", grade: 85 },
        { name: "Петя", grade: 95 },
        { name: "Саша", grade: 70 }
    ];
    getTopStudents.filter(function(numder) {
        return grade > 70;
    });
    }
