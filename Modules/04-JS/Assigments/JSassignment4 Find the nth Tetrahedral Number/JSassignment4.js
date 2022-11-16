function tetra(n){  
    // your code
    x = 0;
    let Triangular = [];

    for(i=1; i<=n; i++) {
        x = i + x;
        Triangular.push(x);
        // console.log(Triangular)
    }
    let nTetra = Triangular.reduce((a,b) => a + b);
    console.log(nTetra);
    return nTetra;
}

console.log(tetra(2) === 4)
console.log(tetra(5) === 35)
console.log(tetra(6) === 56)