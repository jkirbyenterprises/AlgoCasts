// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    let i = 0;
    while(++i<=n) {
        const mulOf3 = (i % 3 === 0);
        const mulOf5 = (i % 5 === 0);
        if(mulOf3 && mulOf5) {
            console.log("fizzbuzz");
        } else if(mulOf3) {
            console.log("fizz");
        } else if(mulOf5) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;

// My initial solution
// let i = 0;
// while(++i<=n) {
//     const mulOf3 = (i % 3 === 0);
//     const mulOf5 = (i % 5 === 0);
//     if(mulOf3 && mulOf5) {
//         console.log("fizzbuzz");
//     } else if(mulOf3) {
//         console.log("fizz");
//     } else if(mulOf5) {
//         console.log("buzz");
//     } else {
//         console.log(i);
//     }
// }