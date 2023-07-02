// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if(row === n) {
        return;
    }

    let numColumns = 2 * n - 1;
    
    if(level.length == numColumns) {
        console.log(level);
        pyramid(n, row+1);
        return;
    }

    let midpoint = Math.floor(numColumns / 2);
    const column = level.length;
    
    if(midpoint - row <= column && midpoint + row >= column) {
        level += '#';
    } else {
        level += ' ';
    }

    pyramid(n, row, level);
}

// for (let row = 0; row < n; row++) {
//     let level = '';
//     let numColumns = 2 * n - 1;
//     for (let column = 0; column < numColumns; column++) {

//     }
// }

//My initial solution
// function pyramid(n) {
//     let prefix = ' '.repeat(n-1);
//     let suffix = prefix;
//     let value = '#';

//     for(let i=0;i<n;i++) {
//         console.log(prefix + value + suffix);
//         value += '##';
//         suffix = prefix = prefix.slice(1);
//     }
// }

// Guessed solution based on incomplete grider solution
// let numColumns = 2 * n - 1;
// for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < numColumns; column++) {
//         let distanceFromCenter = Math.abs(Math.floor(numColumns / 2) - column);
//         if(distanceFromCenter <= row) { //row = maxDistanceFromCenter
//             level+='#';
//         } else {
//             level+=' ';
//         }
//     }
//     console.log(level);
// }

// Grider initial solution
// let numColumns = 2 * n - 1;
// const midpoint = Math.floor(numColumns / 2);

// for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < numColumns; column++) {
//         if(midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//         } else {
//             level += ' ';
//         }
//     }
//     console.log(level);
// }

//Grider resursive solution

module.exports = pyramid;
