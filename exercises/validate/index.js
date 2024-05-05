// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    const isNodeInvalid = (min !== null && node.data < min) || (max !== null && node.data > max);
    if(isNodeInvalid) { return false; }

    const isLeftInvalid = (node.left !== null && !validate(node.left, min, node.data));
    if(isLeftInvalid) { return false; }

    const isRightInvalid = (node.right !== null && !validate(node.right, node.data, max));
    if(isRightInvalid) { return false; }

    return true;
}

// My initial
// function validate(node, min = null, max = null) {
//     const isNodeValid = (min === null || node.data > min) && (max === null || node.data < max);
//     const isLeftValid = (node.left === null) || validate(node.left, min, node.data);
//     const isRightValid = (node.right === null) || validate(node.right, node.data, max);
    
//     return isNodeValid && isLeftValid && isRightValid;
// }

module.exports = validate;
