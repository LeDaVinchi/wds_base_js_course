const students = [
    { name: "Иван", grade: 85 },
    { name: "Петя", grade: 95 },
    { name: "Саша", grade: 70 }
];
const topStudens = [];

for (let i = 0; i < students.length; i++) {
    if (students[i] > 80) {
        topStudens.push(students[i]);
    }
}
return topStudens;
