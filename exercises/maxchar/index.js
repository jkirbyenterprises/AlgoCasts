// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const occurrences = {};
    for(const char of str) {
        occurrences[char] = occurrences[char] + 1 || 1;
    }
    
    return Object.keys(occurrences).sort((a,b)=>(occurrences[b]-occurrences[a]))[0];
}

module.exports = maxChar;

//First attempt (fails on numbers)
// const occurrences = [];
// str.split('').forEach(element => {
//     (occurrences[element])
//     ? occurrences[element]++
//     : occurrences[element] = 1;
// });
// return Object.keys(
//     occurrences.sort((a,b)=>b-a)
// )[0];

//Second attempt (working) with switching to object to allow numeric keys and using 
//sort solution from https://stackoverflow.com/a/16794116
// const occurrences = {};
// str.split('').forEach(element => {
//     (occurrences[element])
//     ? occurrences[element]++
//     : occurrences[element] = 1;
// });

// return Object.keys(occurrences).sort((a,b)=>(occurrences[b]-occurrences[a]))[0];