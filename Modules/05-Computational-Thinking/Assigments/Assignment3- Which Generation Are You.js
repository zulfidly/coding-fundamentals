// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

function generation(x , char) {

    const arrFam = [
        ['me!'],
        ['son','daughter'],
        ['grandson','granddaughter'],
        ['great grandson', 'great granddaughter'],
        ['great grandfather', 'great grandmother'],
        ['grandfather', 'grandmother'],
        ['father', 'mother'],
    ];
    let j = char==='m' ? 0 : 1;
    if(x > 0) {
        // console.log(x,j, '****', arrFam[x][j])
        return arrFam[x][j]
    } else if (x===0) {
        return 'me!';
    } else {
        arr = arrFam.slice(x);
        // console.log(x,j, '****',arr.flat()[j])
        return arr.flat()[j]
    }
}
console.log(generation(2, "f")) //➞ "granddaughter"
console.log(generation(-3, "m")) //➞ "great grandfather"
console.log(generation(1, "f")) //➞ "daughter"
console.log('****************')
console.log(generation(1, "f"))
console.log(generation(2, "f"))
console.log(generation(3, "f"))
console.log(generation(0, "f"))
console.log(generation(-1, "f"))
console.log(generation(-2, "m"))
console.log(generation(-3, "m"))



