// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(value) {
        this.data = value;
        this.children = [];
    }
    add(value) {
        this.children.push(new Node(value));
    }
    remove(value) {
        this.children = this.children.filter((node) => node.data !== value);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    traverseBF(callback) {
        const arr = [this.root];
        while(arr.length) {
            const node = arr.shift();
            arr.push(...node.children);

            callback(node);
        }
    }
    traverseDF(callback) {
        const arr = [this.root];
        while(arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);

            callback(node);
        }
    }
}

// My initial solution
// class Tree {
//     constructor() {
//         this.root = null;
//     }
//     traverseBF(callback, rootNode = this.root) {
        
//         if(rootNode === this.root) {
//             callback(rootNode);
//         }
        
//         rootNode.children.forEach(node => {
//             callback(node);
//         });
        
//         rootNode.children.forEach(node => {
//             this.traverseBF(callback, node);
//         });
//     }
//     traverseDF(callback, rootNode = this.root) {
        
//         if(rootNode === this.root) {
//             callback(rootNode);
//         }
        
//         rootNode.children.forEach(node => {
//             callback(node);
//             this.traverseBF(callback, node);
//         });
//     }
// }

module.exports = { Tree, Node };
