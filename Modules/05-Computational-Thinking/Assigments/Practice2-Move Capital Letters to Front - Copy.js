// Task: Create a function that moves all capital letters to the front of a word.
// Keep the original relative order of the upper and lower case letters the same.

function capToFront(str) {    
    // your code
    sorted = [];
    let REGEX = /[A-Z]/
    let regex = /[a-z]/
    
    for(i=0; i < str.length; i++) {
        var indexOfMatch =0

        if(str.search((REGEX)) !== -1) {
            indexOfMatch = str.search((REGEX))
            sorted.push(str[indexOfMatch])
            str = str.replace(REGEX, '*')
        } else {       
            indexOfMatch = str.search((regex))
            sorted.push(str[indexOfMatch])
            str = str.replace(regex, '*')
        }
    }
    console.log(sorted.join(''))
    return sorted.join('')
}
console.log(capToFront('hApPy') === 'APhpy')
console.log(capToFront('moveMENT') === 'MENTmove')
console.log(capToFront('shOrtCAKE') === 'OCAKEshrt')