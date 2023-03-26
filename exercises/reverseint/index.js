// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = Math.abs(n)
    .toString()
    .split('')
    .reduce((rev,val) => (val+rev),'');
    
    return parseInt(reversed*Math.sign(n));
}

module.exports = reverseInt;

//My initial solution
// const absValue = Math.abs(n);
// const revInt = parseInt(
//     (absValue).toString().split('').reduce((rev, val) => (val+rev)))
// ;
// return (n < 0) ? -revInt : revInt;

//Cleaner formatting based on grider stuff (but used reverse function)
// const reversed = Math.abs(n)
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
    
// return parseInt(
//     (n < 0) ? -reversed : reversed
// );

//Using Math.sign to remove comparision
// const reversed = Math.abs(n)
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
    
// return parseInt(reversed*Math.sign(n));

//with reduce
// const reversed = Math.abs(n)
// .toString()
// .split('')
// .reduce((rev,val) => (val+rev),'');

// return parseInt(reversed*Math.sign(n));