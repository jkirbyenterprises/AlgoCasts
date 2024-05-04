// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.theStack = (new Stack());
        this.sortedStack = new Stack();
    }    
    add(value) {
        this.theStack.push(value);
    }
    remove() {
        while(this.theStack.peek() !== undefined) {
            this.sortedStack.push(this.theStack.pop());
        }
        let value = this.sortedStack.pop();
        while(this.sortedStack.peek() !== undefined) {
            this.theStack.push(this.sortedStack.pop());
        }
        return value;
    }
    peek() {
        while(this.theStack.peek() !== undefined) {
            this.sortedStack.push(this.theStack.pop());
        }
        let peekValue = this.sortedStack.peek();
        while(this.sortedStack.peek() !== undefined) {
            this.theStack.push(this.sortedStack.pop());
        }
        return peekValue;
    }
}

// My first solution
// class Queue {
//     constructor() {
//         this.theStack = (new Stack());
//     }    
//     add(value) {
//         this.theStack.push(value);
//     }
//     remove() {
//         const sortedStack = new Stack();
//         while(this.theStack.peek() !== undefined) {
//             sortedStack.push(this.theStack.pop());
//         }
//         let value = sortedStack.pop();
//         while(sortedStack.peek() !== undefined) {
//             this.theStack.push(sortedStack.pop());
//         }
//         return value;
//     }
//     peek() {
//         const sortedStack = new Stack();
//         while(this.theStack.peek() !== undefined) {
//             sortedStack.push(this.theStack.pop());
//         }
//         let peekValue = sortedStack.peek();
//         while(sortedStack.peek() !== undefined) {
//             this.theStack.push(sortedStack.pop());
//         }
//         return peekValue;
//     }
// }

module.exports = Queue;
