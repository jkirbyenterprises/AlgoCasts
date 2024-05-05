// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
function levelWidth(root) {
    const arr = [root, 's'];
    const widths = [0];
    let level = 0;

    while(arr.length > 1) {
        const node = arr.shift();

        if(node === 's') {
            arr.push('s');
            level++;
            widths.push(0);
            continue;
        }

        arr.push(...node.children);
        widths[level]++;
    }

    return widths;
}

// Initial solution based on Grider explanation
// function levelWidth(root) {
//     const arr = [root, 's'];
//     const widths = [0];
//     let level = 0;
//     while(arr.length > 1) {
//         const node = arr.shift();

//         if(node === 's') {    
//             arr.push('s');
//             level++;
//             widths.push(0);
//             continue;
//         }

//         arr.push(...node.children);

//         widths[level]++;
//     }

//     return widths;
// }

module.exports = levelWidth;
