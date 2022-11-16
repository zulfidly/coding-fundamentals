function missingLetter(str) { 
    let completeLetters = [];
    let srcArr = []
    let result =[]

    for(i=0; i<[...str].length; i++) {
        srcArr.push(str[i].charCodeAt());
    }
    // console.log('srcArr :   ', srcArr);

    let j = srcArr[srcArr.length-1] - srcArr[0] + 1;

    for (k=0; k < j; k++) {
        completeLetters.push(k+str[0].charCodeAt())
    }

    for (l=0; l < completeLetters.length; l++) {
        if (srcArr.includes(completeLetters[l])) {
            void(0);
        } else {
            result.push(String.fromCharCode(completeLetters[l]));
        }
    }
    
    if (result.length===0) {
        result=undefined;
    } else {
        result = result.toString();
    }

    console.log('Source string : ', str)
    console.log('Missing letters : ', result)
    console.log('-----------------')
  }
  

missingLetter("abcejk") //should return the string d.
missingLetter("abcdefghjklmno") //should return the string i.
missingLetter("stvwx") //should return the string u.
missingLetter("bcdf") //should return the string e.
missingLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.