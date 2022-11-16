function calculateAge(date) {
    // your code
    let currentYr = new Date();
    let age = currentYr.getFullYear() - parseInt(date.slice(-4));
    console.log(age, typeof age);
    return age;
}

console.log(calculateAge("20/7/2002") === 19)
console.log(calculateAge("1/1/1979") === 43)