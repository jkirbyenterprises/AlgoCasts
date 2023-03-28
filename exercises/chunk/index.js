// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while(index < array.length) {
        chunked.push(array.slice(index,index+size));
        index+=size;
    }
    return chunked;
}

module.exports = chunk;

// My initial solution
// let subArrays = [];
// let subArray = [];
// array.forEach((element, index) => {
//     subArray.push(element);
//     if(subArray.length == size
//         || index == array.length-1) {
//         subArrays.push(subArray);
//         subArray = [];
//     }
// });
// return subArrays;

// Grider solution #1
// const chunked = [];

// for(const element of array) {
//     const last = chunked[chunked.length - 1];

//     if(!last || last.length === size) {
//         chunked.push([element]);
//     } else {
//         last.push(element);
//     }
// }

// return chunked;

// Grider solution #2 (scales much better according to jsperf tests)
// const chunked = [];
// let index = 0;
// while(index < array.length) {
//     chunked.push(array.slice(index,index+size));
//     index+=size;
// }
// return chunked;