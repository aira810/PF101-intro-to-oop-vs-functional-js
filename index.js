// Standard JavaScript Code for Student Management
// This demonstrates procedural/functional programming approach

// Student data as simple objects
const student1 = {
    name: "John Doe",
    age: 20,
    grade: "A",
    subjects: ["Math", "Science", "English"]
};

const student2 = {
    name: "Jane Smith",
    age: 19,
    grade: "B+",
    subjects: ["History", "Art", "Math"]
};

const student3 = {
    name: "Mike Johnson",
    age: 21,
    grade: "A-",
    subjects: ["Physics", "Chemistry", "Biology"]
};

// Array to store all students
const students = [student1, student2, student3];

// Functions to work with student data
function displayStudentInfo(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Grade: ${student.grade}`);
    console.log(`Subjects: ${student.subjects.join(", ")}`);
    console.log("---");
}

function findStudentByName(name) {
    return students.find(student => student.name === name);
}

function getStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

function addSubject(student, subject) {
    if (!student.subjects.includes(subject)) {
        student.subjects.push(subject);
        console.log(`Added ${subject} to ${student.name}'s subjects`);
    } else {
        console.log(`${subject} is already in ${student.name}'s subjects`);
    }
}

function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// Using the functions
console.log("=== STUDENT MANAGEMENT SYSTEM (Standard JavaScript) ===");
console.log("\nAll Students:");
students.forEach(displayStudentInfo);

console.log("\nFinding student by name:");
const foundStudent = findStudentByName("Jane Smith");
if (foundStudent) {
    displayStudentInfo(foundStudent);
}

console.log("\nStudents with grade A:");
const gradeAStudents = getStudentsByGrade("A");
gradeAStudents.forEach(displayStudentInfo);

console.log("\nAdding a new subject:");
addSubject(student1, "Computer Science");

console.log("\nAverage age of students:", calculateAverageAge().toFixed(1));

console.log("\nUpdated student list:");
students.forEach(displayStudentInfo);