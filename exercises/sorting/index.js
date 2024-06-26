// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                const value = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = value;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i) {
            const value = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = value;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }

    const chunkSize = Math.floor(arr.length / 2);
    const left = arr.slice(0,chunkSize)
    const right = arr.slice(chunkSize, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
