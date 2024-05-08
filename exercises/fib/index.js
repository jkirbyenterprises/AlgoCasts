// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let results = [0,1];
    for(let index = 2; index <= n; index++) {
        results.push(results[index-1]+results[index-2]);
    }
    return results[results.length-1];
}

// function fib(n) {
//     if (n<2) {
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }

module.exports = fib;
