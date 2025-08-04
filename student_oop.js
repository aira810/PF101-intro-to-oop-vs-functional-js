// Object-Oriented Programming Approach for Student Management
// This demonstrates classes, inheritance, polymorphism, and encapsulation

// Base class - Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method that will be overridden (polymorphism)
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }

    // Common method for all persons
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Student class inherits from Person
class Student extends Person {
    constructor(name, age, grade, subjects = []) {
        super(name, age); // Call parent constructor
        this.grade = grade;
        this.subjects = subjects;
    }

    // Override the introduce method (polymorphism)
    introduce() {
        console.log(`Hi, I'm ${this.name}, a student with grade ${this.grade}.`);
    }

    // Method to display student information
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Subjects: ${this.subjects.join(", ")}`);
        console.log("---");
    }

    // Method to add a subject
    addSubject(subject) {
        if (!this.subjects.includes(subject)) {
            this.subjects.push(subject);
            console.log(`Added ${subject} to ${this.name}'s subjects`);
        } else {
            console.log(`${subject} is already in ${this.name}'s subjects`);
        }
    }

    // Method to remove a subject
    removeSubject(subject) {
        const index = this.subjects.indexOf(subject);
        if (index > -1) {
            this.subjects.splice(index, 1);
            console.log(`Removed ${subject} from ${this.name}'s subjects`);
        } else {
            console.log(`${subject} is not in ${this.name}'s subjects`);
        }
    }

    // Method to update grade
    updateGrade(newGrade) {
        this.grade = newGrade;
        console.log(`Updated ${this.name}'s grade to ${newGrade}`);
    }

    // Method to check if student is passing (grade C or better)
    isPassing() {
        const passingGrades = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C'];
        return passingGrades.includes(this.grade);
    }

    // Virtual method that can be overridden by subclasses
    study() {
        console.log(`${this.name} is studying general subjects.`);
    }
}

// UndergraduateStudent inherits from Student
class UndergraduateStudent extends Student {
    constructor(name, age, grade, subjects = [], major = "Undeclared") {
        super(name, age, grade, subjects);
        this.major = major;
        this.year = 1; // Freshman by default
    }

    // Override the introduce method (polymorphism)
    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.getYearName()} ${this.major} major.`);
    }

    // Override the study method (polymorphism)
    study() {
        console.log(`${this.name} is studying ${this.major} courses in year ${this.year}.`);
    }

    // Method specific to undergraduate students
    getYearName() {
        const yearNames = ["Freshman", "Sophomore", "Junior", "Senior"];
        return yearNames[this.year - 1] || "Graduating";
    }

    // Method to advance to next year
    advanceYear() {
        if (this.year < 4) {
            this.year++;
            console.log(`${this.name} advanced to year ${this.year} (${this.getYearName()})`);
        } else {
            console.log(`${this.name} is already a senior!`);
        }
    }

    // Override displayInfo to include major and year
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Major: ${this.major}`);
        console.log(`Year: ${this.year} (${this.getYearName()})`);
        console.log(`Subjects: ${this.subjects.join(", ")}`);
        console.log("---");
    }
}

// GraduateStudent inherits from Student
class GraduateStudent extends Student {
    constructor(name, age, grade, subjects = [], program = "Master's", thesis = "") {
        super(name, age, grade, subjects);
        this.program = program; // Master's or PhD
        this.thesis = thesis;
        this.researchArea = "";
    }

