// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    return str.match(/(a|e|i|o|u)/ig)?.length || 0;
}

//My initial lookup table solution
// let numVowels = 0;
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// for(const letter of str) {
//     if(vowels.indexOf(letter.toLowerCase()) >= 0) {
//         numVowels++;
//     }
// }
// return numVowels;

//regex solution
// return str.match(/(a|e|i|o|u)/ig)?.length || 0;

module.exports = vowels;
