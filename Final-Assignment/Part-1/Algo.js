// 1. Reverse A String Using Loops.
function reverse(str) {
    let reArranged = "";
    for(i=str.length-1; i>=0; i--) {
        reArranged = reArranged + str[i];
    }
    return reArranged
}
console.log(reverse('abcde')) //== 'edcba'
console.log(reverse('hello')) //== 'olleh'
console.log(reverse('Greetings from The Hacker Collective')) //== 'evitcelloC rekcaH ehT morf sgniteerG'
console.log("*******************************************")

//  2. Same Back And Forth - Is a string the same backwards and forwards? Return true if it is, false if it is not.
function sameBackAndForth(str1) {
    if(str1.length % 2 == 0) {
        let oneHalf = str1.slice(0, str1.length/2)
        let secondHalf = reverse(str1.slice(str1.length/2, str1.length))
        if(oneHalf === secondHalf){
            return true;
        } else{
            return false;
        }
    } else {
        return false;
    }
}
console.log(sameBackAndForth("abba")) //=== true
console.log(sameBackAndForth("abcdefg")) //=== false
console.log(sameBackAndForth("abcddcba")) //=== false
console.log("*******************************************")

// 3. Given an integer, return an integer that is the reverse ordering of numbers.
function reverseInt(num) {
    return reverse(num.toString()) * 1 || reverse((num*(-1)).toString()) * (-1);
}
console.log(reverseInt(15)) //=== 51
console.log(reverseInt(981)) //=== 189
console.log(reverseInt(500)) //=== 5
console.log(reverseInt(-15)) //=== -51
console.log(reverseInt(-90)) //=== -9
console.log("*******************************************")

// 4. SumArr - Find the sum of all items in an array, using loops.
function sumArr(arr){
    let result = 0;
    arr.forEach(x => {
        result += x
    })
    return result;
}
console.log(sumArr([1,2,3,4,5])) //== 15
console.log(sumArr([1000,2000,44,55,22])) //== 3121
console.log(sumArr([123,456,789])) //== 1368
console.log("*******************************************")

//5. Angry Grandma - You will write a function that takes in a String. The function should return a new sentence where every word is yelled. A yelled word is when each word is all uppercase followed by 2 exclamation marks (!!)
function deafGrandma(str2) {
    return str2.toUpperCase().replace(/\s/g, '!! ') + "!!"
}
console.log(deafGrandma("I have a bad feeling about this")) //== "I!! HAVE!! A!! BAD!! FEELING!! ABOUT!! THIS!!"
console.log("*******************************************")

// 6. What Is Missing - Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
function whatIsMissing(str3) {
    let completeArr = [];
    let missingAlphabet = "";
    let x = str3[0].charCodeAt();
    str3 = str3.toLowerCase();

    for(j=x; j<=str3[str3.length-1].charCodeAt(); j++) {
        completeArr.push(String.fromCharCode(j))
    }

    // let completeStr = [...completeArr].join("")
    for(k=0; k<completeArr.length; k++) {
        let regex = RegExp(completeArr[k], 'g');
        if(str3.match(regex) == null) {
            missingAlphabet = missingAlphabet + completeArr[k]
        }
    }
    return missingAlphabet || undefined
}
console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz")) //== undefined
console.log(whatIsMissing("bcdf")) //== 'e'
console.log(whatIsMissing("abcdefghjklmno")) //== 'i'
console.log("*******************************************")

// 7. Do a swap on the sentence using the arguments provided and return the new sentence.
function swap(str, toExit, toEnter) {
    let arr = [];

    if(toExit[0].toUpperCase() === toExit[0]) {
        let arr = [...toEnter]
        arr[0] = arr[0].toUpperCase();
        toEnter = arr.join("")

    } else {
        let arr = [...toEnter]
        arr[0] = arr[0].toLowerCase();
        toEnter = arr.join("")
    }
    let regex = RegExp(toExit, 'g');
    // console.log(str.replace(regex, toEnter))

    return str.replace(regex, toEnter)
}


console.log(swap("His name is Tom", "Tom", "john")) //== "His name is John".
console.log(swap("Let us get back to more Coding", "Coding", "algorithms")) //== "Let us get back to more Algorithms".
console.log(swap("This has a spellngi error", "spellngi", "spelling")) //== "This has a spelling error".