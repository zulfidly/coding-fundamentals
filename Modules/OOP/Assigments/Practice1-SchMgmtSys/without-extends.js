// 2 characters: student, teacher
// Properties: name, age subjects
// Method: .greet()), registerSubject() -> student

// class SchoolPersonnel {
    // constructor(name, age, subjects) { //constructor runs automatically after a new student class is created
    //     this.name = name;
    //     this.age = age
    //     this.subjects = subjects
    // }
    // greet() {
    //     console.log(`Hello, I am ${this.name}!, I am ${this.age} years old, my subjects are ${this.subjects[0]}`)
    // }
// }

class Student  {  //extends let us use the shared key.value 
    constructor(name, age, subjects) { //constructor runs automatically after a new student class is created
        this.name = name;
        this.age = age
        this.subjects = subjects
    }
    register(subject) {
        this.subjects.push(subject)
    }
    greet() {
        console.log(`Hello, I am ${this.name}!, I am ${this.age} years old, my subjects are ${this.subjects[0]}`)
    }
}
class Teacher  {  //extends let us use the shared key.value 
    constructor(name, age, subjects) { //constructor runs automatically after a new student class is created
        this.name = name;
        this.age = age
        this.subjects = subjects
    }
    register(subject) {
        this.subjects.push(subject)
    }
    greet() {
        console.log(`Hello, I am a ${this.name}, a teacher teaching ${this.subjects[0]}, ${this.subjects[1]}`)
    }
}
const studentA = new Student("Yap", 23, ["Maths", "Science"]) //new object created
const studentB = new Student("Jim", 23, ["History", "English"]) //new object created
const TeacherA = new Teacher("Deric", 43, ["Physics", "Mentor"]) //new object created
console.log(studentA)

studentA.greet();
studentB.greet();
TeacherA.greet();

console.log(studentA.subjects)
studentA.register("Biology")
console.log(studentA.subjects)


