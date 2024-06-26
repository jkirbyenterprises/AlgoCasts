// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
    insert(value) {
        if(value < this.data) {
            if(this.left === null) {
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        }

        if(value > this.data) {
            if(this.right === null) {
                this.right = new Node(value);
            } else {
                this.right.insert(value);
            }
        }
    }
    contains(value) {
        if(value === this.data) {
            return this;
        }
        if(this.left && value < this.data) {
            return this.left.contains(value);
        }
        if(this.right && value > this.data) {
            return this.right.contains(value);
        }
        return null;
    }
}

// My initial
// class Node {
//     constructor(value) {
//         this.data = value;
//         this.left = null;
//         this.right = null;
//     }
//     insert(value) {
//         if(value < this.data) {
//             if(this.left === null) {
//                 this.left = new Node(value);
//             } else {
//                 this.left.insert(value);
//             }
//         }

//         if(value > this.data) {
//             if(this.right === null) {
//                 this.right = new Node(value);
//             } else {
//                 this.right.insert(value);
//             }
//         }
//     }
//     contains(value) {
//         if(value === this.data) {
//             return this;
//         }
//         if(this.left && value < this.data) {
//             return this.left.contains(value);
//         }
//         if(this.right && value > this.data) {
//             return this.right.contains(value);
//         }
//         return null;
//     }
// }

module.exports = Node;
