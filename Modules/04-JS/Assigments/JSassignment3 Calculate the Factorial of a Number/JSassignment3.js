function factorial(anyNumber){  
    // your code
    let prod = 1;
    for(i=1; i<=anyNumber; i++) {
        prod = i*prod;
    }
    console.log(prod)
    return prod;
}

console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1)