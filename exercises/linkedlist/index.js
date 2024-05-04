// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(nodeValue = null, nextNode = null) {
        this.data = nodeValue;
        this.next = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(nodeValue) {
        const headNode = this.head;
        const newNode = new Node(nodeValue, (headNode) ? headNode : null);
        this.head = newNode;
    }
    size() {
        let numNodes = 0;
        let node = this.head;
        while(node != null) {
            numNodes++;
            node = node.next;
        }
        return numNodes;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let node = this.head;
        while(node.next != null) {
            node = node.next;
        }
        return node;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        this.head = this.head.next;
    }
    removeLast() {
        let node = this.head;
        let prevNode = null;
        
        while(node && node.next != null) {
            prevNode = node;
            node = node.next;
        }

        if(prevNode) {
            prevNode.next = null;
        } else {
            this.head = null;
        }
    }
    insertLast(nodeValue) {
        let node = this.head;
        let newNode = new Node(nodeValue);
        
        if(node === null) {
            this.head = newNode;
            return;
        }
        
        while(node.next != null) {
            node = node.next;
        }

        node.next = newNode;
    }
    getAt(index) {
        let searchIndex = 0;
        let node = this.head;
        while(searchIndex < index) {

            if(node === null) {
                return null;
            }
            
            node = node.next;
            searchIndex++;
        }
        return node;
    }
    removeAt(index) {
        let searchIndex = 0;
        let node = this.head;
        let prevNode = this.head;
        
        if(index === 0) {
            this.head = (this.head) ? this.head.next : null;
            return;
        }

        const size = this.size();

        if(size < 1 || size < index+1) {
            return;
        }

        while(searchIndex < index) {
            prevNode = node;
            node = node.next;
            searchIndex++;
        }

        prevNode.next = node.next;
    }
    insertAt(nodeValue, index) {
        let searchIndex = 0;
        let node = this.head;
        let prevNode = this.head;

        if(index < 0) {
            index = 0;
        }

        const size = this.size();
        
        if(index > size) {
            index = size;
        }

        if(index === 0) {
            this.head = new Node(nodeValue, this.head);
            return;
        }

        while(searchIndex < index) {
            prevNode = node;
            node = node.next;
            searchIndex++
        }

        let newNode = new Node(nodeValue, node);
        prevNode.next = newNode;
    }
    forEach(execFunction) {
        let node = this.head;
        while(node != null) {
            execFunction(node);
            node = node.next;
        }
    }
    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
    // [Symbol.iterator]() {
    //     let node = this.head;
    //     return {
    //         next() {
                
    //             if(node !== null) {
    //                 node = node.next;
    //             }

    //             if(node === null) {
    //                 return {done: true}
    //             } else {
    //                 return {done: false, value: node}
    //             }
    //         },
    //         return() {
    //             return {done: true };
    //         }
    //     }
    // }
}

module.exports = { Node, LinkedList };
