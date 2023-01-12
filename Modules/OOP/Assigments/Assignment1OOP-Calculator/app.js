// Task: Build a Basic Calculator App
// In this assignment, you are going to build a basic calculator app that can run basic math operations like addition, subtraction, multiplication and division.
// What's even cooler, is that the app should be able to display the result for each operation!
class calculator {
    constructor(para1) { //constructor runs automatically after a new student class is created
        this.value = para1;
    }
    add(t){
        console.log(`${this.value} + ${t} = ${this.value + t}`)
        this.value = this.value + t
        console.log(this)
        return this //an object
    }
    substract(u){
        console.log(`${this.value} - ${u} = ${this.value - u}`)
        this.value = this.value - u
        console.log(this)
        return this
    }
    multiply(v) {
        // console.log(`${this.value}`, "*", `${v}`, "=", `${this.value * v}`)
        console.log(`${this.value} * ${v} = ${this.value * v}`)
        this.value = this.value * v
        console.log(this)
        return this
    }
    divide(w) {
        console.log(`${this.value} / ${w} = ${this.value / w}`)
        this.value = this.value / w
        console.log(this)
        return this
    }
    finalResult() {
        console.log ("********************************final result:", this.value)
    }
}
let calc = new calculator(0)
console.log(calc)
calc.finalResult()
calc.add(5).substract(2).multiply(5).divide(3)
// calc.add(5).substract(2).multiply(5).divide(3).finalResult()
calc.finalResult()