    // Override the introduce method (polymorphism)
    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.program} student.`);
    }

    // Override the study method (polymorphism)
    study() {
        console.log(`${this.name} is conducting research in ${this.researchArea || 'general area'}.`);
    }

    // Method specific to graduate students
    setResearchArea(area) {
        this.researchArea = area;
        console.log(`${this.name}'s research area is now: ${area}`);
    }

    // Method to work on thesis
    workOnThesis() {
        if (this.thesis) {
            console.log(`${this.name} is working on thesis: "${this.thesis}"`);
        } else {
            console.log(`${this.name} is developing thesis proposal.`);
        }
    }

    // Override displayInfo to include program and research info
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Program: ${this.program}`);
        console.log(`Research Area: ${this.researchArea || 'Not specified'}`);
        console.log(`Thesis: ${this.thesis || 'Not specified'}`);
        console.log(`Subjects: ${this.subjects.join(", ")}`);
        console.log("---");
    }
}

// StudentManager class to manage multiple students
class StudentManager {
    constructor() {
        this.students = [];
    }

    // Method to add a student (polymorphism - accepts any type of student)
    addStudent(student) {
        this.students.push(student);
        console.log(`Added ${student.name} (${student.constructor.name}) to the student list`);
    }

    // Method to remove a student
    removeStudent(studentName) {
        const index = this.students.findIndex(student => student.name === studentName);
        if (index > -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            console.log(`Removed ${removedStudent.name} from the student list`);
        } else {
            console.log(`Student ${studentName} not found`);
        }
    }

    // Method to find student by name
    findStudentByName(name) {
        return this.students.find(student => student.name === name);
    }

    // Method to get students by grade
    getStudentsByGrade(grade) {
        return this.students.filter(student => student.grade === grade);
    }

    // Method to get all passing students
    getPassingStudents() {
        return this.students.filter(student => student.isPassing());
    }

    // Method to calculate average age
    calculateAverageAge() {
        if (this.students.length === 0) return 0;
        const totalAge = this.students.reduce((sum, student) => sum + student.age, 0);
        return totalAge / this.students.length;
    }

    // Method to display all students
    displayAllStudents() {
        console.log("All Students:");
        this.students.forEach(student => student.displayInfo());
    }

    // Method to display students by grade
    displayStudentsByGrade(grade) {
        const gradeStudents = this.getStudentsByGrade(grade);
        console.log(`Students with grade ${grade}:`);
        gradeStudents.forEach(student => student.displayInfo());
    }

    // Method to demonstrate polymorphism - all students introduce themselves
    makeAllStudentsIntroduce() {
        console.log("All students introducing themselves:");
        this.students.forEach(student => student.introduce());
    }

    // Method to demonstrate polymorphism - all students study
    makeAllStudentsStudy() {
        console.log("All students studying:");
        this.students.forEach(student => student.study());
    }

    // Method to get students by type
    getStudentsByType(type) {
        return this.students.filter(student => student.constructor.name === type);
    }
}

// Using the OOP approach with inheritance and polymorphism
console.log("=== STUDENT MANAGEMENT SYSTEM (OOP with Inheritance & Polymorphism) ===");

// Create student manager
const studentManager = new StudentManager();

// Create different types of student objects (polymorphism)
const regularStudent = new Student("John Doe", 20, "A", ["Math", "Science", "English"]);
const undergradStudent = new UndergraduateStudent("Jane Smith", 19, "B+", ["History", "Art", "Math"], "Computer Science");
const gradStudent = new GraduateStudent("Mike Johnson", 25, "A-", ["Advanced Physics", "Research Methods"], "PhD", "Quantum Computing Applications");

// Add students to the manager
studentManager.addStudent(regularStudent);
studentManager.addStudent(undergradStudent);
studentManager.addStudent(gradStudent);

console.log("\n" + "=".repeat(60));

// Demonstrate inheritance - all students can use Person methods
console.log("Demonstrating inheritance (using Person methods):");
console.log(regularStudent.getInfo());
console.log(undergradStudent.getInfo());
console.log(gradStudent.getInfo());

console.log("\n" + "=".repeat(60));

// Demonstrate polymorphism - different introduce methods
studentManager.makeAllStudentsIntroduce();

console.log("\n" + "=".repeat(60));

// Demonstrate polymorphism - different study methods
studentManager.makeAllStudentsStudy();

console.log("\n" + "=".repeat(60));

// Display all students with their specific information
studentManager.displayAllStudents();

console.log("\n" + "=".repeat(60));

// Demonstrate specific methods for each type
console.log("Demonstrating type-specific methods:");

// Undergraduate specific methods
undergradStudent.advanceYear();
undergradStudent.advanceYear();

// Graduate specific methods
gradStudent.setResearchArea("Machine Learning");
gradStudent.workOnThesis();

console.log("\n" + "=".repeat(60));

// Get students by type
console.log("Students by type:");
const undergrads = studentManager.getStudentsByType("UndergraduateStudent");
const grads = studentManager.getStudentsByType("GraduateStudent");
const regulars = studentManager.getStudentsByType("Student");

console.log(`Undergraduate students: ${undergrads.length}`);
console.log(`Graduate students: ${grads.length}`);
console.log(`Regular students: ${regulars.length}`);

console.log("\n" + "=".repeat(60));

// Calculate and display average age
console.log(`Average age of students: ${studentManager.calculateAverageAge().toFixed(1)}`);

console.log("\n" + "=".repeat(60));

// Show final state
console.log("Final student list:");
studentManager.displayAllStudents(); 