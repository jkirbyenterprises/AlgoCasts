// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// memoized
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        cache[args] = fn.apply(this, args);
        return cache[args];
    }
}

function fib(n) {
    if (n<2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

fib = memoize(fib);

// function fib(n) {
//     if(cachedResults[n]) {
//         return cachedResults[n];
//     }

//     if (n<2) {
//         return n;
//     }

//     cachedResults[n] = fib(n-1) + fib(n-2);
//     return cachedResults[n];
// }

// using cache to improve exponential runtime
// let cachedResults = {};
// function fib(n) {
    
//     if(cachedResults[n]) {
//         return cachedResults[n];
//     }

//     if (n<2) {
//         return n;
//     }

//     cachedResults[n] = fib(n-1) + fib(n-2);
//     return cachedResults[n];
// }

// Linear Runtime
// function fib(n) {
//     let results = [0,1];
//     for(let index = 2; index <= n; index++) {
//         results.push(results[index-1]+results[index-2]);
//     }
//     return results[results.length-1];
// }

// Slow recursive solution (exponential runtime)
// function fib(n) {
//     if (n<2) {
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }

module.exports = fib;
