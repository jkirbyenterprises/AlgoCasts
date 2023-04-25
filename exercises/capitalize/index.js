// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
return str.split(' ')
            .map((part) => (
                part[0].toUpperCase() + part.slice(1))
            )
            .join(' ');
}

// my initial solution
// return str.split(' ')
//             .map((part) => (
//                 part[0].toUpperCase() + part.slice(1))
//             )
//             .join(' ');

// grider inspired solution
// let prevChar = ' ';
// let result = '';
// for(const char of str) {
//     result += (prevChar === ' ')
//                 ? char.toUpperCase()
//                 : char;
//     prevChar = char;
// }
// return result;

// grider actual solution
// let result = str[0].toUpperCase();

// for(let i = 1; i < str.length; i++) {
//     if(str[i - 1] === ' ') {
//         result += str[i].toUpperCase();
//     } else {
//         result += str[i];
//     }
// }

// return result;

module.exports = capitalize;
