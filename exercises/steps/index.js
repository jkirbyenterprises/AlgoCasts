// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let suffix = ' '.repeat(n-1);
    // let suffix = new Array(n).join(' '); //more compatible
    let prefix = '#';
    for(let i = 0; i < n; i++) {
        console.log(prefix+suffix);
        suffix = suffix.slice(1);
        prefix += '#';
    }
}

// my inital solution
// help from https://stackoverflow.com/questions/14343844/create-a-string-of-variable-length-filled-with-a-repeated-character
// on filling a string with a character
// let suffix = ' '.repeat(n-1);
// let suffix = new Array(n).join(' '); //more compatible
// let prefix = '#';
// for(let i = 0; i < n; i++) {
//     console.log(prefix+suffix);
//     suffix = suffix.slice(1);
//     prefix += '#';
// }

// grider initial solution
// for(let row = 0; row < n; row++) {
//     let stair = '';
//     for(let column = 0; column < n; column++) {
//         if(column <= row) {
//             stair += '#';
//         } else {
//             stair += ' ';
//         }
//     }
//     console.log(stair);
// }

// grider weird recursive solution
// if(n === row) {
//     return;
// }

// if(n === stair.length) {
//     console.log(stair);
//     steps(n, row+1);
//     return;
// }

// if(stair.length <= row) {
//     stair += '#';
// } else {
//     stair += ' ';
// }

// steps(n, row, stair);

module.exports = steps;
