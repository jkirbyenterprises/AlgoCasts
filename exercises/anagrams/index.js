// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let stringAOccurences = buildCharMap(stringA);
    let stringBOccurences = buildCharMap(stringB);

    if(Object.keys(stringAOccurences).length != Object.keys(stringBOccurences).length) {
        return false;
    }

    for(const testChar in stringAOccurences) {
        if(stringAOccurences[testChar] != stringBOccurences[testChar]) {
            return false;
        }
    }

    return true; 
}

function buildCharMap(str) {
    const charMap = {};
    for(const char of str.replace(/[^\w]/g,'').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

module.exports = anagrams;

//My initial solution (with a little stackoverflow for isAlpha)
// let stringAOccurences = {};
// let stringBOccurences = {};

// for(const char of stringA) {
//     const storeChar = char.toLowerCase();
//     // https://stackoverflow.com/questions/40120915/javascript-function-that-returns-true-if-a-letter
//     // if(storeChar < 'a' || storeChar > 'z') {
//     if(!/^[a-z]/.test(storeChar)) {
//         console.log(`Skipping: ${char}`);
//         continue;
//     }
//     stringAOccurences[storeChar] = stringAOccurences[storeChar] + 1 || 1;
// }

// for(const char of stringB) {
//     const storeChar = char.toLowerCase();
//     // https://stackoverflow.com/questions/40120915/javascript-function-that-returns-true-if-a-letter
//     if(storeChar < 'a' || storeChar > 'z') {
//     //if(!/^[a-z]/.test(storeChar)) {
//         continue;
//     }
//     stringBOccurences[storeChar] = stringBOccurences[storeChar] + 1 || 1;
// }

// if(Object.keys(stringAOccurences).length != Object.keys(stringBOccurences).length) {
//     return false;
// }

// for(const testChar in stringAOccurences) {
//     if(stringAOccurences[testChar] != stringBOccurences[testChar]) {
//         return false;
//     }
// }

// return true; 

//Grider solution #1
// function anagrams(stringA, stringB) {
//     const stringAOccurences = buildCharMap(stringA);
//     const stringBOccurences = buildCharMap(stringB);
    
//     if(Object.keys(stringAOccurences).length != Object.keys(stringBOccurences).length) {
//         return false;
//     }

//     for(const testChar in stringAOccurences) {
//         if(stringAOccurences[testChar] !== stringBOccurences[testChar]) {
//             return false;
//         }
//     }

//     return true;    
// }

// function buildCharMap(theString) {
//     const charMap = {};
//     for(const char of theString.replace(/[^\w]/g,'').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

//Grider solution #2
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }