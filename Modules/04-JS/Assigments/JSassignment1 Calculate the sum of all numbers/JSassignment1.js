function sum(numbersArray){  
    // your code
    let summ = numbersArray.reduce((a, b) => a + b);
    console.log(summ);
    return summ
}

// Test cases
console.log(sum([1, 2, 3, 4]) === 10)
console.log(sum([-3, 5, 19, -6]) === 15)